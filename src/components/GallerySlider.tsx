'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { urlFor } from '@/sanity/lib/image';
import styles from './GallerySlider.module.css';

// Import standard Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface GalleryImage {
  _key?: string;
  alt?: string;
  caption?: string;
  isDesignTrace?: boolean;
  asset: any;
}

interface GallerySliderProps {
  images: GalleryImage[];
  displayMode: 'slider' | 'carousel';
}

export default function GallerySlider({ images, displayMode }: GallerySliderProps) {
  if (!images || images.length === 0) return null;

  const isCarousel = displayMode === 'carousel';

  // Responsive breakpoints configuration for Swiper
  const breakpointsConfig: Record<number, any> = isCarousel
    ? {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2.2,
          spaceBetween: 24,
        },
      }
    : {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      };


  return (
    <div 
      className={`${styles.galleryContainer} ${isCarousel ? styles.carouselMode : styles.sliderMode}`}
      style={{ contentVisibility: 'auto' }}
    >
      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={images.length > 2}
          grabCursor={true}
          breakpoints={breakpointsConfig}
          className="mySwiper"
        >
          {images.map((img, index) => {
            const imageUrl = urlFor(img).url();
            if (!imageUrl) return null;

            return (
              <SwiperSlide key={img._key || index}>
                <div className={styles.slideContent}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={imageUrl}
                      alt={img.alt || `Gallery Design Pattern ${index + 1}`}
                      className={styles.image}
                      loading="lazy"
                    />
                    {img.isDesignTrace && (
                      <a
                        href={`/trace?img=${encodeURIComponent(imageUrl)}`}
                        className={styles.traceButton}
                        style={{
                          position: 'absolute',
                          top: '0.75rem',
                          right: '0.75rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          padding: '0.4rem 0.9rem',
                          background: 'var(--accent-gradient)',
                          color: 'var(--bg-primary)',
                          borderRadius: '50px',
                          fontWeight: '700',
                          textDecoration: 'none',
                          fontSize: '0.8rem',
                          boxShadow: 'var(--shadow-md)',
                          transition: 'var(--transition)',
                          zIndex: 10,
                        }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                        </svg>
                        Trace
                      </a>
                    )}
                  </div>
                  
                  {(img.alt || img.caption) && (
                    <div className={styles.slideMeta}>
                      {img.alt && <span className={styles.alt}>{img.alt}</span>}
                      {img.caption && <span className={styles.caption}>{img.caption}</span>}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
