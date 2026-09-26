// Serverless function (Vercel) that creates a Stripe Checkout session.
// Prices and shipping are re-calculated here from the shared catalog, so a
// visitor can't change what they pay by editing the page.
//
// Required environment variable (set it in your Vercel project settings):
//   STRIPE_SECRET_KEY   — from https://dashboard.stripe.com/apikeys
// Optional:
//   STRIPE_AUTOMATIC_TAX=true   — turn on once Stripe Tax is set up for your state(s)

import Stripe from 'stripe';
import { getItem } from '../src/data/catalog.js';
import { INTERNATIONAL_COUNTRIES, findShippingOption } from '../src/data/shipping.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(503).json({ error: 'Payments are not configured yet.' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { items = [], country = 'US', shippingOptionId } = req.body || {};

  const lines = [];
  for (const { id, qty } of Array.isArray(items) ? items.slice(0, 50) : []) {
    const item = getItem(id);
    const quantity = Math.floor(Number(qty));
    if (!item || !(quantity >= 1 && quantity <= 20)) continue;
    lines.push({ item, quantity: item.type === 'service' ? 1 : quantity });
  }
  if (lines.length === 0) return res.status(400).json({ error: 'Your cart is empty.' });

  const origin = req.headers.origin || `https://${req.headers.host}`;
  const productSubtotal = lines.filter((l) => l.item.type === 'product').reduce((s, l) => s + l.item.price * l.quantity, 0);
  const needsShipping = productSubtotal > 0;

  const isUS = country === 'US';
  const knownIntl = INTERNATIONAL_COUNTRIES.some((c) => c.code === country);
  const destination = isUS || knownIntl ? country : 'US';

  const params = {
    mode: 'payment',
    line_items: lines.map(({ item, quantity }) => ({
      quantity,
      price_data: {
        currency: 'usd',
        unit_amount: item.price,
        product_data: {
          name: item.name,
          ...(item.image ? { images: [origin + item.image.replace('.webp', '.jpg')] } : {}),
          metadata: { id: item.id, type: item.type },
        },
      },
    })),
    phone_number_collection: { enabled: true },
    billing_address_collection: 'auto',
    success_url: `${origin}/order-confirmed?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/checkout`,
    metadata: {
      services: lines.filter((l) => l.item.type === 'service').map((l) => l.item.name).join(', ').slice(0, 480),
    },
  };

  if (needsShipping) {
    const option = findShippingOption(destination, productSubtotal, shippingOptionId);
    params.shipping_address_collection = { allowed_countries: [destination] };
    params.shipping_options = [
      {
        shipping_rate_data: {
          display_name: option.label,
          type: 'fixed_amount',
          fixed_amount: { amount: option.amount, currency: 'usd' },
          delivery_estimate: {
            minimum: { unit: 'business_day', value: option.days[0] },
            maximum: { unit: 'business_day', value: option.days[1] },
          },
        },
      },
    ];
  }

  if (process.env.STRIPE_AUTOMATIC_TAX === 'true') {
    params.automatic_tax = { enabled: true };
  }

  try {
    const session = await stripe.checkout.sessions.create(params);
    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error', err);
    return res.status(500).json({ error: 'We could not start the payment. Please try again.' });
  }
}
