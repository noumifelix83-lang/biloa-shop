import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { displayName, formatPrice } from '../data/catalog.js';
import { imgSet } from '../utils.js';
import { PlusIcon } from './Icons.jsx';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-media" style={{ '--accent': product.accent }}>
        <img
          {...imgSet(product.image)}
          sizes="(max-width: 640px) 46vw, (max-width: 1060px) 31vw, 290px"
          alt={product.name}
          loading="lazy"
          decoding="async"
          width="900"
          height="900"
        />
        {product.badges?.[0] && <span className="product-card-badge">{product.badges[0]}</span>}
      </Link>
      <div className="product-card-body">
        <div>
          <h3>
            <Link to={`/product/${product.id}`}>{displayName(product)}</Link>
          </h3>
          <p className="product-card-sub">{product.subtitle}</p>
        </div>
        <div className="product-card-foot">
          <span className="price">{formatPrice(product.price)}</span>
          <button className="add-btn" onClick={() => addItem(product.id)} aria-label={`Add ${product.name} to cart`}>
            <PlusIcon size={16} /> Add
          </button>
        </div>
      </div>
    </article>
  );
}
