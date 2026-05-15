'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} glass`}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image src="/logo.png" alt="AARI Work Designs Logo" width={32} height={32} style={{ borderRadius: '50%', flexShrink: 0 }} />
          <span style={{ whiteSpace: 'nowrap' }}><span>AARI</span> Work Designs</span>
        </Link>
        
        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} color="var(--text-primary)" /> : <Menu size={24} color="var(--text-primary)" />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Articles</Link>
          <Link href="/trace" onClick={() => setIsMenuOpen(false)}>Trace Tool</Link>
          <Link href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <button className={styles.cta}>Subscribe</button>
        </nav>
      </div>
    </header>
  );
}
