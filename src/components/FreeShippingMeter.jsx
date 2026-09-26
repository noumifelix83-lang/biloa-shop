import { formatPrice } from '../data/catalog.js';
import { FREE_US_SHIPPING_THRESHOLD } from '../data/shipping.js';
import { TruckIcon } from './Icons.jsx';

export default function FreeShippingMeter({ productSubtotal }) {
  const remaining = FREE_US_SHIPPING_THRESHOLD - productSubtotal;
  const pct = Math.min(100, (productSubtotal / FREE_US_SHIPPING_THRESHOLD) * 100);
  return (
    <div className="ship-meter">
      <p>
        <TruckIcon size={18} />
        {remaining > 0 ? (
          <span>
            You're <strong>{formatPrice(remaining)}</strong> away from free US shipping
          </span>
        ) : (
          <span>
            <strong>You've unlocked free US shipping!</strong>
          </span>
        )}
      </p>
      <div className="ship-meter-track" aria-hidden>
        <div className="ship-meter-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
