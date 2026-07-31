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

  const title = translateField(post, 'title', locale);
  const excerpt = translateField(post, 'excerpt', locale);
  const categoryTitle = post.categories?.[0]
    ? translateField(post.categories[0], 'title', locale)
    : 'Insight';

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>{t('blog.featuredArticle', 'Featured Article')}</div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.excerpt}>{excerpt}</p>
          <div className={styles.meta}>
            <span className={styles.category}>{categoryTitle}</span>
            <span className={styles.dot}>•</span>
            <time className={styles.date}>
              {new Date(post.publishedAt).toLocaleDateString(locale, {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
            <span className={styles.dot}>•</span>
            <span className={styles.readingTime}>
              {post.estimatedReadingTime || 5} {t('blog.minRead', 'min read')}
            </span>
          </div>
          <Link href={`/${locale}/blog/${post.slug.current}`} className={styles.button}>
            {t('blog.readArticle', 'Read Article')}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).width(800).height(500).url()}
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
