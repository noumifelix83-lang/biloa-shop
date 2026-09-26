import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { displayName, formatPriceExact, PRODUCTS } from '../data/catalog.js';
import FreeShippingMeter from './FreeShippingMeter.jsx';
import { smallImage } from '../utils.js';
import QtyPicker from './QtyPicker.jsx';
import { CloseIcon, LockIcon, PlusIcon } from './Icons.jsx';

export default function CartDrawer() {
  const { lines, drawerOpen, closeDrawer, setQty, removeItem, subtotal, productSubtotal, needsShipping, addItem } = useCart();
  const navigate = useNavigate();
  const panelRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', drawerOpen);
    if (!drawerOpen) return;
    panelRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && closeDrawer();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [drawerOpen, closeDrawer]);

  const inCart = new Set(lines.map((l) => l.id));
  const suggestions = PRODUCTS.filter((p) => !inCart.has(p.id)).slice(0, 2);

  const go = (path) => {
    closeDrawer();
    navigate(path);
  };

  return (
    <div className={`drawer${drawerOpen ? ' open' : ''}`} aria-hidden={!drawerOpen}>
      <div className="drawer-backdrop" onClick={closeDrawer} />
      <aside className="drawer-panel" role="dialog" aria-modal="true" aria-label="Your cart" tabIndex={-1} ref={panelRef}>
        <div className="drawer-head">
          <h2>Your Cart</h2>
          <button className="icon-btn" aria-label="Close cart" onClick={closeDrawer}>
            <CloseIcon />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="drawer-empty">
            <img src="/images/emblem.png" alt="" width="120" />
            <p>Your cart is empty.</p>
            <button className="btn btn-primary" onClick={() => go('/shop')}>
              Explore the collection
            </button>
          </div>
        ) : (
          <>
            {needsShipping && <FreeShippingMeter productSubtotal={productSubtotal} />}
            <ul className="drawer-lines">
              {lines.map(({ id, qty, item, total }) => (
                <li key={id} className="line">
                  <Link to={item.type === 'product' ? `/product/${id}` : '/services'} onClick={closeDrawer} className="line-thumb" style={{ background: item.accent || 'var(--sage-soft)' }}>
                    {item.image ? <img src={smallImage(item.image)} alt="" /> : <img src="/images/emblem.png" alt="" className="line-emblem" />}
                  </Link>
                  <div className="line-info">
                    <p className="line-name">{displayName(item)}</p>
                    <p className="line-meta">{item.type === 'service' ? `Coaching · ${item.duration}` : item.subtitle}</p>
                    <div className="line-controls">
                      {item.type === 'product' ? (
                        <QtyPicker small value={qty} onChange={(q) => setQty(id, q)} min={0} />
                      ) : (
                        <span className="line-meta">Qty 1</span>
                      )}
                      <button className="link-btn" onClick={() => removeItem(id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="line-price">{formatPriceExact(total)}</p>
                </li>
              ))}
            </ul>

            {suggestions.length > 0 && (
              <div className="drawer-suggest">
                <p className="eyebrow">Complete your ritual</p>
                {suggestions.map((p) => (
                  <div key={p.id} className="suggest-row">
                    <span className="suggest-thumb" style={{ background: p.accent }}>
                      <img src={smallImage(p.image)} alt="" />
                    </span>
                    <span className="suggest-name">
                      {displayName(p)}
                      <small>{formatPriceExact(p.price)}</small>
                    </span>
                    <button className="icon-btn icon-btn-outline" aria-label={`Add ${displayName(p)} to cart`} onClick={() => addItem(p.id, 1, { openDrawer: false })}>
                      <PlusIcon size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="drawer-foot">
              <div className="drawer-subtotal">
                <span>Subtotal</span>
                <strong>{formatPriceExact(subtotal)}</strong>
              </div>
              <p className="drawer-note">{needsShipping ? 'Shipping & taxes calculated at checkout.' : 'Taxes calculated at checkout.'}</p>
              <button className="btn btn-primary btn-block" onClick={() => go('/checkout')}>
                <LockIcon size={18} /> Checkout
              </button>
              <button className="btn btn-ghost btn-block" onClick={closeDrawer}>
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
