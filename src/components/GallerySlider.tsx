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
  categories?: any[];
  asset: any;
}

interface GallerySliderProps {
  images: GalleryImage[];
  displayMode: 'slider' | 'carousel';
  allTrace?: boolean;
}

export default function GallerySlider({ images, displayMode, allTrace = false }: GallerySliderProps) {
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
            // Gallery-level allTrace flag OR per-image flag
            const isTrace = allTrace || img.isDesignTrace;


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
                  </div>
                  
                  {(img.alt || img.caption || isTrace) && (
                    <div className={styles.slideMeta}>
                      {img.alt && <span className={styles.alt}>{img.alt}</span>}
                      {img.caption && <span className={styles.caption}>{img.caption}</span>}
                      
                      {isTrace && (
                        <div className={styles.traceButtonContainer}>
                          <a 
                            href={`/trace?img=${encodeURIComponent(imageUrl)}`}
                            className={styles.traceButton}
                          >
                            <span>Open in Tracing Tool</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                            </svg>
                          </a>
                        </div>
                      )}
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
