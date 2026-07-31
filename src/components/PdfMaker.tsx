'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FileDown, Check, Search, X, ImageIcon, Trash2, Crown } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';
import { jsPDF } from 'jspdf';
import { useSubscription } from '@/context/SubscriptionContext';
import { SUBSCRIPTIONS_COMING_SOON } from '@/lib/subscriptionConfig';
import styles from './PdfMaker.module.css';
import { useTranslation } from '@/context/LanguageContext';
import { translateField } from '@/lib/i18n';

const FREE_MAX_SELECTION = 20;
const PREMIUM_MAX_SELECTION = 100;

interface PdfMakerProps {
  initialImages: any[];
}

export default function PdfMaker({ initialImages }: PdfMakerProps) {
  const { t, locale } = useTranslation();
  
  // ── Subscription ────────────────────────────────────────
  const { isSubscribed, openModal } = useSubscription();
  const MAX_SELECTION = isSubscribed ? PREMIUM_MAX_SELECTION : FREE_MAX_SELECTION;

  // ── State ────────────────────────────────────────────────
  const [selectedUrls, setSelectedUrls] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showPreview, setShowPreview] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeout = useRef<NodeJS.Timeout | null>(null);

  // Lock body scroll when preview is active
  useEffect(() => {
    if (showPreview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPreview]);

  // ── Helpers ──────────────────────────────────────────────
  const showToast = useCallback((msg: string) => {
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    setToast(msg);
    toastTimeout.current = setTimeout(() => setToast(null), 2500);
  }, []);

  const getImageUrl = useCallback((image: any, size = 600) => {
    try {
      return urlFor(image.mainImage).width(size).height(size).url();
    } catch {
      return '';
    }
  }, []);

  const getFullImageUrl = useCallback((image: any) => {
    try {
      return urlFor(image.mainImage).url();
    } catch {
      return '';
    }
  }, []);

  // ── Categories ───────────────────────────────────────────
  const categories = useMemo(() => {
    const cats = new Set<string>();
    cats.add('All');
    initialImages.forEach((img) => {
      if (img.categories) {
        img.categories.forEach((c: any) => {
          const catTitle = translateField(c, 'title', locale);
          if (catTitle) cats.add(catTitle);
        });
      }
    });
    return Array.from(cats);
  }, [initialImages, locale]);

  // ── Filtered images ─────────────────────────────────────
  const filteredImages = useMemo(() => {
    let imgs = initialImages;
    if (activeCategory !== 'All') {
      imgs = imgs.filter((img) =>
        img.categories?.some((c: any) => translateField(c, 'title', locale) === activeCategory)
      );
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      imgs = imgs.filter((img) => {
        const transTitle = translateField(img, 'title', locale);
        return transTitle?.toLowerCase().includes(q);
      });
    }
    return imgs;
  }, [initialImages, activeCategory, searchQuery, locale]);

  // ── Selection logic ─────────────────────────────────────
  const toggleImage = useCallback(
    (url: string) => {
      setSelectedUrls((prev) => {
        if (prev.includes(url)) {
          return prev.filter((u) => u !== url);
        }
        if (prev.length >= MAX_SELECTION) {
          showToast(t('pdfMaker.maxSelectionAllowed', 'Maximum {max} images allowed').replace('{max}', MAX_SELECTION.toString()));
          return prev;
        }
        return [...prev, url];
      });
    },
    [MAX_SELECTION, showToast, t]
  );

  const clearSelection = useCallback(() => setSelectedUrls([]), []);

  const selectAll = useCallback(() => {
    const urls = filteredImages
      .slice(0, MAX_SELECTION)
      .map((img) => getFullImageUrl(img))
      .filter(Boolean);
    setSelectedUrls(urls);
    if (filteredImages.length > MAX_SELECTION) {
      showToast(t('pdfMaker.selectedFirstLimit', 'Selected first {max} images (limit)').replace('{max}', MAX_SELECTION.toString()));
    }
  }, [filteredImages, getFullImageUrl, MAX_SELECTION, showToast, t]);

  // ── PDF generation ──────────────────────────────────────
  const generateAndDownloadPdf = useCallback(async () => {
    if (selectedUrls.length === 0) return;
    setIsGenerating(true);

    try {
      // Load all images as HTMLImageElement
      const loadImage = (url: string): Promise<HTMLImageElement> =>
        new Promise((resolve, reject) => {
          const img = new window.Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = url;
        });

      const images = await Promise.all(selectedUrls.map(loadImage));

      // Create PDF (A4 portrait)
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const usableW = pageW - margin * 2;
      const usableH = pageH - margin * 2 - 10; // reserve 10mm bottom for watermark

      images.forEach((img, i) => {
        if (i > 0) pdf.addPage();

        // Scale image to fit
        const imgRatio = img.width / img.height;
        let drawW = usableW;
        let drawH = drawW / imgRatio;
        if (drawH > usableH) {
          drawH = usableH;
          drawW = drawH * imgRatio;
        }
        const x = margin + (usableW - drawW) / 2;
        const y = margin + (usableH - drawH) / 2;

        // Draw image via canvas to get data URL
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d')!;
        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.92);

        pdf.addImage(dataUrl, 'JPEG', x, y, drawW, drawH);

        // Watermark – center diagonal (free users only)
        if (!isSubscribed) {
          pdf.saveGraphicsState();
          pdf.setGState(new (pdf as any).GState({ opacity: 0.12 }));
          pdf.setFontSize(36);
          pdf.setTextColor(180, 150, 50);
          const cx = pageW / 2;
          const cy = pageH / 2;
          pdf.text('aariworkdesigns.com', cx, cy, {
            angle: 30,
            align: 'center',
          });
          pdf.restoreGraphicsState();

          // Watermark – bottom right
          pdf.setFontSize(8);
          pdf.setTextColor(180, 150, 50);
          pdf.text('aariworkdesigns.com', pageW - margin, pageH - 5, {
            align: 'right',
          });
        }

        // Page number
        pdf.setFontSize(7);
        pdf.setTextColor(160, 160, 160);
        pdf.text(`${i + 1} / ${images.length}`, pageW - margin, margin, {
          align: 'right',
        });
      });

      pdf.save('AARI-Work-Designs.pdf');
    } catch (err) {
      console.error('PDF generation error:', err);
      showToast(t('pdfMaker.failedToGenerate', 'Failed to generate PDF. Try again.'));
    } finally {
      setIsGenerating(false);
    }
  }, [selectedUrls, showToast, isSubscribed, t]);

  // ── Render ──────────────────────────────────────────────
  const count = selectedUrls.length;

  return (
    <div className={styles.pageWrapper}>
      {/* ── Hero ──────────────────────────────── */}
      <div className={styles.heroArea}>
        <div className={`${styles.heroContent} container`}>
          <div className={styles.badge}>{t('pdfMaker.badge', '✦ PDF Maker')}</div>
          <h1 className={styles.title}>
            {t('pdfMaker.title', 'Create Your ')}
            <span className="text-gradient">{t('pdfMaker.titleHighlight', 'PDF')}</span>
          </h1>
          <p className={styles.subtitle}>
            {t('pdfMaker.subtitle', 'Select tracing designs from the collection, preview your PDF with watermark, and download it instantly — all on your phone.')}
          </p>
        </div>
      </div>

      {/* ── Main content ──────────────────────── */}
      <div className={styles.gridContainer}>
        {/* Search */}
        <div className={styles.searchWrapper} style={{ position: 'relative' }}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder={t('pdfMaker.searchPlaceholder', 'Search designs...')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category pills */}
        <div className={styles.filterRow}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterPill} ${activeCategory === cat ? styles.filterPillActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'All' ? t('pdfMaker.all', 'All') : cat}
            </button>
          ))}
        </div>

        {/* Select-all row */}
        <div className={styles.selectAllRow}>
          <span className={styles.imageCount}>
            {filteredImages.length} {filteredImages.length !== 1 ? t('pdfMaker.designs', 'designs') : t('pdfMaker.design', 'design')}
          </span>
          {filteredImages.length > 0 && (
            <button className={styles.selectAllBtn} onClick={count > 0 ? clearSelection : selectAll}>
              {count > 0 ? t('pdfMaker.deselectAll', 'Deselect All') : t('pdfMaker.selectAll', 'Select All')}
            </button>
          )}
        </div>

        {/* Image grid */}
        {filteredImages.length > 0 ? (
          <div className={styles.grid}>
            {filteredImages.map((image, idx) => {
              const fullUrl = getFullImageUrl(image);
              if (!fullUrl) return null;
              const isSelected = selectedUrls.includes(fullUrl);
              const orderNum = isSelected ? selectedUrls.indexOf(fullUrl) + 1 : 0;
              const imageTitle = translateField(image, 'title', locale);

              return (
                <div
                  key={image._id || idx}
                  className={`${styles.imageCard} ${isSelected ? styles.imageCardSelected : ''}`}
                  onClick={() => toggleImage(fullUrl)}
                  data-interactive="true"
                >
                  <Image
                    src={getImageUrl(image, 400)}
                    alt={imageTitle || 'Design'}
                    fill
                    sizes="(max-width: 600px) 33vw, (max-width: 900px) 25vw, 200px"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />

                  {/* Selection checkbox */}
                  <div className={`${styles.checkOverlay} ${isSelected ? styles.checkOverlayChecked : ''}`}>
                    {isSelected && <Check size={14} strokeWidth={3} />}
                  </div>

                  {/* Order number */}
                  {isSelected && (
                    <div className={styles.selectionOrder}>{orderNum}</div>
                  )}

                  {/* Title */}
                  <div className={styles.cardTitleOverlay}>{imageTitle}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <ImageIcon size={28} />
            </div>
            <p>{t('pdfMaker.noDesignsFound', 'No designs found')}</p>
          </div>
        )}
      </div>

      {/* ── Sticky bottom bar ─────────────────── */}
      <div className={`${styles.bottomBar} ${count === 0 ? styles.bottomBarHidden : ''}`}>
        <div className={styles.selectedInfo}>
          <span>{count} {t('pdfMaker.selected', 'selected')}</span>
          <button className={styles.clearBtn} onClick={clearSelection}>
            <Trash2 size={12} style={{ marginRight: 3 }} /> {t('pdfMaker.clear', 'Clear')}
          </button>
        </div>

        <button
          className={styles.makePdfBtn}
          onClick={() => setShowPreview(true)}
          disabled={count === 0}
        >
          <FileDown size={16} />
          {t('pdfMaker.previewPdf', 'Preview PDF')}
          {count > 0 && <span className={styles.makePdfBtnBadge}>{count}</span>}
        </button>
      </div>

      {/* ── Preview modal ─────────────────────── */}
      {showPreview && (
        <div className={styles.previewOverlay}>
          <div className={styles.previewHeader}>
            <span className={styles.previewTitle}>{t('pdfMaker.pdfPreviewTitle', 'PDF Preview')}</span>
            <div className={styles.previewHeaderActions}>
              <button className={styles.downloadBtn} onClick={generateAndDownloadPdf}>
                <FileDown size={14} />
                {t('pdfMaker.download', 'Download')}
              </button>
              <button className={styles.previewCloseBtn} onClick={() => setShowPreview(false)}>
                <X size={18} />
              </button>
            </div>
          </div>

          <div className={styles.previewBody}>
            {selectedUrls.map((url, i) => (
              <div key={url} className={styles.previewPage}>
                <div className={styles.previewPageInner}>
                  <img src={url} alt={`Page ${i + 1}`} className={styles.previewImage} />
                  {!isSubscribed && (
                    <>
                      <div className={styles.watermarkCenter}>aariworkdesigns.com</div>
                      <div className={styles.watermark}>aariworkdesigns.com</div>
                    </>
                  )}
                  <div className={styles.pageNumber}>{i + 1} / {selectedUrls.length}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Loading overlay ───────────────────── */}
      {isGenerating && (
        <div className={styles.loadingOverlay}>
          <div className={styles.spinner} />
          <span className={styles.loadingText}>{t('pdfMaker.generatingPdf', 'Generating PDF…')}</span>
        </div>
      )}

      {/* ── Premium upsell nudge ──────────────── */}
      {!isSubscribed && count > 0 && (
        <div
          onClick={() => { if (!SUBSCRIPTIONS_COMING_SOON) openModal(); }}
          style={{
            position: 'fixed', bottom: '80px', left: '50%', transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, rgba(45, 5, 5, 0.9), rgba(15, 2, 2, 0.95))',
            border: '1px solid var(--glass-border)', borderRadius: '10px',
            padding: '0.6rem 1.2rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.8rem', color: 'var(--text-secondary)', zIndex: 999,
            boxShadow: '0 8px 25px rgba(0,0,0,0.4)', whiteSpace: 'nowrap',
          }}
        >
          <Crown size={14} style={{ color: 'var(--accent)' }} />
          <span>{SUBSCRIPTIONS_COMING_SOON ? t('header.comingSoon', 'Subscriptions Coming Soon') : t('pdfMaker.removeWatermarksNudge', 'Subscribe to remove watermarks & select up to 100')}</span>
        </div>
      )}

      {/* ── Toast ─────────────────────────────── */}
      {toast && <div className={styles.toast}>{toast}</div>}
    </div>
  );
}
