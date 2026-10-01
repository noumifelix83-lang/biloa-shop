import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard.jsx';
import Newsletter from '../components/Newsletter.jsx';
import { POSTS } from '../data/blog.js';
import { usePageMeta } from '../utils.js';

export default function Blog() {
  usePageMeta('Blog', 'Nutrition education, gentle food discoveries, and lessons from Dr. Paola Biloa Njandja’s own holistic wellness journey.');
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span aria-current="page">Blog</span>
          </nav>
          <h1>The Biloa Blog</h1>
          <p>Real-life nourishment, gentle food discoveries, and lessons from Dr. Paola’s own wellness journey.</p>
        </div>
      </section>
      <section className="section section-tight">
        <div className="container post-grid">
          {POSTS.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}
