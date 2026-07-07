'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

interface FooterProps {
  subtext?: string;
}

export default function Footer({ subtext = 'Trace your imagination with premium Aari work borders, bridal outlines, and digital embroidery templates.' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        {/* Brand/About Section */}
        <div className={styles.brandSection}>
          <Link href="/" className={styles.logoWrapper}>
            <Image 
              src="/logo.png" 
              alt="AARI Work Designs Logo" 
              width={36} 
              height={36} 
              priority={false}
              style={{ borderRadius: '50%' }}
            />
            <span className={styles.logoText}>
              <span>AARI</span> Work Designs
            </span>
          </Link>
          <p className={styles.subtext}>{subtext}</p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className={styles.sectionTitle}>Explore</h4>
          <nav className={styles.linksList}>
            <Link href="/">Home</Link>
            <Link href="/trace">Trace Tool</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/blog">Articles</Link>
            <Link href="/about">About Us</Link>
          </nav>
        </div>

        {/* Social Links Section */}
        <div>
          <h4 className={styles.sectionTitle}>Connect</h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.4' }}>
            Follow our design updates and tracing tools:
          </p>
          <div className={styles.socialIcons}>
            <a 
              href="https://www.instagram.com/aariworkdesigns.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIconLink}
              title="Instagram"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.facebook.com/profile.php?id=61591616707043" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIconLink}
              title="Facebook"
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a 
              href="https://in.pinterest.com/aariworkdesign/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialIconLink}
              title="Pinterest"
              aria-label="Pinterest"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.62 11.23-.1-.95-.19-2.42.04-3.46.21-.94 1.37-5.82 1.37-5.82s-.35-.7-.35-1.74c0-1.63.95-2.85 2.13-2.85 1.01 0 1.49.75 1.49 1.66 0 1.01-.64 2.53-.98 3.93-.28 1.17.58 2.13 1.73 2.13 2.08 0 3.67-2.19 3.67-5.35 0-2.8-2.01-4.75-4.88-4.75-3.32 0-5.27 2.49-5.27 5.06 0 1 .39 2.08.88 2.68.1.12.11.22.08.34-.09.38-.29 1.18-.33 1.34-.05.21-.17.26-.39.16-1.47-.69-2.4-2.85-2.4-4.58 0-3.73 2.71-7.16 7.82-7.16 4.11 0 7.3 2.93 7.3 6.84 0 4.08-2.58 7.37-6.15 7.37-1.2 0-2.33-.62-2.72-1.37L10 18.2c-.37 1.41-.95 3.12-1.42 3.86C9.64 22.72 10.79 23 12 23c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      {/* Copyright Info */}
      <div className={`${styles.bottomSection} container`}>
        <p>© {currentYear} AARI Work Designs. All rights reserved.</p>
        <p style={{ fontStyle: 'italic' }}>Trace Your Imagination.</p>
      </div>
    </footer>
  );
}
