import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { bySlug } from "@/lib/products";
import { site } from "@/data/site";
import { clientIp, rateLimit } from "@/lib/rateLimit";

// Anti-carding guards: card testers fire many tiny orders from one place.
const MIN_ORDER = 1000; // S$10.00
const MAX_LINES = 20;
const MAX_UNITS = 100;
const SESSIONS_PER_IP = 6; // per 10 minutes

interface IncomingItem {
  slug: string;
  variantId: string;
  qty: number;
  message?: string;
}

export async function POST(req: Request) {
  const ip = clientIp(req);
  if (!rateLimit(`checkout:${ip}`, SESSIONS_PER_IP, 10 * 60 * 1000)) {
    return NextResponse.json(
      { error: "Too many checkout attempts. Please wait a few minutes or WhatsApp us to order." },
      { status: 429 },
    );
  }

  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe is not connected yet. Add STRIPE_SECRET_KEY to .env.local to enable checkout." },
      { status: 503 },
    );
  }

  let body: { items?: IncomingItem[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const items = (body.items ?? []).filter((i) => i && typeof i.slug === "string" && Number.isInteger(i.qty) && i.qty > 0 && i.qty <= 50);
  if (items.length === 0) return NextResponse.json({ error: "Your bag is empty" }, { status: 400 });
  if (items.length > MAX_LINES || items.reduce((n, i) => n + i.qty, 0) > MAX_UNITS) {
    return NextResponse.json({ error: "That is a large order. Please WhatsApp us for bulk orders." }, { status: 400 });
  }

  // Prices are always taken from the server-side catalog, never from the client.
  const line_items = [];
  let subtotal = 0;
  for (const item of items) {
    const product = bySlug(item.slug);
    const variant = product?.variants.find((v) => v.id === item.variantId);
    if (!product || !variant) return NextResponse.json({ error: `Unknown product: ${item.slug}` }, { status: 400 });
    const description = [variant.label, variant.note, item.message ? `Message: "${item.message.slice(0, 60)}"` : null]
      .filter(Boolean)
      .join(" · ");
    subtotal += variant.price * item.qty;
    line_items.push({
      quantity: item.qty,
      price_data: {
        currency: site.currency,
        unit_amount: variant.price,
        product_data: {
          name: product.name,
          description,
          images: [`${origin(req)}${product.image}`],
          metadata: { slug: product.slug, variant: variant.id },
        },
      },
    });
  }

  if (subtotal < MIN_ORDER) {
    return NextResponse.json({ error: "Minimum order is S$10." }, { status: 400 });
  }

  const base = origin(req);
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${base}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${base}/cart`,
      phone_number_collection: { enabled: true },
      shipping_address_collection: { allowed_countries: ["SG"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 0, currency: site.currency },
            display_name: "Self-collection (Greenridge or Woodlands)",
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: site.deliveryFee, currency: site.currency },
            display_name: "Island-wide delivery",
          },
        },
      ],
      custom_fields: [
        {
          key: "collection_date",
          label: { type: "custom", custom: "Collection / delivery date (min. 3 days ahead)" },
          type: "text",
        },
        {
          key: "flavour",
          label: { type: "custom", custom: "Cake flavour (if ordering cakes)" },
          type: "dropdown",
          optional: true,
          dropdown: {
            options: [
              { label: "Vanilla", value: "vanilla" },
              { label: "Chocolate", value: "chocolate" },
              { label: "Pandan", value: "pandan" },
              { label: "Red velvet", value: "redvelvet" },
              { label: "Oreo", value: "oreo" },
            ],
          },
        },
      ],
      metadata: {
        ip,
        items: JSON.stringify(items.map((i) => `${i.slug}:${i.variantId}x${i.qty}`)).slice(0, 490),
      },
    });
    return NextResponse.json({ url: session.url });
  } catch (e) {
    // Log Stripe's technical message for us; show customers a plain one.
    console.error("[checkout]", e instanceof Error ? e.message : e);
    return NextResponse.json(
      { error: "Checkout is unavailable right now. Please try again, or WhatsApp us to order." },
      { status: 500 },
    );
  }
}

function origin(req: Request) {
  return process.env.NEXT_PUBLIC_SITE_URL ?? new URL(req.url).origin;
}
