import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { FREE_US_SHIPPING_THRESHOLD } from '../data/shipping.js';
import { formatPrice } from '../data/catalog.js';
import { BagIcon, CloseIcon, MenuIcon, SearchIcon } from './Icons.jsx';

const NAV = [
  { to: '/shop', label: 'Shop All' },
  { to: '/shop?category=teas', label: 'Herbal Teas' },
  { to: '/shop?category=oils', label: 'Body Oils' },
  { to: '/shop?category=bath-skin', label: 'Bath & Skin' },
  { to: '/services', label: 'Wellness Coaching' },
  { to: '/about', label: 'Our Story' },
  { to: '/blog', label: 'Blog' },
];

export default function Header() {
  const { count, openDrawer } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
  }, [menuOpen]);

  const submitSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    navigate(q ? `/shop?q=${encodeURIComponent(q)}` : '/shop');
    setQuery('');
  };

  const isActive = (to) => {
    const [path, qs] = to.split('?');
    if (path === '/blog') return location.pathname.startsWith('/blog');
    if (location.pathname !== path) return false;
    const current = new URLSearchParams(location.search).get('category');
    const target = new URLSearchParams(qs || '').get('category');
    return current === target;
  };

  return (
    <>
      <div className="announcement">
        <p>
          <strong>Free US shipping</strong> on orders over {formatPrice(FREE_US_SHIPPING_THRESHOLD)}
          <span className="announcement-sep" aria-hidden>
            ✦
          </span>
          <span className="hide-sm">We ship worldwide</span>
        </p>
      </div>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container header-inner">
          <button
            className="icon-btn menu-toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </button>

          <Link to="/" className="brand" aria-label="Biloa Holistic Care & Wellness — home">
            <img src="/images/emblem.png" alt="" width="54" height="37" />
            <span className="brand-text">
              <span className="brand-name">BILOA</span>
              <span className="brand-sub">Holistic Care &amp; Wellness</span>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Main">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} className={() => (isActive(n.to) ? 'active' : '')}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <button className="icon-btn" aria-label="Search products" onClick={() => setSearchOpen((s) => !s)}>
              <SearchIcon />
            </button>
            <button className="icon-btn bag-btn" aria-label={`Open cart, ${count} items`} onClick={openDrawer}>
              <BagIcon />
              {count > 0 && <span className="bag-count">{count}</span>}
            </button>
          </div>
        </div>

        <div className={`search-bar${searchOpen ? ' open' : ''}`} aria-hidden={!searchOpen}>
          <form className="container search-form" onSubmit={submitSearch} role="search">
            <SearchIcon />
            <input
              ref={searchRef}
              type="search"
              placeholder="Search teas, oils, skincare…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              tabIndex={searchOpen ? 0 : -1}
              aria-label="Search"
            />
            <button type="button" className="icon-btn" aria-label="Close search" onClick={() => setSearchOpen(false)} tabIndex={searchOpen ? 0 : -1}>
              <CloseIcon />
            </button>
          </form>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} />
        <aside className="mobile-menu-panel" aria-label="Menu">
          <div className="mobile-menu-head">
            <img src="/images/emblem.png" alt="" width="54" height="37" />
            <button className="icon-btn" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <nav aria-label="Mobile">
            <Link to="/">Home</Link>
            {NAV.map((n) => (
              <Link key={n.to} to={n.to}>
                {n.label}
              </Link>
            ))}
            <Link to="/faq">Shipping &amp; FAQ</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <p className="mobile-menu-note">Free US shipping on orders over {formatPrice(FREE_US_SHIPPING_THRESHOLD)}. We ship worldwide.</p>
        </aside>
      </div>
    </>
  );
}
