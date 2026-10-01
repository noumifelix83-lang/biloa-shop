import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import Newsletter from '../components/Newsletter.jsx';
import PostCard from '../components/PostCard.jsx';
import { POSTS } from '../data/blog.js';
import { ArrowRight, CupIcon, GlobeIcon, HeartHandIcon, LeafIcon, TruckIcon } from '../components/Icons.jsx';
import { useCart } from '../context/CartContext.jsx';
import { CATEGORIES, PRODUCTS, SERVICES, formatPrice, getItem } from '../data/catalog.js';
import { FREE_US_SHIPPING_THRESHOLD } from '../data/shipping.js';
import { imgSet, usePageMeta } from '../utils.js';

export default function Home() {
  usePageMeta();
  const { addItem } = useCart();
  const relax = getItem('relaxation-tea');

  return (
    <>
      {/* ── Hero ───────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Herbal teas · Botanical oils · Wellness coaching</p>
            <h1>
              Simple rituals for <em>everyday</em> wellness.
            </h1>
            <p className="hero-lead">
              Organic, caffeine-free teas, botanical body oils and earth-inspired skincare — thoughtfully made to help you slow down, reconnect and
              feel at home in yourself.
            </p>
            <div className="hero-ctas">
              <Link to="/shop" className="btn btn-primary btn-lg">
                Shop the collection <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                Wellness coaching
              </Link>
            </div>
            <ul className="hero-points">
              <li><LeafIcon size={18} /> Organic herbs</li>
              <li><CupIcon size={18} /> Caffeine-free</li>
              <li><TruckIcon size={18} /> Free US shipping {formatPrice(FREE_US_SHIPPING_THRESHOLD)}+</li>
            </ul>
          </div>

          <div className="hero-art" aria-hidden>
            <div className="hero-arch">
              <span className="hero-arch-line" />
            </div>
            <img className="hero-main" {...imgSet('/images/relaxation-tea.webp')} sizes="(max-width: 640px) 56vw, 380px" alt="" width="900" height="900" fetchpriority="high" />
            <img className="hero-side hero-side-left" src="/images/lavender-eucalyptus-oil-sm.webp" alt="" width="450" height="450" />
            <img className="hero-side hero-side-right" src="/images/gua-sha-sm.webp" alt="" width="450" height="450" />
            <span className="hero-leaf hero-leaf-1" />
            <span className="hero-leaf hero-leaf-2" />
          </div>
        </div>
      </section>

      {/* ── Trust bar ──────────────────────────────── */}
      <section className="trust" aria-label="Why shop with Biloa">
        <div className="container trust-grid">
          <div><TruckIcon /><span><strong>Free US shipping</strong> on orders over {formatPrice(FREE_US_SHIPPING_THRESHOLD)}</span></div>
          <div><LeafIcon /><span><strong>Organic herbal blends</strong>, naturally caffeine-free</span></div>
          <div><HeartHandIcon /><span><strong>Botanical self-care</strong> made with intention</span></div>
          <div><GlobeIcon /><span><strong>We ship worldwide</strong> from Maryland, USA</span></div>
        </div>
      </section>

      {/* ── Categories ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Shop by ritual</p>
            <h2>Find your moment of calm</h2>
          </div>
          <div className="category-grid">
            {CATEGORIES.map((c) => (
              <Link key={c.id} to={`/shop?category=${c.id}`} className={`category-card cat-${c.id}`}>
                <div className="category-media">
                  <img {...imgSet(c.image)} sizes="(max-width: 900px) 34vw, 300px" alt="" loading="lazy" decoding="async" />
                </div>
                <div className="category-body">
                  <h3>{c.name}</h3>
                  <p>{c.blurb}</p>
                  <span className="text-link">
                    Shop now <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collection ─────────────────────────────── */}
      <section className="section section-tint">
        <div className="container">
          <div className="section-head section-head-row">
            <div>
              <p className="eyebrow">The collection</p>
              <h2>Thoughtfully made, gently used</h2>
            </div>
            <Link to="/shop" className="text-link">
              View all products <ArrowRight size={16} />
            </Link>
          </div>
          <div className="product-grid">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Meaning of Biloa ───────────────────────── */}
      <section className="meaning">
        <div className="container meaning-inner">
          <p className="eyebrow eyebrow-light">The meaning behind our name</p>
          <blockquote>
            <span className="meaning-big">Biloa</span> means <em>grass</em>.
          </blockquote>
          <p className="meaning-text">
            To us, grass represents nourishment, resilience, renewal, and a deep connection to the earth. It bends without losing its roots, adapts
            to changing conditions, and continues to grow — even after difficult seasons.
          </p>
          <Link to="/about" className="btn btn-gold">
            Read our story
          </Link>
        </div>
      </section>

      {/* ── Holistic health, reimagined ────────────── */}
      <section className="section reimagined">
        <div className="container reimagined-grid">
          <div className="reimagined-media">
            <img
              {...imgSet('/images/sunlit-rest.webp', { small: 600, large: 1122 })}
              sizes="(max-width: 900px) 92vw, 520px"
              alt="A woman sitting at ease on the floor of a calm, sunlit room"
              width="1122"
              height="1402"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="reimagined-copy">
            <p className="eyebrow">Our approach</p>
            <h2>Holistic health, reimagined</h2>
            <p>
              We see health and wellness as more than a number on a scale, a restrictive diet plan, or a collection of occasional self-care
              activities. We believe wellness is an ongoing relationship with the whole person — body, mind, environment, culture, relationships,
              and everyday life.
            </p>
            <p>
              We help you introduce healthier foods, routines, and activities gradually, allowing your palate, digestive system, and everyday life
              time to adjust.
            </p>
            <p className="reimagined-quote">Your journey is personal. Your pace is valid. Your progress is meaningful.</p>
            <Link to="/about#approach" className="text-link">
              Our mission &amp; values <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Feature: Relaxation Tea ────────────────── */}
      <section className="section section-tint">
        <div className="container feature">
          <div className="feature-media" style={{ '--accent': relax.accent }}>
            <img {...imgSet(relax.image)} sizes="(max-width: 900px) 80vw, 480px" alt={relax.name} loading="lazy" decoding="async" />
          </div>
          <div className="feature-copy">
            <p className="eyebrow">Tea ritual</p>
            <h2>Who said relaxation had to be boring?</h2>
            <p>
              Our Relaxation Tea blends organic rooibos, lemon balm, lavender and eucalyptus into a naturally caffeine-free cup. Sip it hot from your
              favorite mug — or serve it chilled in a wine glass for a refreshing, alcohol-free evening.
            </p>
            <ul className="check-list">
              <li>20 tea bags per jar</li>
              <li>Steep 5–7 minutes, hot or iced</li>
              <li>Naturally caffeine-free</li>
            </ul>
            <div className="feature-actions">
              <button className="btn btn-primary btn-lg" onClick={() => addItem(relax.id)}>
                Add to cart — {formatPrice(relax.price)}
              </button>
              <Link to={`/product/${relax.id}`} className="text-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coaching ───────────────────────────────── */}
      <section className="section">
        <div className="container coaching">
          <div className="coaching-copy">
            <p className="eyebrow">Wellness coaching</p>
            <h2>Guidance that fits your real life</h2>
            <p>
              Personalized nutrition education, meal-planning support and wellness coaching with Dr. Paola Biloa Njandja — without restrictive or
              unrealistic expectations. You'll be heard, respected and supported without judgment.
            </p>
            <ul className="service-mini-list">
              {SERVICES.filter((s) => s.group === 'package').map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`}>
                    <span>{s.name}</span>
                    <span className="service-mini-price">{formatPrice(s.price)}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services#sessions">
                  <span>Single sessions</span>
                  <span className="service-mini-price">
                    <small>from</small> {formatPrice(Math.min(...SERVICES.filter((s) => s.group === 'session').map((s) => s.price)))}
                  </span>
                </Link>
              </li>
            </ul>
            <Link to="/services" className="btn btn-primary">
              Explore packages <ArrowRight size={18} />
            </Link>
          </div>
          <div className="coaching-media">
            <img {...imgSet('/images/coaching.webp', { small: 800, large: 1448 })} sizes="(max-width: 900px) 100vw, 640px" alt="A calm table with herbal tea, a healthy bowl and an open journal" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ── Blog ───────────────────────────────────── */}
      <section className="section section-tint">
        <div className="container">
          <div className="section-head section-head-row">
            <div>
              <p className="eyebrow">From the blog</p>
              <h2>Read the latest</h2>
            </div>
            <Link to="/blog" className="text-link">
              All articles <ArrowRight size={16} />
            </Link>
          </div>
          <div className="post-grid">
            {POSTS.slice(0, 2).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
