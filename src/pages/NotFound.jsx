import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils.js';

export default function NotFound() {
  usePageMeta('Page not found');
  return (
    <section className="section">
      <div className="container empty-state">
        <img src="/images/emblem.png" alt="" width="140" />
        <h1>This path has grown over</h1>
        <p>We couldn’t find the page you were looking for.</p>
        <div className="hero-ctas center">
          <Link to="/shop" className="btn btn-primary btn-lg">
            Shop the collection
          </Link>
          <Link to="/" className="btn btn-outline btn-lg">
            Go home
          </Link>
        </div>
      </div>
    </section>
  );
}
