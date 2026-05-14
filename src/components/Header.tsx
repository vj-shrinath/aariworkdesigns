import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={`${styles.header} glass`}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo}>
          <span>AARI</span>BLOG
        </Link>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/blog">Articles</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <button className={styles.cta}>Subscribe</button>
        </nav>

      </div>
    </header>
  );
}
