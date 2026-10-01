import { Link } from 'react-router-dom';
import { formatPostDate, readingMinutes } from '../data/blog.js';
import { imgSet } from '../utils.js';
import { ArrowRight } from './Icons.jsx';

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <Link to={`/blog/${post.slug}`} className="post-card-media" tabIndex={-1} aria-hidden>
        <img
          {...imgSet(post.cover, { small: 640, large: 1078 })}
          sizes="(max-width: 900px) 92vw, 560px"
          alt=""
          loading="lazy"
          decoding="async"
          width="1078"
          height="539"
        />
      </Link>
      <div className="post-card-body">
        <p className="post-meta">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time> · {readingMinutes(post)} min read
        </p>
        <h3>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="post-excerpt">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="text-link">
          Read the article <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
