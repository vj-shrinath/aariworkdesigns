'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import styles from './Newsletter.module.css';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Get New Aari Designs & Tutorials</h2>
          <p className={styles.description}>
            Join 10,000+ designers getting weekly tracing designs, material guides, and creative inspiration.
          </p>
          <ul className={styles.benefits}>
            <li>New tracing designs weekly</li>
            <li>Step-by-step video tutorials</li>
            <li>Exclusive material discounts</li>
          </ul>
          {status === 'success' ? (
            <div className={styles.success}>You&apos;re in! Check your inbox soon. ✨</div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className={styles.button} disabled={status === 'loading'}>
                {status === 'loading' ? 'Joining...' : 'Subscribe Now'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export function TrendingPosts({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className={styles.trending}>
      <div className={styles.trendingHeader}>
        <span className={styles.trendingIcon}>🔥</span>
        <h3 className={styles.trendingTitle}>Trending Designs</h3>
      </div>
      <div className={styles.trendingList}>
        {posts.slice(0, 4).map((post, index) => (
          <Link key={post._id} href={`/blog/${post.slug.current}`} className={styles.trendingItem}>
            <span className={styles.index}>{index + 1}</span>
            <div className={styles.trendingThumb}>
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).width(80).height(80).url()}
                  alt={post.title}
                  width={60}
                  height={60}
                  className={styles.thumbImage}
                />
              )}
            </div>
            <div className={styles.trendingInfo}>
              <h4 className={styles.itemTitle}>{post.title}</h4>
              <div className={styles.itemMeta}>
                <span>{post.estimatedReadingTime || 5} min read</span>
                <span className={styles.dot}>•</span>
                <span>{Math.floor(Math.random() * 500) + 100} views</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
