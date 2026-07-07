'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { Search, Download, Share2, BookOpen, Sparkles, X, Check, ArrowRight, LayoutGrid, List } from 'lucide-react';
import styles from './Gallery.module.css';

interface GalleryProps {
  items: any[];
}

export default function Gallery({ items }: GalleryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'article' | 'standalone'>('all');
  const [sortBy, setSortBy] = useState<'title-asc' | 'title-desc' | 'date-desc' | 'date-asc'>('title-asc');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gallery_view_mode');
      return (saved === 'list' || saved === 'grid') ? saved : 'grid';
    }
    return 'grid';
  });
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSetViewMode = (mode: 'grid' | 'list') => {
    setViewMode(mode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('gallery_view_mode', mode);
    }
  };

  // Filter items
  const filteredItems = items.filter((item) => {
    const query = searchQuery.toLowerCase();
    const matchesTitle = item.title?.toLowerCase().includes(query);
    const matchesAlt = item.alt?.toLowerCase().includes(query);
    const matchesCaption = item.caption?.toLowerCase().includes(query);
    
    const matchesSearch = matchesTitle || matchesAlt || matchesCaption;
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'article') return matchesSearch && item.type === 'article';
    if (activeTab === 'standalone') return matchesSearch && item.type === 'standalone';
    return matchesSearch;
  });

  // Client-side sort dynamic evaluation
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'title-asc') {
      return (a.title || '').localeCompare(b.title || '');
    }
    if (sortBy === 'title-desc') {
      return (b.title || '').localeCompare(a.title || '');
    }
    if (sortBy === 'date-desc') {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    }
    if (sortBy === 'date-asc') {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateA - dateB;
    }
    return 0;
  });

  const handleDownload = async (imgUrl: string, title: string) => {
    setDownloading(true);
    const cleanTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const filename = `aari_design_${cleanTitle}.jpg`;

    try {
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('CORS download failed, falling back to direct open:', error);
      const link = document.createElement('a');
      link.href = imgUrl;
      link.target = '_blank';
      link.download = filename;
      link.click();
    } finally {
      setDownloading(false);
    }
  };

  const handleShare = (item: any) => {
    const imageUrl = urlFor(item.mainImage).url();
    const shareUrl = item.type === 'article' && item.slug?.current
      ? `${window.location.origin}/blog/${item.slug.current}`
      : `${window.location.origin}/trace?img=${encodeURIComponent(imageUrl)}`;

    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error('Share copy failed:', err));
  };

  return (
    <section className={styles.gallerySection}>
      {/* ── FILTER CONTROLS ── */}
      <div className={styles.controlsContainer}>
        {/* Tab Controls */}
        <div className={styles.tabsWrapper}>
          <div className={styles.tabsGrid}>
            <button
              onClick={() => setActiveTab('all')}
              className={`${styles.tabBtn} ${activeTab === 'all' ? styles.tabActive : ''}`}
            >
              All Designs
            </button>
            <button
              onClick={() => setActiveTab('article')}
              className={`${styles.tabBtn} ${activeTab === 'article' ? styles.tabActive : ''}`}
            >
              From Articles
            </button>
            <button
              onClick={() => setActiveTab('standalone')}
              className={`${styles.tabBtn} ${activeTab === 'standalone' ? styles.tabActive : ''}`}
            >
              Design Templates
            </button>
          </div>
        </div>

        {/* Search & Sort Panel */}
        <div className={styles.searchSortContainer}>
          {/* Search Control */}
          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} size={18} />
            <input
              type="text"
              placeholder="Search designs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className={styles.searchClear}>
                <X size={16} />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className={styles.sortWrapper}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className={styles.sortSelect}
            >
              <option value="title-asc">Alphabetical (A - Z)</option>
              <option value="title-desc">Alphabetical (Z - A)</option>
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
            </select>
          </div>

          {/* View Toggle */}
          <div className={styles.viewToggleWrapper}>
            <button
              type="button"
              onClick={() => handleSetViewMode('grid')}
              className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.viewBtnActive : ''}`}
              title="Grid View"
            >
              <LayoutGrid size={18} />
            </button>
            <button
              type="button"
              onClick={() => handleSetViewMode('list')}
              className={`${styles.viewBtn} ${viewMode === 'list' ? styles.viewBtnActive : ''}`}
              title="List View"
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ── GALLERY GRID OR LIST ── */}
      {sortedItems.length === 0 ? (
        <div className={styles.empty}>
          <p>No designs match your filters.</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className={styles.grid}>
          {sortedItems.map((item) => {
            const imgUrl = urlFor(item.mainImage).width(600).height(600).url();
            return (
              <div
                key={item._id}
                className={styles.card}
                onClick={() => setSelectedItem(item)}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={imgUrl}
                    alt={item.title || 'Design'}
                    width={400}
                    height={400}
                    className={styles.image}
                    loading="lazy"
                  />
                  <div className={styles.cardOverlay}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <div className={styles.cardBadges}>
                      {item.type === 'article' ? (
                        <span className={`${styles.badge} ${styles.badgeArticle}`}>Blog Article</span>
                      ) : (
                        <span className={`${styles.badge} ${styles.badgeTemplate}`}>Trace Template</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.listViewContainer}>
          {sortedItems.map((item) => {
            const imgUrl = urlFor(item.mainImage).width(600).height(600).url();
            return (
              <div
                key={item._id}
                className={styles.listItem}
                onClick={() => setSelectedItem(item)}
              >
                <div className={styles.listItemLeft}>
                  <div className={styles.listImageWrapper}>
                    <img
                      src={imgUrl}
                      alt={item.title || 'Design'}
                      className={styles.listImage}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.listItemInfo}>
                    <h3 className={styles.listItemTitle}>{item.title}</h3>
                    <div className={styles.listItemBadges}>
                      {item.type === 'article' ? (
                        <span className={`${styles.badge} ${styles.badgeArticle}`}>Blog Article</span>
                      ) : (
                        <span className={`${styles.badge} ${styles.badgeTemplate}`}>Trace Template</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.listItemRight}>
                  <div className={styles.listItemAction}>
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── ON-PAGE FAQ ACCORDION (AEO & GEO Optimization) ── */}
      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>
          Frequently Asked Questions — <span className="text-gradient">Aari Embroideries</span>
        </h2>
        <p className={styles.faqSubtitle}>
          Get quick guides on tracing, downloading, and stitching simple aari work blouse designs for beginners.
        </p>

        <div className={styles.faqAccordion}>
          {[
            {
              q: "How do I trace simple aari work blouse designs for beginners?",
              a: "To trace simple aari work blouse designs, select templates in our visual gallery. Click the 'Open in Tracing Studio' button to load the blueprint in full-screen lightbox simulator. Place your tracing paper or blouse fabric directly on the backlit tablet or phone screen to map patterns accurately."
            },
            {
              q: "Where can I download basic simple aari work blouse designs images?",
              a: "Every image inside our visual gallery is free to download in high-resolution, featuring basic simple aari work blouse hand designs, neck outlines, and sleeves templates."
            },
            {
              q: "What are easy simple aari work designs patterns for beginners?",
              a: "For beginners starting out, easy simple aari work designs include basic line vectors (chain stitches, wave lines, dots), simple leaves, and flower border designs. These outline traces require fewer changes and are excellent for practicing on sleeve borders and necklines."
            }
          ].map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
              >
                <button 
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className={styles.faqIcon}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div className={styles.faqAnswerWrapper}>
                  <div className={styles.faqAnswer}>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── MODAL / DETAILED LIGHTBOX ── */}
      {selectedItem && (
        <div className={styles.modalOverlay} onClick={() => setSelectedItem(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedItem(null)}>
              <X size={24} />
            </button>

            <div className={styles.modalGrid}>
              {/* Left Side: Fluid Zoom Image viewport */}
              <div className={styles.modalImageWrapper}>
                <img
                  src={urlFor(selectedItem.mainImage).url()}
                  alt={selectedItem.title}
                  className={styles.modalImage}
                />
              </div>

              {/* Right Side: Information & Action Console */}
              <div className={styles.modalInfoPanel}>
                <div>
                  <div className={styles.modalSourceBadgeContainer}>
                    {selectedItem.type === 'article' ? (
                      <span className={`${styles.badge} ${styles.badgeArticle}`}>✦ From Blog Post</span>
                    ) : (
                      <span className={`${styles.badge} ${styles.badgeTemplate}`}>✦ Standalone Template</span>
                    )}
                  </div>
                  <h2 className={styles.modalTitle}>{selectedItem.title}</h2>
                  <p className={styles.modalDescription}>
                    {selectedItem.description || 'This beautiful embroidery template is prepared for Maggam and Aari tracing. Upload it to the tracing studio or download to your devices.'}
                  </p>
                </div>

                <div className={styles.modalActions}>
                  {/* Primary Tracing Button */}
                  <a
                    href={`/trace?img=${encodeURIComponent(urlFor(selectedItem.mainImage).url())}`}
                    className={styles.actionBtnPrimary}
                  >
                    <Sparkles size={18} />
                    <span>Open in Tracing Studio</span>
                  </a>

                  {/* Context-Specific Article Button */}
                  {selectedItem.type === 'article' && selectedItem.slug?.current && (
                    <Link
                      href={`/blog/${selectedItem.slug.current}`}
                      className={styles.actionBtnSecondary}
                    >
                      <BookOpen size={18} />
                      <span>Read Original Article</span>
                      <ArrowRight size={16} style={{ marginLeft: 'auto' }} />
                    </Link>
                  )}

                  {/* Standard Actions */}
                  <div className={styles.actionsRow}>
                    <button
                      onClick={() => handleDownload(urlFor(selectedItem.mainImage).url(), selectedItem.title)}
                      className={styles.iconActionBtn}
                      disabled={downloading}
                      title="Download Image"
                    >
                      <Download size={18} />
                      <span>{downloading ? 'Downloading...' : 'Download'}</span>
                    </button>

                    <button
                      onClick={() => handleShare(selectedItem)}
                      className={styles.iconActionBtn}
                      title="Share Design"
                    >
                      {copied ? <Check size={18} style={{ color: 'var(--success)' }} /> : <Share2 size={18} />}
                      <span>{copied ? 'Link Copied!' : 'Share'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
