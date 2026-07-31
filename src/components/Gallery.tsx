'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { Search, Download, Share2, BookOpen, Sparkles, X, Check, ArrowRight, LayoutGrid, List } from 'lucide-react';
import styles from './Gallery.module.css';
import { watermarkDownload } from '@/lib/watermarkDownload';
import { useTranslation } from '@/context/LanguageContext';
import { translateField } from '@/lib/i18n';

interface GalleryProps {
  items: any[];
}

export default function Gallery({ items }: GalleryProps) {
  const { t, locale } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'article' | 'standalone'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
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

  // Get all unique categories present in items for the current active tab dynamically
  const uniqueCategories = items.reduce((acc: { title: string; slug: string; count: number }[], item) => {
    // Check if item matches current tab
    let matchesTab = true;
    if (activeTab === 'article') {
      matchesTab = item.type === 'article';
    } else if (activeTab === 'standalone') {
      matchesTab = item.type === 'standalone';
    }

    if (matchesTab && item.categories && Array.isArray(item.categories)) {
      item.categories.forEach((cat: any) => {
        if (cat && cat.title) {
          const catTitle = translateField(cat, 'title', locale);
          const slugVal = cat.slug?.current || cat.slug || catTitle.toLowerCase().replace(/\s+/g, '-');
          const existing = acc.find((elem) => elem.slug === slugVal);
          if (existing) {
            existing.count += 1;
          } else {
            acc.push({ title: catTitle, slug: slugVal, count: 1 });
          }
        }
      });
    }
    return acc;
  }, []);

  // Filter items
  const filteredItems = items.filter((item) => {
    const query = searchQuery.toLowerCase();
    const translatedTitle = translateField(item, 'title', locale);
    const matchesTitle = translatedTitle?.toLowerCase().includes(query);
    const matchesAlt = item.alt?.toLowerCase().includes(query);
    const matchesCaption = item.caption?.toLowerCase().includes(query);
    
    const matchesSearch = matchesTitle || matchesAlt || matchesCaption;
    
    // Active tab matching
    let matchesTab = true;
    if (activeTab === 'article') {
      matchesTab = item.type === 'article';
    } else if (activeTab === 'standalone') {
      matchesTab = item.type === 'standalone';
    }

    // Category matching
    let matchesCategory = true;
    if (selectedCategory !== 'all') {
      matchesCategory = item.categories?.some((cat: any) => {
        const catTitle = translateField(cat, 'title', locale);
        const slugVal = cat.slug?.current || cat.slug || catTitle?.toLowerCase().replace(/\s+/g, '-');
        return slugVal === selectedCategory;
      }) || false;
    }

    return matchesSearch && matchesTab && matchesCategory;
  });

  // Client-side sort dynamic evaluation
  const sortedItems = [...filteredItems].sort((a, b) => {
    const titleA = translateField(a, 'title', locale) || '';
    const titleB = translateField(b, 'title', locale) || '';

    if (sortBy === 'title-asc') {
      return titleA.localeCompare(titleB);
    }
    if (sortBy === 'title-desc') {
      return titleB.localeCompare(titleA);
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
    const filename = `aari_design_${cleanTitle}_aariworkdesigns.jpg`;

    try {
      // Download with watermark applied via Canvas API
      await watermarkDownload(imgUrl, filename);
    } catch (error) {
      console.error('Watermark download failed:', error);
    } finally {
      setDownloading(false);
    }
  };

  const handleShare = (item: any) => {
    const imageUrl = urlFor(item.mainImage).url();
    const shareUrl = item.type === 'article' && item.slug?.current
      ? `${window.location.origin}/${locale}/blog/${item.slug.current}`
      : `${window.location.origin}/${locale}/trace?img=${encodeURIComponent(imageUrl)}`;

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
              onClick={() => { setActiveTab('all'); setSelectedCategory('all'); }}
              className={`${styles.tabBtn} ${activeTab === 'all' ? styles.tabActive : ''}`}
            >
              {t('gallery.allDesigns', 'All Designs')}
            </button>
            <button
              onClick={() => { setActiveTab('article'); setSelectedCategory('all'); }}
              className={`${styles.tabBtn} ${activeTab === 'article' ? styles.tabActive : ''}`}
            >
              {t('gallery.fromArticles', 'From Articles')}
            </button>
            <button
              onClick={() => { setActiveTab('standalone'); setSelectedCategory('all'); }}
              className={`${styles.tabBtn} ${activeTab === 'standalone' ? styles.tabActive : ''}`}
            >
              {t('gallery.designTemplates', 'Design Templates')}
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
              placeholder={t('gallery.searchDesigns', 'Search designs...')}
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
              <option value="title-asc">{t('gallery.alphabeticalAZ', 'Alphabetical (A - Z)')}</option>
              <option value="title-desc">{t('gallery.alphabeticalZA', 'Alphabetical (Z - A)')}</option>
              <option value="date-desc">{t('gallery.newestFirst', 'Newest First')}</option>
              <option value="date-asc">{t('gallery.oldestFirst', 'Oldest First')}</option>
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

      {/* ── CATEGORY FILTER PILLS ── */}
      {uniqueCategories.length > 0 && (
        <div className={styles.categoriesWrapper}>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`${styles.categoryBtn} ${selectedCategory === 'all' ? styles.categoryBtnActive : ''}`}
          >
            {t('gallery.allCategories', 'All Categories')} ({items.filter(item => {
              if (activeTab === 'all') return true;
              if (activeTab === 'article') return item.type === 'article';
              if (activeTab === 'standalone') return item.type === 'standalone';
              return true;
            }).length})
          </button>
          {uniqueCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`${styles.categoryBtn} ${selectedCategory === cat.slug ? styles.categoryBtnActive : ''}`}
            >
              {cat.title} ({cat.count})
            </button>
          ))}
        </div>
      )}

      {/* ── GALLERY GRID OR LIST ── */}
      {sortedItems.length === 0 ? (
        <div className={styles.empty}>
          <p>{t('gallery.noDesigns', 'No designs match your filters.')}</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className={styles.grid}>
          {sortedItems.map((item) => {
            const itemTitle = translateField(item, 'title', locale);
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
                    alt={itemTitle || 'Design'}
                    width={400}
                    height={400}
                    className={styles.image}
                    sizes="(max-width: 600px) 150px, (max-width: 900px) 300px, 400px"
                    loading="lazy"
                  />
                  {/* Traceable badge in upper right corner */}
                  <div className={styles.traceableBadgeCard}>
                    <Sparkles size={12} className={styles.sparkleIcon} />
                    <span>{t('gallery.traceable', 'Traceable')}</span>
                  </div>
                </div>
                <div className={styles.cardOverlay}>
                  <h3 className={styles.cardTitle}>{itemTitle}</h3>
                  <div className={styles.cardBadges}>
                    {item.type === 'article' ? (
                      <span className={`${styles.badge} ${styles.badgeArticle}`}>{t('gallery.blogArticle', 'Blog Article')}</span>
                    ) : (
                      <span className={`${styles.badge} ${styles.badgeTemplate}`}>{t('gallery.traceTemplate', 'Trace Template')}</span>
                    )}
                  </div>
                  {/* Start Tracing quick button on hover */}
                  <div className={styles.quickActions}>
                    <Link
                      href={`/${locale}/trace?img=${encodeURIComponent(urlFor(item.mainImage).url())}`}
                      className={styles.quickTraceBtn}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Sparkles size={14} />
                      <span>{t('gallery.startTracing', 'Start Tracing')}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.listViewContainer}>
          {sortedItems.map((item) => {
            const itemTitle = translateField(item, 'title', locale);
            const listImgUrl = urlFor(item.mainImage).width(150).height(150).url();
            return (
              <div
                key={item._id}
                className={styles.listItem}
                onClick={() => setSelectedItem(item)}
              >
                <div className={styles.listItemLeft}>
                  <div className={styles.listImageWrapper}>
                    <img
                      src={listImgUrl}
                      alt={itemTitle || 'Design'}
                      className={styles.listImage}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.listItemInfo}>
                    <h3 className={styles.listItemTitle}>{itemTitle}</h3>
                    <div className={styles.listItemBadges}>
                      {item.type === 'article' ? (
                        <span className={`${styles.badge} ${styles.badgeArticle}`}>{t('gallery.blogArticle', 'Blog Article')}</span>
                      ) : (
                        <span className={`${styles.badge} ${styles.badgeTemplate}`}>{t('gallery.traceTemplate', 'Trace Template')}</span>
                      )}
                      <span className={`${styles.badge} ${styles.badgeTraceable}`}>{t('gallery.traceable', 'Traceable')}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.listItemRight}>
                  <div className={styles.listActionsGroup}>
                    <Link
                      href={`/${locale}/trace?img=${encodeURIComponent(urlFor(item.mainImage).url())}`}
                      className={styles.listTraceBtn}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Sparkles size={14} />
                      <span>{t('gallery.startTracing', 'Start Tracing')}</span>
                    </Link>
                    <div className={styles.listItemAction}>
                      <span>{t('gallery.details', 'Details')}</span>
                      <ArrowRight size={16} />
                    </div>
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
          {t('gallery.faqTitle', 'Frequently Asked Questions — ')}<span className="text-gradient">{t('gallery.faqTitleHighlight', 'Aari Embroideries')}</span>
        </h2>
        <p className={styles.faqSubtitle}>
          {t('gallery.faqSubtitle', 'Get quick guides on tracing, downloading, and stitching simple aari work blouse designs for beginners.')}
        </p>

        <div className={styles.faqAccordion}>
          {[
            {
               q: t('gallery.faq1q', 'How do I trace simple aari work blouse designs for beginners?'),
               a: t('gallery.faq1a', 'To trace simple aari work blouse designs, select templates in our visual gallery. Click the \'Open in Tracing Studio\' button to load the blueprint in full-screen lightbox simulator. Place your tracing paper or blouse fabric directly on the backlit tablet or phone screen to map patterns accurately.')
            },
            {
               q: t('gallery.faq2q', 'Where can I download basic simple aari work blouse designs images?'),
               a: t('gallery.faq2a', 'Every image inside our visual gallery is free to download in high-resolution, featuring basic simple aari work blouse hand designs, neck outlines, and sleeves templates.')
            },
            {
               q: t('gallery.faq3q', 'What are easy simple aari work designs patterns for beginners?'),
               a: t('gallery.faq3a', 'For beginners starting out, easy simple aari work designs include basic line vectors (chain stitches, wave lines, dots), simple leaves, and flower border designs. These outline traces require fewer changes and are excellent for practicing on sleeve borders and necklines.')
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
                  alt={translateField(selectedItem, 'title', locale)}
                  className={styles.modalImage}
                />
              </div>

              {/* Right Side: Information & Action Console */}
              <div className={styles.modalInfoPanel}>
                <div>
                  <div className={styles.modalSourceBadgeContainer}>
                    {selectedItem.type === 'article' ? (
                      <span className={`${styles.badge} ${styles.badgeArticle}`}>{t('gallery.fromBlogPost', '✦ From Blog Post')}</span>
                    ) : (
                      <span className={`${styles.badge} ${styles.badgeTemplate}`}>{t('gallery.standaloneTemplate', '✦ Standalone Template')}</span>
                    )}
                  </div>
                  <h2 className={styles.modalTitle}>{translateField(selectedItem, 'title', locale)}</h2>
                  <p className={styles.modalDescription}>
                    {translateField(selectedItem, 'description', locale) || t('gallery.defaultDescription', 'This beautiful embroidery template is prepared for Maggam and Aari tracing. Upload it to the tracing studio or download to your devices.')}
                  </p>
                </div>

                <div className={styles.modalActions}>
                  {/* Primary Tracing Button */}
                  <a
                    href={`/${locale}/trace?img=${encodeURIComponent(urlFor(selectedItem.mainImage).url())}`}
                    className={styles.actionBtnPrimary}
                  >
                    <Sparkles size={18} />
                    <span>{t('gallery.startTracingInStudio', 'Start Tracing in Studio')}</span>
                  </a>

                  {/* Context-Specific Article Button */}
                  {selectedItem.type === 'article' && selectedItem.slug?.current && (
                    <Link
                      href={`/${locale}/blog/${selectedItem.slug.current}`}
                      className={styles.actionBtnSecondary}
                    >
                      <BookOpen size={18} />
                      <span>{t('gallery.readOriginalArticle', 'Read Original Article')}</span>
                      <ArrowRight size={16} style={{ marginLeft: 'auto' }} />
                    </Link>
                  )}

                  {/* Standard Actions */}
                  <div className={styles.actionsRow}>
                    <button
                      onClick={() => handleDownload(urlFor(selectedItem.mainImage).url(), translateField(selectedItem, 'title', locale))}
                      className={styles.iconActionBtn}
                      disabled={downloading}
                      title="Download Image"
                    >
                      <Download size={18} />
                      <span>{downloading ? t('gallery.downloading', 'Downloading...') : t('gallery.download', 'Download')}</span>
                    </button>

                    <button
                      onClick={() => handleShare(selectedItem)}
                      className={styles.iconActionBtn}
                      title="Share Design"
                    >
                      {copied ? <Check size={18} style={{ color: 'var(--success)' }} /> : <Share2 size={18} />}
                      <span>{copied ? t('gallery.linkCopied', 'Link Copied!') : t('gallery.share', 'Share')}</span>
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
