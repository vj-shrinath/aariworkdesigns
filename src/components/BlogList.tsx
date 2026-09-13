'use client';

import { useState, useMemo } from 'react';
import PostCard from './PostCard';
import styles from './BlogList.module.css';
import { useTranslation } from '@/context/LanguageContext';
import { translateField } from '@/lib/i18n';

interface BlogListProps {
  posts: any[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const { t, locale } = useTranslation();

  const categories = useMemo(() => {
    const cats = new Set<string>();
    posts?.forEach((post) => {
      post.categories?.forEach((cat: any) => {
        const title = translateField(cat, 'title', locale);
        if (title) cats.add(title);
      });
    });
    return Array.from(cats);
  }, [posts, locale]);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return posts;
    return posts?.filter((post) =>
      post.categories?.some((cat: any) => translateField(cat, 'title', locale) === activeCategory)
    );
  }, [posts, activeCategory, locale]);

  if (!posts || posts.length === 0) {
    return (
      <div className={styles.empty}>
        <h3>{t('blogList.noPosts', 'No posts found')}</h3>
        <p>{t('blogList.stayTuned', 'Stay tuned for upcoming stories.')}</p>
      </div>
    );
  }

  return (
    <section className={`${styles.section} container`}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {t('blogList.latestStories', 'Latest ')}
          <span className="text-gradient">{t('blogList.latestStoriesHighlight', 'Stories')}</span>
        </h2>
        {categories.length > 0 && (
          <div className={styles.filters}>
            <button
              className={activeCategory === 'All' ? styles.active : ''}
              onClick={() => setActiveCategory('All')}
            >
              {t('blogList.all', 'All')}
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? styles.active : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className={styles.grid}>
        {filteredPosts?.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}

