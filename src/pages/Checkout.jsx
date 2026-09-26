import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FreeShippingMeter from '../components/FreeShippingMeter.jsx';
import QtyPicker from '../components/QtyPicker.jsx';
import { GlobeIcon, LockIcon, TrashIcon } from '../components/Icons.jsx';
import { useCart } from '../context/CartContext.jsx';
import { displayName, formatPriceExact } from '../data/catalog.js';
import { ALL_COUNTRIES, findShippingOption, shippingOptions } from '../data/shipping.js';
import { STORE } from '../config.js';
import { smallImage, usePageMeta } from '../utils.js';

const COUNTRY_KEY = 'biloa-country';

export default function Checkout() {
  usePageMeta('Checkout');
  const { lines, setQty, removeItem, subtotal, productSubtotal, needsShipping, clear } = useCart();
  const navigate = useNavigate();
  const [country, setCountry] = useState(() => {
    try {
      return localStorage.getItem(COUNTRY_KEY) || 'US';
    } catch {
      return 'US';
    }
  });
  const [shipId, setShipId] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(COUNTRY_KEY, country);
    } catch {
      /* ignore */
    }
  }, [country]);

  const options = useMemo(() => shippingOptions(country, productSubtotal), [country, productSubtotal]);
  const shipping = needsShipping ? findShippingOption(country, productSubtotal, shipId) : null;
  const total = subtotal + (shipping?.amount || 0);

  if (lines.length === 0 && status !== 'redirecting') {
    return (
      <section className="section">
        <div className="container empty-state">
          <img src="/images/emblem.png" alt="" width="140" />
          <h1>Your cart is empty</h1>
          <p>Discover teas, oils and rituals made to help you slow down.</p>
          <Link to="/shop" className="btn btn-primary btn-lg">
            Start shopping
          </Link>
        </div>
      </section>
    );
  }

  const pay = async () => {
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: lines.map((l) => ({ id: l.id, qty: l.qty })),
          country,
          shippingOptionId: shipping?.id,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.url) {
        setStatus('redirecting');
        window.location.href = data.url;
        return;
      }
      throw new Error(data.error || 'unavailable');
    } catch (err) {
      // Local preview without a payment server: simulate a successful order.
      if (import.meta.env.DEV) {
        setStatus('redirecting');
        clear();
        navigate('/order-confirmed?demo=1');
        return;
      }
      setStatus('idle');
      setError(
        err.message && err.message !== 'unavailable' && err.message !== 'Failed to fetch'
          ? err.message
          : `We couldn't start the secure payment right now. Please try again in a moment, or email us at ${STORE.email}.`,
      );
    }
  };

  const eta = (o) => `${o.days[0]}–${o.days[1]} business days`;

  return (
    <section className="section section-tight checkout-page">
      <div className="container">
        <h1 className="checkout-title">Checkout</h1>
        <div className="checkout-grid">
          <div className="checkout-main">
            <div className="panel">
              <h2 className="panel-title">
                <span className="panel-step">1</span> Your items
              </h2>
              <ul className="checkout-lines">
                {lines.map(({ id, qty, item, total: lineTotal }) => (
                  <li key={id} className="line">
                    <span className="line-thumb" style={{ background: item.accent || 'var(--sage-soft)' }}>
                      {item.image ? <img src={smallImage(item.image)} alt="" /> : <img src="/images/emblem.png" alt="" className="line-emblem" />}
                    </span>
                    <div className="line-info">
                      <p className="line-name">
                        {item.type === 'product' ? <Link to={`/product/${id}`}>{displayName(item)}</Link> : item.name}
                      </p>
                      <p className="line-meta">
                        {item.type === 'service' ? `Coaching package · ${item.duration}` : item.subtitle} · {formatPriceExact(item.price)}
                      </p>
                      <div className="line-controls">
                        {item.type === 'product' ? <QtyPicker small value={qty} onChange={(q) => setQty(id, q)} min={0} /> : <span className="line-meta">Qty 1</span>}
                        <button className="link-btn" onClick={() => removeItem(id)} aria-label={`Remove ${item.name}`}>
                          <TrashIcon size={16} /> Remove
                        </button>
                      </div>
                    </div>
                    <p className="line-price">{formatPriceExact(lineTotal)}</p>
                  </li>
                ))}
              </ul>
              <Link to="/shop" className="text-link">
                ← Continue shopping
              </Link>
            </div>

            {needsShipping && (
              <div className="panel">
                <h2 className="panel-title">
                  <span className="panel-step">2</span> Delivery
                </h2>
                <label className="field">
                  <span>Ship to</span>
                  <span className="select-wrap select-full">
                    <select value={country} onChange={(e) => { setCountry(e.target.value); setShipId(''); }} autoComplete="country">
                      <option value="US">United States</option>
                      <optgroup label="International">
                        {ALL_COUNTRIES.filter((c) => c.code !== 'US')
                          .sort((a, b) => a.name.localeCompare(b.name))
                          .map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.name}
                            </option>
                          ))}
                      </optgroup>
                    </select>
                  </span>
                </label>
                {country === 'US' && <FreeShippingMeter productSubtotal={productSubtotal} />}
                {country !== 'US' && (
                  <p className="intl-note">
                    <GlobeIcon size={18} /> International orders are charged in US dollars. Import duties or taxes may be collected by your country on
                    delivery.
                  </p>
                )}
                <fieldset className="ship-options">
                  <legend className="sr-only">Shipping method</legend>
                  {options.map((o) => (
                    <label key={o.id} className={`ship-option${shipping?.id === o.id ? ' selected' : ''}`}>
                      <input type="radio" name="ship" value={o.id} checked={shipping?.id === o.id} onChange={() => setShipId(o.id)} />
                      <span className="ship-option-text">
                        <strong>{o.label}</strong>
                        <small>{eta(o)}</small>
                      </span>
                      <span className="ship-option-price">{o.amount === 0 ? 'Free' : formatPriceExact(o.amount)}</span>
                    </label>
                  ))}
                </fieldset>
                <p className="fine-print">You’ll enter your full address on the next, secure payment step.</p>
              </div>
            )}

            {lines.some((l) => l.item.type === 'service') && (
              <div className="panel panel-soft">
                <p>
                  <strong>Booking a coaching package?</strong> After payment we’ll email you to schedule your first session at a time that works for
                  you.
                </p>
              </div>
            )}
          </div>

          <aside className="checkout-summary panel">
            <h2 className="panel-title">Order summary</h2>
            <dl className="summary-rows">
              <div>
                <dt>Subtotal</dt>
                <dd>{formatPriceExact(subtotal)}</dd>
              </div>
              {needsShipping && (
                <div>
                  <dt>Shipping</dt>
                  <dd>{shipping.amount === 0 ? 'Free' : formatPriceExact(shipping.amount)}</dd>
                </div>
              )}
              <div>
                <dt>Estimated tax</dt>
                <dd className="muted">Calculated at payment</dd>
              </div>
              <div className="summary-total">
                <dt>Total</dt>
                <dd>
                  <small>USD</small> {formatPriceExact(total)}
                </dd>
              </div>
            </dl>
            <button className="btn btn-primary btn-lg btn-block" onClick={pay} disabled={status !== 'idle'}>
              <LockIcon size={18} /> {status === 'idle' ? 'Continue to secure payment' : 'Opening secure payment…'}
            </button>
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <div className="pay-methods" aria-label="Accepted payment methods">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Amex</span>
              <span>Discover</span>
              <span>Apple Pay</span>
              <span>Google Pay</span>
            </div>
            <p className="fine-print center">
              Payments are processed securely by Stripe. We never see or store your card details.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
