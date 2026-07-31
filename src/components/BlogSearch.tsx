'use client';

import { useState } from 'react';
import styles from './BlogSearch.module.css';
import { useTranslation } from '@/context/LanguageContext';

interface BlogSearchProps {
  onSearch: (query: string) => void;
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function BlogSearch({ onSearch, categories, activeCategory, onCategoryChange }: BlogSearchProps) {
  const [query, setQuery] = useState('');
  const { t } = useTranslation();

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    onSearch(val);
  };

  const popularTags = [
    { key: 'aarBasics', fallback: 'Aari Basics' },
    { key: 'traceDesigns', fallback: 'Trace Designs' },
    { key: 'beadWork', fallback: 'Bead Work' },
    { key: 'needleGuide', fallback: 'Needle Guide' },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.searchIcon}>
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder={t('blogListing.searchPlaceholder', 'Search designs, tutorials, or materials...')}
            value={query}
            onChange={handleQueryChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.categoryHeader}>
          <span className={styles.categoryLabel}>{t('blogListing.filterByCategory', 'Filter by Category')}</span>
        </div>
        <div className={styles.categories}>
          <button
            className={`${styles.pill} ${activeCategory === 'All' ? styles.active : ''}`}
            onClick={() => onCategoryChange('All')}
          >
            {t('blogListing.all', 'All')}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.pill} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div className={styles.popularSearches}>
        <span className={styles.popularLabel}>{t('blogListing.popularTutorials', 'Popular Tutorials:')}</span>
        <div className={styles.popularTags}>
          {popularTags.map(tag => {
            const translatedTag = t(`blogListing.${tag.key}`, tag.fallback);
            return (
              <button 
                key={tag.key} 
                onClick={() => { setQuery(translatedTag); onSearch(translatedTag); }} 
                className={styles.tag}
              >
                {translatedTag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
