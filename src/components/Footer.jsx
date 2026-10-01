import { Link } from 'react-router-dom';
import { STORE } from '../config.js';
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon } from './Icons.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/logo.webp" alt="Biloa Holistic Care & Wellness" width="180" height="179" loading="lazy" />
          <p>
            <em>Biloa</em> means grass — nourishment, resilience and renewal. Simple rituals for everyday wellness, rooted in nature.
          </p>
          <div className="footer-social">
            {STORE.social.instagram && (
              <a href={STORE.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
                <InstagramIcon />
              </a>
            )}
            {STORE.social.facebook && (
              <a href={STORE.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
                <FacebookIcon />
              </a>
            )}
          </div>
        </div>
        <div>
          <h3>Shop</h3>
          <ul>
            <li><Link to="/shop">Shop all</Link></li>
            <li><Link to="/shop?category=teas">Herbal teas</Link></li>
            <li><Link to="/shop?category=oils">Body &amp; scalp oils</Link></li>
            <li><Link to="/shop?category=bath-skin">Bath &amp; skincare</Link></li>
          </ul>
        </div>
        <div>
          <h3>Biloa</h3>
          <ul>
            <li><Link to="/about">Our story</Link></li>
            <li><Link to="/services">Wellness coaching</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>Help</h3>
          <ul>
            <li><Link to="/faq">Shipping &amp; delivery</Link></li>
            <li><Link to="/faq#returns">Returns</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
          <ul className="footer-contact">
            <li><MailIcon size={16} /> <a href={`mailto:${STORE.email}`}>{STORE.email}</a></li>
            {STORE.phone && (
              <li><PhoneIcon size={16} /> <a href={STORE.phoneHref}>{STORE.phone}</a></li>
            )}
            <li><PinIcon size={16} /> {STORE.location}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-legal">
        <p>
          Biloa Holistic Care &amp; Wellness provides general nutrition education and wellness coaching. Services are not medical nutrition
          therapy and are not intended to diagnose, treat, cure, or prevent disease. Individuals with medical conditions or therapeutic dietary
          needs should consult a physician or licensed dietitian-nutritionist. Statements about our products have not been evaluated by the
          Food and Drug Administration.
        </p>
        <div className="footer-bottom">
          <span>© {year} {STORE.name}. All rights reserved.</span>
          <span>All prices in USD · Secure checkout</span>
        </div>
      </div>
    </footer>
  );
}
