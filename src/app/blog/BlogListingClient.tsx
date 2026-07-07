'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import PostCard from '@/components/PostCard';
import BlogHero from '@/components/BlogHero';
import BlogSearch from '@/components/BlogSearch';
import { Newsletter, TrendingPosts } from '@/components/BlogSections';
import Footer from '@/components/Footer';
import styles from '@/components/BlogList.module.css';

export default function BlogListingClient({ initialPosts }: { initialPosts: any[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set<string>();
    initialPosts.forEach(post => {
      post.categories?.forEach((cat: any) => cats.add(cat.title));
    });
    return Array.from(cats);
  }, [initialPosts]);

  const filteredPosts = useMemo(() => {
    return initialPosts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        activeCategory === 'All' || 
        post.categories?.some((cat: any) => cat.title === activeCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [initialPosts, searchQuery, activeCategory]);

  const featuredPost = initialPosts[0];
  const remainingPosts = filteredPosts.filter(p => p._id !== (searchQuery || activeCategory !== 'All' ? null : featuredPost?._id));

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        {/* Featured Section */}
        {!searchQuery && activeCategory === 'All' && (
          <BlogHero post={featuredPost} />
        )}

        <div className="container">
          <BlogSearch 
            onSearch={setSearchQuery} 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {!searchQuery && activeCategory === 'All' && (
            <TrendingPosts posts={initialPosts.slice(1, 5)} />
          )}

          <section style={{ margin: '4rem 0' }}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                {searchQuery || activeCategory !== 'All' ? 'Search Results' : 'Recently Published'}
              </h2>
              <span className={styles.count}>{filteredPosts.length} Articles</span>
            </div>

            {filteredPosts.length > 0 ? (
              <div className={styles.grid}>
                {remainingPosts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
                <h3>No articles found matching your criteria.</h3>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  style={{ marginTop: '1rem', color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </section>

          <Newsletter />
        </div>
      </main>

      <Footer subtext="Premium Embroidery Insights." />
    </>
  );
}
