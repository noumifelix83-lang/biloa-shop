import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import Newsletter from '../components/Newsletter.jsx';
import { ArrowRight, CupIcon, GlobeIcon, HeartHandIcon, LeafIcon, TruckIcon } from '../components/Icons.jsx';
import { useCart } from '../context/CartContext.jsx';
import { CATEGORIES, PRODUCTS, SERVICES, formatPrice, getItem } from '../data/catalog.js';
import { FREE_US_SHIPPING_THRESHOLD } from '../data/shipping.js';
import { usePageMeta } from '../utils.js';

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
            <img className="hero-main" src="/images/relaxation-tea.webp" alt="" width="900" height="900" fetchpriority="high" />
            <img className="hero-side hero-side-left" src="/images/lavender-eucalyptus-oil.webp" alt="" width="900" height="900" />
            <img className="hero-side hero-side-right" src="/images/gua-sha.webp" alt="" width="900" height="900" />
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
                  <img src={c.image} alt="" loading="lazy" />
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
            Grass represents nourishment, resilience, renewal and connection to the earth. It bends without losing its roots, adapts to changing
            conditions, and returns after difficult seasons.
          </p>
          <Link to="/about" className="btn btn-gold">
            Read our story
          </Link>
        </div>
      </section>

      {/* ── Feature: Relaxation Tea ────────────────── */}
      <section className="section">
        <div className="container feature">
          <div className="feature-media" style={{ '--accent': relax.accent }}>
            <img src={relax.image} alt={relax.name} loading="lazy" />
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
      <section className="section section-tint">
        <div className="container coaching">
          <div className="coaching-copy">
            <p className="eyebrow">Wellness coaching</p>
            <h2>Guidance that fits your real life</h2>
            <p>
              Personalized nutrition education, meal-planning support and wellness coaching with Dr. Paola Biloa Njandja — without restrictive or
              unrealistic expectations. You'll be heard, respected and supported without judgment.
            </p>
            <ul className="service-mini-list">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`}>
                    <span>{s.name}</span>
                    <span className="service-mini-price">{formatPrice(s.price)}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/services" className="btn btn-primary">
              Explore packages <ArrowRight size={18} />
            </Link>
          </div>
          <div className="coaching-media">
            <img src="/images/coaching.webp" alt="A calm table with herbal tea, a healthy bowl and an open journal" loading="lazy" />
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
