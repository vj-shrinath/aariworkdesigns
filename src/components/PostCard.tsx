'use client';

import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import styles from './PostCard.module.css';
import { useTranslation } from '@/context/LanguageContext';
import { translateField } from '@/lib/i18n';

interface PostCardProps {
  post: any;
}

export default function PostCard({ post }: PostCardProps) {
  const { t, locale } = useTranslation();

  const title = translateField(post, 'title', locale);
  const excerpt = translateField(post, 'excerpt', locale);
  const categoryTitle = post.categories?.[0] 
    ? translateField(post.categories[0], 'title', locale) 
    : 'Insight';

  const imageUrl = post.mainImage?.asset 
    ? urlFor(post.mainImage).width(600).height(400).auto('format').url() 
    : null;

  return (
    <article className={styles.card}>
      <Link href={`/${locale}/blog/${post.slug.current}`} className={styles.imageWrapper}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
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
          {categoryTitle}
        </div>
      </Link>

      <div className={styles.content}>
        <div className={styles.meta}>
          <time className={styles.date}>
            {new Date(post.publishedAt).toLocaleDateString(locale, {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span className={styles.dot}>•</span>
          <span className={styles.readingTime}>
            {post.estimatedReadingTime || 5} {t('blog.minRead', 'min read')}
          </span>
        </div>
        <Link href={`/${locale}/blog/${post.slug.current}`}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        <p className={styles.excerpt}>{excerpt}</p>
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
          <Link href={`/${locale}/blog/${post.slug.current}`} className={styles.readMore}>
            {t('blog.readStory', 'Read Story')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
