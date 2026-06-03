'use client';

import { useState, useEffect } from 'react';
import styles from './BlogSearch.module.css';

interface BlogSearchProps {
  onSearch: (query: string) => void;
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function BlogSearch({ onSearch, categories, activeCategory, onCategoryChange }: BlogSearchProps) {
  const [query, setQuery] = useState('');

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    onSearch(val);
  };

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
            placeholder="Search designs, tutorials, or materials..."
            value={query}
            onChange={handleQueryChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.filterSection}>
        <div className={styles.categoryHeader}>
          <span className={styles.categoryLabel}>Filter by Category</span>
        </div>
        <div className={styles.categories}>
          <button
            className={`${styles.pill} ${activeCategory === 'All' ? styles.active : ''}`}
            onClick={() => onCategoryChange('All')}
          >
            All
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
        <span className={styles.popularLabel}>Popular Tutorials:</span>
        <div className={styles.popularTags}>
          {['Aari Basics', 'Trace Designs', 'Bead Work', 'Needle Guide'].map(tag => (
            <button key={tag} onClick={() => { setQuery(tag); onSearch(tag); }} className={styles.tag}>
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
