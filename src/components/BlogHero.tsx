'use client';

import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import styles from './BlogHero.module.css';
import { useTranslation } from '@/context/LanguageContext';
import { translateField } from '@/lib/i18n';

interface BlogHeroProps {
  post: any;
}

export default function BlogHero({ post }: BlogHeroProps) {
  const { t, locale } = useTranslation();

  if (!post) return null;

  const title = translateField(post, 'title', locale) || 'Featured Aari Article';
  const excerpt = translateField(post, 'excerpt', locale);
  const categoryTitle = post.categories?.[0]
    ? translateField(post.categories[0], 'title', locale)
    : 'Insight';

  const slug = post.slug?.current || (typeof post.slug === 'string' ? post.slug : '');
  const postLink = slug ? `/${locale}/blog/${slug}` : `/${locale}/blog`;

  const imageUrl = post.mainImage?.asset
    ? urlFor(post.mainImage).width(800).height(500).url()
    : null;

  const rawDate = post.publishedAt || post._createdAt;
  const dateFormatted = rawDate && !isNaN(new Date(rawDate).getTime())
    ? new Date(rawDate).toLocaleDateString(locale, { month: 'short', day: 'numeric', year: 'numeric' })
    : '';

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>{t('blog.featuredArticle', 'Featured Article')}</div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.excerpt}>{excerpt}</p>
          <div className={styles.meta}>
            <span className={styles.category}>{categoryTitle}</span>
            {dateFormatted && <span className={styles.dot}>•</span>}
            {dateFormatted && (
              <time className={styles.date}>
                {dateFormatted}
              </time>
            )}
            <span className={styles.dot}>•</span>
            <span className={styles.readingTime}>
              {post.estimatedReadingTime || 5} {t('blog.minRead', 'min read')}
            </span>
          </div>
          <Link href={postLink} className={styles.button}>
            {t('blog.readArticle', 'Read Article')}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              width={800}
              height={500}
              className={styles.image}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
