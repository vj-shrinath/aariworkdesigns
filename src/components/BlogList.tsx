'use client';

import PostCard from './PostCard';
import styles from './BlogList.module.css';
import { useTranslation } from '@/context/LanguageContext';

interface BlogListProps {
  posts: any[];
}

export default function BlogList({ posts }: BlogListProps) {
  const { t } = useTranslation();

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
        <div className={styles.filters}>
          <button className={styles.active}>{t('blogList.all', 'All')}</button>
          <button>{t('blogList.design', 'Design')}</button>
          <button>{t('blogList.code', 'Code')}</button>
          <button>{t('blogList.future', 'Future')}</button>
        </div>
      </div>
      <div className={styles.grid}>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}
