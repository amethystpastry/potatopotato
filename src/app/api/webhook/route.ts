import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

/**
 * Stripe webhook. Point Stripe at /api/webhook and set STRIPE_WEBHOOK_SECRET.
 * On `checkout.session.completed` this is where you'd save the order, email the
 * kitchen, or post to WhatsApp. For now it logs the order to the server console.
 */
export async function POST(req: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret) return NextResponse.json({ error: "Webhook not configured" }, { status: 503 });

  const sig = req.headers.get("stripe-signature");
  const payload = await req.text();
  let event;
  try {
    event = stripe.webhooks.constructEvent(payload, sig ?? "", secret);
  } catch (e) {
    return NextResponse.json({ error: `Invalid signature: ${e instanceof Error ? e.message : ""}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const lines = await stripe.checkout.sessions.listLineItems(session.id, { limit: 50 });
    console.log("[order]", {
      id: session.id,
      name: session.customer_details?.name,
      phone: session.customer_details?.phone,
      email: session.customer_details?.email,
      total: session.amount_total,
      shipping: session.shipping_cost?.amount_total,
      fields: session.custom_fields?.map((f) => ({ key: f.key, value: f.text?.value ?? f.dropdown?.value })),
      items: lines.data.map((l) => `${l.quantity} × ${l.description}`),
    });
  }
  return NextResponse.json({ received: true });
}
