import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Accordion, { AccordionItem } from '../components/Accordion.jsx';
import ProductCard from '../components/ProductCard.jsx';
import QtyPicker from '../components/QtyPicker.jsx';
import { CheckIcon, GlobeIcon, LockIcon, TruckIcon } from '../components/Icons.jsx';
import { useCart } from '../context/CartContext.jsx';
import { CATEGORIES, PRODUCTS, formatPrice, formatPriceExact } from '../data/catalog.js';
import { FREE_US_SHIPPING_THRESHOLD } from '../data/shipping.js';
import { usePageMeta } from '../utils.js';
import NotFound from './NotFound.jsx';

export default function Product() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  usePageMeta(product?.name, product ? `${product.tagline} ${product.description[0]}` : undefined);

  useEffect(() => {
    setQty(1);
    setAdded(false);
  }, [id]);

  // Structured data so search engines can show price & availability.
  useEffect(() => {
    if (!product) return;
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      image: window.location.origin + product.image,
      description: product.description.join(' '),
      brand: { '@type': 'Brand', name: 'Biloa Holistic Care & Wellness' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: (product.price / 100).toFixed(2),
        availability: 'https://schema.org/InStock',
        url: window.location.href,
      },
    });
    document.head.appendChild(tag);
    return () => tag.remove();
  }, [product]);

  if (!product) return <NotFound />;

  const category = CATEGORIES.find((c) => c.id === product.category);
  const related = [
    ...PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id),
    ...PRODUCTS.filter((p) => p.category !== product.category),
  ].slice(0, 4);

  const onAdd = () => {
    addItem(product.id, qty);
    setAdded(true);
  };
  const onBuyNow = () => {
    addItem(product.id, qty, { openDrawer: false });
    navigate('/checkout');
  };

  return (
    <>
      <section className="section section-tight">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <Link to="/shop">Shop</Link> <span>/</span>{' '}
            <Link to={`/shop?category=${category.id}`}>{category.name}</Link>
          </nav>

          <div className="pdp">
            <div className="pdp-media" style={{ '--accent': product.accent }}>
              <img src={product.image} alt={product.name} width="900" height="900" />
            </div>

            <div className="pdp-info">
              <p className="eyebrow">{category.name}</p>
              <h1>{product.name}</h1>
              <p className="pdp-subtitle">{product.subtitle}</p>
              <p className="pdp-price">{formatPriceExact(product.price)}</p>
              <p className="pdp-tagline">{product.tagline}</p>

              <ul className="badge-row">
                {product.badges.map((b) => (
                  <li key={b}>
                    <CheckIcon size={14} /> {b}
                  </li>
                ))}
              </ul>

              <div className="pdp-buy">
                <QtyPicker value={qty} onChange={setQty} />
                <button className="btn btn-primary btn-lg pdp-add" onClick={onAdd}>
                  {added ? 'Added — add another' : `Add to cart · ${formatPriceExact(product.price * qty)}`}
                </button>
              </div>
              <button className="btn btn-outline btn-lg btn-block" onClick={onBuyNow}>
                Buy it now
              </button>

              <ul className="pdp-assurances">
                <li><TruckIcon size={18} /> Free US shipping on orders over {formatPrice(FREE_US_SHIPPING_THRESHOLD)}</li>
                <li><GlobeIcon size={18} /> International shipping available</li>
                <li><LockIcon size={18} /> Secure checkout — cards, Apple Pay &amp; Google Pay</li>
              </ul>

              <div className="pdp-desc">
                {product.description.map((para) => (
                  <p key={para.slice(0, 20)}>{para}</p>
                ))}
              </div>

              <Accordion>
                {product.details.map((d, i) => (
                  <AccordionItem key={d.label} title={d.label} defaultOpen={i === 0}>
                    <p>{d.text}</p>
                  </AccordionItem>
                ))}
                <AccordionItem title="Shipping & returns">
                  <p>
                    Orders ship from Maryland within 1–3 business days. Standard US delivery takes 3–6 business days, and US orders over{' '}
                    {formatPrice(FREE_US_SHIPPING_THRESHOLD)} ship free. International delivery typically takes 6–20 business days.{' '}
                    <Link to="/faq">Full shipping &amp; returns details</Link>
                  </p>
                </AccordionItem>
              </Accordion>

              {product.fdaNote && (
                <p className="fine-print">
                  *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat,
                  cure, or prevent any disease.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Pairs beautifully with</p>
            <h2>You may also love</h2>
          </div>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Sticky add-to-cart bar on phones */}
      <div className="sticky-buy">
        <div>
          <strong>{product.shortName || product.name}</strong>
          <span>{formatPriceExact(product.price)}</span>
        </div>
        <button className="btn btn-primary" onClick={onAdd}>
          Add to cart
        </button>
      </div>
    </>
  );
}
