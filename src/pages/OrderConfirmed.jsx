import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckIcon } from '../components/Icons.jsx';
import { useCart } from '../context/CartContext.jsx';
import { STORE } from '../config.js';
import { usePageMeta } from '../utils.js';

export default function OrderConfirmed() {
  usePageMeta('Thank you');
  const [params] = useSearchParams();
  const { clear } = useCart();
  const isDemo = params.get('demo') === '1';

  // Returning from a successful Stripe payment — empty the cart.
  useEffect(() => {
    if (params.get('session_id')) clear();
  }, [params, clear]);

  return (
    <section className="section">
      <div className="container confirm">
        <span className="confirm-check">
          <CheckIcon size={36} />
        </span>
        <p className="eyebrow">Order confirmed</p>
        <h1>Thank you for choosing Biloa</h1>
        <p>
          Your order has been received. A confirmation and receipt are on their way to your inbox. Products ship from Maryland, and if you booked a
          coaching package we’ll be in touch to schedule your first session.
        </p>
        {isDemo && (
          <p className="demo-note">
            Preview mode: no payment was taken. Connect Stripe (see README) to accept real payments.
          </p>
        )}
        <p className="muted">
          Questions about your order? Email <a href={`mailto:${STORE.email}`}>{STORE.email}</a>
        </p>
        <div className="hero-ctas center">
          <Link to="/shop" className="btn btn-primary btn-lg">
            Continue shopping
          </Link>
          <Link to="/" className="btn btn-outline btn-lg">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
