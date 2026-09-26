# Biloa Holistic Care & Wellness — Online Shop

A React (Vite) storefront for Biloa's herbal teas, botanical oils, bath & skincare products and wellness-coaching packages.
Payments run through **Stripe Checkout**: cards, Apple Pay and Google Pay, with US and international shipping.

## Run it on your computer

```bash
npm install
npm run dev
```

Open http://localhost:5173. While running locally, "Continue to secure payment" simulates a successful order (no money is taken).

## Where to change things

| What | File |
| --- | --- |
| Products, prices, descriptions, services | `src/data/catalog.js` |
| Shipping rates, free-shipping threshold, countries | `src/data/shipping.js` |
| Email, location, social links | `src/config.js` |
| Returns policy & FAQ text | `src/pages/Faq.jsx` |
| Colors, fonts, spacing | `src/styles/global.css` (variables at the top) |
| Product photos | `public/images/` (`.webp` for the site, `.jpg` for Stripe receipts) |

To add a product, copy an existing entry in `catalog.js`, give it a new `id` and add its photo to `public/images/`.

## Go live (about 20 minutes)

1. **Create a Stripe account** at https://stripe.com and complete business verification.
2. **Put the code on GitHub** (a free account works).
3. **Deploy on Vercel** (https://vercel.com, free tier): *Add New → Project*, pick the repo, and keep the defaults (Vite is detected automatically).
4. In Vercel, open **Settings → Environment Variables** and add:
   - `STRIPE_SECRET_KEY`: from Stripe → Developers → API keys. Use `sk_test_…` first to try test cards, then switch to `sk_live_…`.
   - `STRIPE_AUTOMATIC_TAX=true`: optional, after you turn on Stripe Tax for the states where you must collect sales tax.
   - `VITE_FORMSPREE_ID`: optional. It lets the contact and newsletter forms send straight to your inbox (https://formspree.io).
5. Redeploy, then connect your domain under **Settings → Domains**.
6. In Stripe, turn on **Apple Pay / Google Pay** (Settings → Payment methods) and **email receipts** (Settings → Customer emails).

Orders appear in your Stripe dashboard with the customer's shipping address and phone number. Coaching bookings are listed in each payment's metadata.

## How checkout stays secure

The browser only sends product IDs and quantities. The server function (`api/create-checkout-session.js`) looks up the real prices and shipping cost in `src/data/`, so customers can't change what they pay. Card details are entered on Stripe's page and never touch this site.
