'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import { useTranslation } from '@/context/LanguageContext';
import { urlFor } from '@/sanity/lib/image';

interface HeroProps {
  posts?: any[];
  galleryItems?: any[];
}

interface SlideItem {
  id: string;
  title: string;
  imageUrl: string;
  alt: string;
  badge: string;
  traceUrl: string;
  excerpt: string;
}

export default function Hero({ posts, galleryItems }: HeroProps) {
  const { t, locale } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Default curated high-resolution tracing design slides
  const defaultSlides: SlideItem[] = [
    {
      id: 'slide-1',
      title: t('hero.slide1Title', 'Peacock Zardosi Bridal Neckline'),
      imageUrl: '/peacock_bridal_blouse.webp',
      alt: t('hero.slide1Alt', 'Peacock Zardosi Bridal Neckline Aari Work Embroidery Pattern'),
      badge: t('hero.slide1Badge', 'Heavy Bridal Pattern'),
      traceUrl: `/${locale}/trace?img=${encodeURIComponent('/peacock_bridal_blouse.webp')}`,
      excerpt: t('hero.slide1Excerpt', 'Intricate peacock motifs with gold bead & zardosi tracing overlay.'),
    },
    {
      id: 'slide-2',
      title: t('hero.slide2Title', 'Royal Stone Work Wedding Blouse'),
      imageUrl: '/stone_work_wedding_blouse.webp',
      alt: t('hero.slide2Alt', 'Royal Stone Work Wedding Blouse Aari Embroidery Design Pattern'),
      badge: t('hero.slide2Badge', 'Wedding Special'),
      traceUrl: `/${locale}/trace?img=${encodeURIComponent('/stone_work_wedding_blouse.webp')}`,
      excerpt: t('hero.slide2Excerpt', 'Grand stone work neckline & sleeve tracing design for silk sarees.'),
    },
    {
      id: 'slide-3',
      title: t('hero.slide3Title', 'Peacock Floral Motif Embroidery'),
      imageUrl: '/seo-images/peacock_floral_motif.png',
      alt: t('hero.slide3Alt', 'Peacock Floral Motif Aari Work Design Pattern'),
      badge: t('hero.slide3Badge', 'Sleeve Design'),
      traceUrl: `/${locale}/trace?img=${encodeURIComponent('/seo-images/peacock_floral_motif.png')}`,
      excerpt: t('hero.slide3Excerpt', 'Symmetric floral & peacock sleeve pattern ready for cloth tracing.'),
    },
    {
      id: 'slide-4',
      title: t('hero.slide4Title', 'Precision Neckline Tracing Pattern'),
      imageUrl: '/seo-images/blouse_tracing_step.png',
      alt: t('hero.slide4Alt', 'Precision Neckline Aari Tracing Pattern Step by Step'),
      badge: t('hero.slide4Badge', 'Interactive Trace'),
      traceUrl: `/${locale}/trace?img=${encodeURIComponent('/seo-images/blouse_tracing_step.png')}`,
      excerpt: t('hero.slide4Excerpt', 'Step-by-step digital tracing overlay tool for boutique artisans.'),
    },
  ];

  // Extract gallery tracing pattern images (or fallback to article main images)
  const itemsToUse = (galleryItems && galleryItems.length > 0) ? galleryItems : (posts || []);
  
  const sanitySlides: SlideItem[] = itemsToUse
    .filter((item: any) => item?.mainImage || item?.mainImageAsset)
    .slice(0, 6)
    .map((item: any, idx: number) => {
      let imgUrl = '';
      if (typeof item.mainImage === 'string') {
        imgUrl = item.mainImage;
      } else if (item.mainImage?.asset) {
        imgUrl = urlFor(item.mainImage).width(800).height(600).auto('format').url();
      } else if (item.mainImageAsset) {
        imgUrl = urlFor(item.mainImageAsset).width(800).height(600).auto('format').url();
      }

      const titleText = item.title || item.alt || item.caption || `Tracing Design Pattern ${idx + 1}`;
      const categoryName = item.categories?.[0]?.title || t('hero.tracingBadge', 'Tracing Design');

      return {
        id: item._id || `gallery-slide-${idx}`,
        title: titleText,
        imageUrl: imgUrl,
        alt: item.alt || `${titleText} - Aari Embroidery Tracing Pattern`,
        badge: categoryName,
        traceUrl: `/${locale}/trace?img=${encodeURIComponent(imgUrl)}`,
        excerpt: item.caption || item.excerpt || t('hero.defaultExcerpt', 'Authentic digital tracing design pattern for cloth embroidery.'),
      };
    })
    .filter((item) => !!item.imageUrl);

  // Combine slides: Sanity gallery tracing items take priority, supplemented by defaults
  const slides = sanitySlides.length >= 2 ? sanitySlides : defaultSlides;

  // Auto-play slideshow timer (pause on hover)
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch Swipe Handlers for mobile responsiveness
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const currentSlide = slides[activeSlide] || slides[0];

  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <span className={`${styles.badge} animate-fade-in`}>
            ✨ {t('hero.badge', 'Web Tracing Studio Live')}
          </span>
          <h1 className={`${styles.title} animate-fade-in`}>
            {t('hero.title1', 'Trace Your ')}
            <span className="text-gradient">{t('hero.titleHighlight', 'Imagination')}</span>
            {t('hero.title2', ' Directly on Cloth')}
          </h1>
          <p 
            className={`${styles.description} animate-fade-in`}
            dangerouslySetInnerHTML={{ 
              __html: t('hero.description', 'Our <strong>Web Tracing Studio</strong> is live—pick any design slide, lock your screen, and trace on cloth.') 
            }}
          />
          <ul className={`${styles.features} animate-fade-in`}>
            <li>
              ✨ <strong>{t('hero.feature1Label', 'Pick & Lock:')}</strong> {t('hero.feature1Desc', 'Stay focused while tracing')}
            </li>
            <li>
              ✍️ <strong>{t('hero.feature2Label', 'Custom Canvas:')}</strong> {t('hero.feature2Desc', 'Write names & text to draw')}
            </li>
            <li>
              🎨 <strong>{t('hero.feature3Label', 'Trace Anywhere:')}</strong> {t('hero.feature3Desc', 'Mobile-to-cloth precision')}
            </li>
          </ul>
          <div className={`${styles.actions} animate-fade-in`}>
            <Link href={currentSlide.traceUrl} className={styles.primaryBtn}>
              {t('hero.primaryBtn', 'Start Tracing Now')}
            </Link>
            <Link href={`/${locale}/gallery`} className={styles.secondaryBtn}>
              {t('hero.secondaryBtn', 'Explore Gallery')}
            </Link>
          </div>
        </div>

        {/* ── LIGHTWEIGHT SEO SLIDESHOW SHOWCASE ── */}
        <div 
          className={`${styles.slideshowWrapper} animate-fade-in`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.slideshowFrame}>
            <div className={styles.slideCard}>
              <div className={styles.imageContainer}>
                <Image 
                  src={currentSlide.imageUrl} 
                  alt={currentSlide.alt} 
                  width={550} 
                  height={650} 
                  className={styles.slideImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 480px, 550px"
                  priority={activeSlide === 0}
                  loading={activeSlide === 0 ? 'eager' : 'lazy'}
                />
                <div className={styles.badgeOverlay}>
                  <span className={styles.categoryTag}>{currentSlide.badge}</span>
                </div>
              </div>

              <div className={styles.slideDetails}>
                <h3 className={styles.slideTitle}>{currentSlide.title}</h3>
                <p className={styles.slideExcerpt}>{currentSlide.excerpt}</p>
                <div className={styles.slideActions}>
                  <Link href={currentSlide.traceUrl} className={styles.traceBtnInline}>
                    <span>{t('hero.traceThis', 'Trace This Pattern')}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            {slides.length > 1 && (
              <>
                <button 
                  onClick={handlePrev} 
                  className={`${styles.navBtn} ${styles.navBtnPrev}`}
                  aria-label="Previous Slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button 
                  onClick={handleNext} 
                  className={`${styles.navBtn} ${styles.navBtnNext}`}
                  aria-label="Next Slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </>
            )}

            {/* Indicator Dots */}
            {slides.length > 1 && (
              <div className={styles.indicators}>
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`${styles.dot} ${idx === activeSlide ? styles.dotActive : ''}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.glow} />
    </section>
  );
}
