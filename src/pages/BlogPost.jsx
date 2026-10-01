import { Link, useParams } from 'react-router-dom';
import PostCard from '../components/PostCard.jsx';
import { ArrowRight } from '../components/Icons.jsx';
import { POSTS, getPost, readingMinutes } from '../data/blog.js';
import { imgSet, usePageMeta } from '../utils.js';
import NotFound from './NotFound.jsx';

function Block({ block }) {
  switch (block.type) {
    case 'lead':
      return <p className="post-lead">{block.text}</p>;
    case 'h2':
      return <h2>{block.text}</h2>;
    case 'h3':
      return <h3>{block.text}</h3>;
    case 'img':
      return (
        <figure className="post-figure">
          <img
            {...imgSet(block.src, { small: 640, large: 1000 })}
            sizes="(max-width: 900px) 92vw, 720px"
            alt={block.alt}
            loading="lazy"
            decoding="async"
            width="1000"
            height="500"
          />
        </figure>
      );
    case 'list':
      return (
        <ul className="check-list">
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case 'close':
      return <p className="post-close">{block.text}</p>;
    case 'refs':
      return (
        <section className="post-refs" aria-label="References and further reading">
          <h2>References and Further Reading</h2>
          <ol>
            {block.items.map((r) => (
              <li key={r.text}>
                {r.text}{' '}
                <a href={r.href} target="_blank" rel="noopener noreferrer">
                  {r.link}
                </a>
              </li>
            ))}
          </ol>
        </section>
      );
    case 'note':
      return <p className="post-note">{block.text}</p>;
    default:
      return <p>{block.text}</p>;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  usePageMeta(post?.title, post?.excerpt);
  if (!post) return <NotFound />;

  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="post">
        <header className="post-header">
          <div className="container post-narrow">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link> <span>/</span> <Link to="/blog">Blog</Link>
            </nav>
            <p className="eyebrow">{post.tags.join(' · ')}</p>
            <h1>{post.title}</h1>
            <p className="post-byline">
              <img src="/images/emblem.png" alt="" width="36" height="25" />
              By Dr. Paola Biloa Njandja · {readingMinutes(post)} min read
            </p>
          </div>
          <div className="container post-cover">
            <img
              {...imgSet(post.cover, { small: 640, large: 1078 })}
              sizes="(max-width: 1100px) 100vw, 1000px"
              alt={post.coverAlt}
              width="1078"
              height="539"
              fetchpriority="high"
            />
          </div>
        </header>

        <div className="container post-narrow post-body">
          {post.blocks.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </div>

        <div className="container post-narrow">
          <aside className="post-author">
            <img src="/images/emblem.png" alt="" width="72" height="50" />
            <div>
              <p className="post-author-name">Dr. Paola Biloa Njandja</p>
              <p>
                Founder of Biloa Holistic Care &amp; Wellness, Certified Nutrition &amp; Wellness Consultant, Holistic Nutritionist, and Certified
                Health &amp; Wellness Coach.
              </p>
              <Link to="/services" className="text-link">
                Work with Biloa <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </article>

      {more.length > 0 && (
        <section className="section section-tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Keep reading</p>
              <h2>More from the blog</h2>
            </div>
            <div className="post-grid">
              {more.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
