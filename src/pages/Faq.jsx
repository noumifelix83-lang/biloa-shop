import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Accordion, { AccordionItem } from '../components/Accordion.jsx';
import { STORE } from '../config.js';
import { formatPrice, formatPriceExact } from '../data/catalog.js';
import { FREE_US_SHIPPING_THRESHOLD, shippingOptions } from '../data/shipping.js';
import { usePageMeta } from '../utils.js';

export default function Faq() {
  usePageMeta('Shipping, Returns & FAQ', 'Shipping rates, delivery times, returns and answers to common questions about Biloa products and coaching.');
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);

  const us = shippingOptions('US', 0);
  const rows = [
    ['United States — Standard', us[0], `Free over ${formatPrice(FREE_US_SHIPPING_THRESHOLD)}`],
    ['United States — Express', us[1], ''],
    ['Canada & Mexico', shippingOptions('CA', 0)[0], ''],
    ['Rest of the world', shippingOptions('GB', 0)[0], ''],
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span aria-current="page">Shipping &amp; FAQ</span>
          </nav>
          <h1>Shipping, returns &amp; FAQ</h1>
          <p>Everything you need to know before and after you order.</p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container faq-wrap">
          <h2 id="shipping">Shipping rates</h2>
          <p>Orders ship from Maryland, USA, within 1–3 business days. You’ll receive a confirmation email when your order is placed.</p>
          <div className="table-wrap">
            <table className="ship-table">
              <thead>
                <tr>
                  <th>Destination</th>
                  <th>Delivery time</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, o, note]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td>
                      {o.days[0]}–{o.days[1]} business days
                    </td>
                    <td>
                      {formatPriceExact(o.amount)}
                      {note && <small> · {note}</small>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="fine-print">
            International orders are charged in US dollars. Customs duties and import taxes, if any, are set by the destination country and are the
            buyer’s responsibility. Some countries restrict the import of herbal or botanical products — please check your local rules before
            ordering.
          </p>

          <h2 id="returns">Returns</h2>
          <p>
            Because our teas, oils, soaks and skincare are personal-care products, we can only accept returns of unopened items in their original
            condition within 30 days of delivery. If your order arrives damaged or incorrect, email us within 7 days with a photo at{' '}
            <a href={`mailto:${STORE.email}`}>{STORE.email}</a> and we’ll make it right.
          </p>

          <h2 id="faq">Frequently asked questions</h2>
          <Accordion>
            <AccordionItem title="Are your teas caffeine-free?" defaultOpen>
              <p>Yes. Relaxation, Winter Warm and Gentle Regularity teas are all naturally caffeine-free herbal blends made with organic herbs.</p>
            </AccordionItem>
            <AccordionItem title="Can I drink the teas iced?">
              <p>
                Absolutely. Steep one bag in 8 fl oz of freshly boiled water for 5–7 minutes, let it cool and serve over ice. Relaxation Tea is also
                lovely chilled in a wine glass as an alcohol-free treat.
              </p>
            </AccordionItem>
            <AccordionItem title="How do I use the body & scalp oils?">
              <p>
                Our oil blends are already diluted and ready to use. Apply a small amount to the body or scalp and massage gently until absorbed.
                Please patch test first. The Lavender &amp; Eucalyptus blend uses sweet almond oil — avoid it if you have a tree-nut allergy.
              </p>
            </AccordionItem>
            <AccordionItem title="How do coaching packages work?">
              <p>
                Choose a package on our <Link to="/services">Wellness Coaching</Link> page and check out securely. We’ll then email you to schedule
                your first consultation. Not sure which package suits you? <Link to="/contact">Send us a question</Link>.
              </p>
            </AccordionItem>
            <AccordionItem title="Is wellness coaching a medical service?">
              <p>
                No. Biloa provides general nutrition education and wellness coaching. Services are not medical nutrition therapy and are not
                intended to diagnose, treat, cure, or prevent disease. Please consult a physician or licensed dietitian-nutritionist for medical
                conditions or therapeutic dietary needs.
              </p>
            </AccordionItem>
            <AccordionItem title="Which payment methods do you accept?">
              <p>
                We accept Visa, Mastercard, American Express, Discover, Apple Pay and Google Pay through our secure payment partner, Stripe. Your
                card details are never stored on our website.
              </p>
            </AccordionItem>
            <AccordionItem title="Do you ship outside the United States?">
              <p>
                Yes — we ship to many countries worldwide. Choose your country at checkout to see available shipping options and rates.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
