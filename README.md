# Amethyst Pastry & Cakes — website

Premium e-commerce site for Amethyst Pastry & Cakes 紫晶阁 (Singapore). Built with Next.js 16, Tailwind 4, Framer Motion and Stripe Checkout.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Connect Stripe

1. Copy `.env.example` to `.env.local`.
2. Paste your **test** secret key from https://dashboard.stripe.com/apikeys into `STRIPE_SECRET_KEY`.
3. Restart `npm run dev`. The "Secure checkout" button now redirects to Stripe Checkout, which collects name, phone, delivery address, collection/delivery date, cake flavour and payment (cards, PayNow, Apple Pay, Google Pay — enable the methods you want in the Stripe dashboard).
4. Optional: create a webhook in Stripe pointing at `https://your-domain/api/webhook` for the `checkout.session.completed` event, and put its signing secret in `STRIPE_WEBHOOK_SECRET`. Orders are logged to the server console in `src/app/api/webhook/route.ts`; hook your own email/WhatsApp notification there.
5. Set `NEXT_PUBLIC_SITE_URL` to the live domain so Stripe receives absolute image URLs.

Prices are always taken from the server-side catalog, never from the browser.

## Card security ("no carding")

The website itself never sees or stores card numbers. Payment happens only on Stripe's hosted Checkout page, which is PCI compliant and screened by Stripe Radar. On top of that, `src/app/api/checkout/route.ts` blocks the patterns card-testing bots rely on:

- prices come from the server catalog, never from the browser;
- a minimum order of S$10 and caps on line count and units;
- at most 6 checkout sessions per IP every 10 minutes (`src/lib/rateLimit.ts`), with the IP stored in session metadata;
- the contact form never asks for payment details and opens WhatsApp or email, so nothing is stored on the site.

In the Stripe dashboard, keep Radar on, enable 3D Secure where available, and consider blocking payments when the CVC or postal code check fails (Radar rules).

## Edit content

| What | Where |
| --- | --- |
| Products, prices, sizes, descriptions | `src/lib/products.ts` |
| Homepage stats (happy customers is a placeholder) | `src/components/home/AboutTeaser.tsx` |
| Outlet addresses, phone, WhatsApp, delivery fee | `src/data/site.ts` |
| Google reviews on the homepage | `src/data/reviews.ts` |
| Instagram tiles | `src/data/instagram.ts` |
| Contact page copy and FAQs | `src/app/contact/page.tsx` |
| Announcement bar text | `src/components/Header.tsx` |
| Hero cutouts and backdrops | `src/components/home/HeroShowcase.tsx` |
| Images | `public/images/<collection>/` |

**Cake prices are placeholders.** The CNY goodies and mooncake prices come from the 2026 price lists; no cake price list was supplied, so edit `CAKE_PRICING` in `src/lib/products.ts` before launch.

## Deploy

```bash
npm run build
npm start
```

Or push to GitHub and import into Vercel. Add the three environment variables in the Vercel project settings.
