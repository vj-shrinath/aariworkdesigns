import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: any;
}

export default function PostCard({ post }: PostCardProps) {
  const imageUrl = post.mainImage?.asset 
    ? urlFor(post.mainImage).width(600).height(400).auto('format').url() 
    : null;

  if (!imageUrl) {
    console.log(`No image asset found for post: ${post.title}`, post.mainImage);
  }

  return (
    <article className={styles.card}>
      <Link href={`/blog/${post.slug.current}`} className={styles.imageWrapper}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title}
            width={600}
            height={400}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            <span>No Image</span>
          </div>
        )}
        <div className={styles.categoryBadge}>
          {post.categories?.[0]?.title || 'Insight'}
        </div>
      </Link>

      <div className={styles.content}>
        <div className={styles.meta}>
          <time className={styles.date}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span className={styles.dot}>•</span>
          <span className={styles.readingTime}>{post.estimatedReadingTime || 5} min read</span>
        </div>
        <Link href={`/blog/${post.slug.current}`}>
          <h3 className={styles.title}>{post.title}</h3>
        </Link>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.footer}>
          <div className={styles.author}>
            {post.author?.image && (
              <Image
                src={urlFor(post.author.image).width(40).height(40).url()}
                alt={post.author.name}
                width={28}
                height={28}
                className={styles.authorImage}
              />
            )}
            <span className={styles.authorName}>{post.author?.name}</span>
          </div>
          <Link href={`/blog/${post.slug.current}`} className={styles.readMore}>
            Read Story
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
