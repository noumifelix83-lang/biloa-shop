import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { SearchIcon } from '../components/Icons.jsx';
import { CATEGORIES, PRODUCTS } from '../data/catalog.js';
import { usePageMeta } from '../utils.js';

const SORTS = {
  featured: { label: 'Featured', fn: () => 0 },
  'price-asc': { label: 'Price: low to high', fn: (a, b) => a.price - b.price },
  'price-desc': { label: 'Price: high to low', fn: (a, b) => b.price - a.price },
  name: { label: 'Name: A–Z', fn: (a, b) => a.name.localeCompare(b.name) },
};

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const category = params.get('category') || 'all';
  const q = params.get('q') || '';
  const sort = SORTS[params.get('sort')] ? params.get('sort') : 'featured';
  const activeCat = CATEGORIES.find((c) => c.id === category);

  usePageMeta(activeCat ? activeCat.name : 'Shop All', activeCat?.blurb);

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (!value || value === 'all' || value === 'featured') next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: key === 'q' });
  };

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return PRODUCTS.filter((p) => category === 'all' || p.category === category)
      .filter(
        (p) =>
          !needle ||
          [p.name, p.subtitle, p.tagline, ...p.description, ...p.details.map((d) => d.text)].join(' ').toLowerCase().includes(needle),
      )
      .sort(SORTS[sort].fn);
  }, [category, q, sort]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> {activeCat ? <Link to="/shop">Shop</Link> : <span aria-current="page">Shop</span>}
            {activeCat && (
              <>
                <span>/</span> <span aria-current="page">{activeCat.name}</span>
              </>
            )}
          </nav>
          <h1>{activeCat ? activeCat.name : 'Shop All'}</h1>
          <p>{activeCat ? activeCat.blurb : 'Herbal teas, botanical oils and earth-inspired rituals for body, mind and home.'}</p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="shop-toolbar">
            <div className="chips" role="tablist" aria-label="Categories">
              <button role="tab" aria-selected={category === 'all'} className={`chip${category === 'all' ? ' active' : ''}`} onClick={() => update('category', 'all')}>
                All
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={category === c.id}
                  className={`chip${category === c.id ? ' active' : ''}`}
                  onClick={() => update('category', c.id)}
                >
                  {c.name}
                </button>
              ))}
            </div>
            <div className="shop-tools">
              <label className="shop-search">
                <SearchIcon size={18} />
                <span className="sr-only">Search products</span>
                <input type="search" placeholder="Search" value={q} onChange={(e) => update('q', e.target.value)} />
              </label>
              <label className="select-wrap">
                <span className="sr-only">Sort by</span>
                <select value={sort} onChange={(e) => update('sort', e.target.value)}>
                  {Object.entries(SORTS).map(([k, s]) => (
                    <option key={k} value={k}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <p className="result-count">
            {results.length} {results.length === 1 ? 'product' : 'products'}
            {q && (
              <>
                {' '}
                for “{q}”
              </>
            )}
          </p>

          {results.length > 0 ? (
            <div className="product-grid">
              {results.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <img src="/images/emblem.png" alt="" width="120" />
              <p>No products match your search.</p>
              <button className="btn btn-outline" onClick={() => setParams({})}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
