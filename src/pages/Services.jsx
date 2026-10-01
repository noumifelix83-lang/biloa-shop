import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CalendarIcon, CheckIcon } from '../components/Icons.jsx';
import { useCart } from '../context/CartContext.jsx';
import { SERVICES, formatPrice } from '../data/catalog.js';
import { imgSet, usePageMeta } from '../utils.js';

const STEPS = [
  { title: 'Choose your support', text: 'Pick the package or single session that fits your goals, schedule and budget.' },
  { title: 'Check out securely', text: 'Pay online in minutes with a card, Apple Pay or Google Pay.' },
  { title: 'Schedule your first session', text: 'We’ll email you within 1–2 business days to find a time that works for you.' },
];

function ServiceCard({ service: s, inCart, onBook }) {
  const isPackage = s.group === 'package';
  return (
    <article id={s.id} className={`service-card${s.featured ? ' featured' : ''}`}>
      {s.featured && <span className="service-flag">Includes meal planning</span>}
      {s.duration && <p className="service-duration">{s.duration}</p>}
      <h3>{s.name}</h3>
      {s.headline && <p className="service-headline">{s.headline}</p>}
      <p className="service-price">{formatPrice(s.price)}</p>
      <p className="service-summary">{s.summary}</p>
      <p className="service-includes-title">{s.includesTitle || (isPackage ? 'This package includes' : 'What we’ll do together')}</p>
      <ul className="check-list">
        {s.includes.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      {s.idealFor && (
        <p className="service-ideal">
          <strong>Ideal for:</strong> {s.idealFor}
        </p>
      )}
      <div className="service-actions">
        {inCart ? (
          <Link to="/checkout" className="btn btn-primary btn-block">
            <CheckIcon size={18} /> In your cart — checkout
          </Link>
        ) : (
          <button className="btn btn-primary btn-block" onClick={onBook}>
            <CalendarIcon size={18} /> {isPackage ? 'Book this package' : 'Book this session'}
          </button>
        )}
        <Link to={`/contact?topic=${encodeURIComponent(s.name)}`} className="btn btn-ghost btn-block">
          Ask a question first
        </Link>
      </div>
    </article>
  );
}

export default function Services() {
  usePageMeta('Wellness Coaching', 'Personalized nutrition education, meal-planning support and holistic wellness coaching with Dr. Paola Biloa Njandja.');
  const { addItem, lines } = useCart();
  const { hash } = useLocation();
  const inCart = new Set(lines.map((l) => l.id));

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [hash]);

  return (
    <>
      <section className="services-hero">
        <img {...imgSet('/images/coaching.webp', { small: 800, large: 1448 })} sizes="100vw" alt="" className="services-hero-bg" />
        <div className="container services-hero-inner">
          <p className="eyebrow eyebrow-light">Wellness coaching</p>
          <h1>Personalized support for a more holistic life</h1>
          <p>
            Nutrition education, meal-planning support and wellness coaching that respects your culture, preferences, schedule and budget — so
            healthy choices feel manageable, not overwhelming.
          </p>
          <a href="#packages" className="btn btn-gold btn-lg">
            View services
          </a>
        </div>
      </section>

      <section className="section" id="packages">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Coaching services</p>
            <h2>Find the support that fits your needs</h2>
          </div>
          <h3 className="service-group-title">Packages</h3>
          <p className="service-group-sub">Ongoing guidance, education, and accountability over several sessions.</p>
          <div className="service-grid service-grid-3">
            {SERVICES.filter((s) => s.group === 'package').map((s) => (
              <ServiceCard key={s.id} service={s} inCart={inCart.has(s.id)} onBook={() => addItem(s.id)} />
            ))}
          </div>

          <h3 className="service-group-title" id="sessions">Single sessions</h3>
          <p className="service-group-sub">A focused, one-time session — a simple way to begin.</p>
          <div className="service-grid service-grid-3">
            {SERVICES.filter((s) => s.group === 'session').map((s) => (
              <ServiceCard key={s.id} service={s} inCart={inCart.has(s.id)} onBook={() => addItem(s.id)} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>Getting started is simple</h2>
          </div>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="step-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container expect">
          <div className="expect-media">
            <img {...imgSet('/images/holistic-living.webp', { small: 800, large: 1448 })} sizes="(max-width: 900px) 100vw, 580px" alt="An organized pantry with glass jars of grains and baskets of fresh produce" loading="lazy" />
          </div>
          <div>
            <p className="eyebrow">What you can expect</p>
            <h2>Heard, respected and supported — without judgment</h2>
            <p>
              We take time to understand your goals, preferences, schedule, culture, budget, and the realities that shape your daily life. Our role
              is to provide education, encouragement, accountability, and practical guidance that helps you make informed wellness choices with
              greater confidence.
            </p>
            <Link to="/about" className="text-link">
              Meet Dr. Paola →
            </Link>
          </div>
        </div>
      </section>

      <section className="container disclaimer-box">
        <p>
          Biloa Holistic Care &amp; Wellness provides general nutrition education and wellness coaching. Services are not medical nutrition therapy
          and are not intended to diagnose, treat, cure, or prevent disease. Individuals with medical conditions or therapeutic dietary needs should
          consult a physician or licensed dietitian-nutritionist.
        </p>
      </section>
    </>
  );
}
