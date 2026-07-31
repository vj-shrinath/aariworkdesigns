'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import PostCard from '@/components/PostCard';
import BlogHero from '@/components/BlogHero';
import BlogSearch from '@/components/BlogSearch';
import { Newsletter, TrendingPosts } from '@/components/BlogSections';
import Footer from '@/components/Footer';
import styles from '@/components/BlogList.module.css';
import { useTranslation } from '@/context/LanguageContext';
import { translateField } from '@/lib/i18n';

export default function BlogListingClient({ initialPosts }: { initialPosts: any[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const { t, locale } = useTranslation();

  const categories = useMemo(() => {
    const cats = new Set<string>();
    initialPosts.forEach(post => {
      post.categories?.forEach((cat: any) => {
        const title = translateField(cat, 'title', locale);
        if (title) cats.add(title);
      });
    });
    return Array.from(cats);
  }, [initialPosts, locale]);

  const filteredPosts = useMemo(() => {
    return initialPosts.filter(post => {
      const translatedTitle = translateField(post, 'title', locale);
      const translatedExcerpt = translateField(post, 'excerpt', locale);
      
      const matchesSearch = 
        translatedTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        translatedExcerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        activeCategory === 'All' || 
        post.categories?.some((cat: any) => translateField(cat, 'title', locale) === activeCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [initialPosts, searchQuery, activeCategory, locale]);

  const featuredPost = initialPosts[0];
  const remainingPosts = filteredPosts.filter(p => p._id !== (searchQuery || activeCategory !== 'All' ? null : featuredPost?._id));

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        {/* Featured Section */}
        {!searchQuery && activeCategory === 'All' && featuredPost && (
          <BlogHero post={featuredPost} />
        )}

        <div className="container">
          <BlogSearch 
            onSearch={setSearchQuery} 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {!searchQuery && activeCategory === 'All' && initialPosts.length > 1 && (
            <TrendingPosts posts={initialPosts.slice(1, 5)} />
          )}

          <section style={{ margin: '4rem 0' }}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                {searchQuery || activeCategory !== 'All' 
                  ? t('blogListing.searchResults', 'Search Results') 
                  : t('blogListing.recentlyPublished', 'Recently Published')}
              </h2>
              <span className={styles.count}>{filteredPosts.length} {t('blogListing.articles', 'Articles')}</span>
            </div>

            {filteredPosts.length > 0 ? (
              <div className={styles.grid}>
                {remainingPosts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
                <h3>{t('blogListing.noArticlesFound', 'No articles found matching your criteria.')}</h3>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  style={{ marginTop: '1rem', color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  {t('blogListing.clearAllFilters', 'Clear all filters')}
                </button>
              </div>
            )}
          </section>

          <Newsletter />
        </div>
      </main>

      <Footer subtext={t('footer.defaultSubtext', 'Premium Embroidery Insights.')} />
    </>
  );
}
