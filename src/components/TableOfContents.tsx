'use client';

import { useState, useEffect } from 'react';
import styles from './TableOfContents.module.css';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -80% 0%' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className={`${styles.toc} ${isOpen ? styles.open : ''}`}>
      <button className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <h4 className={styles.title}>Table of Contents</h4>
        <span className={styles.chevron}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </span>
      </button>
      <ul className={styles.list}>
        {headings.map((heading) => (
          <li 
            key={heading.id} 
            className={`${styles.item} ${activeId === heading.id ? styles.active : ''}`}
            style={{ paddingLeft: `${(heading.level - 2) * 1.25}rem` }}
          >
            <a href={`#${heading.id}`} onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
              if (window.innerWidth < 1024) setIsOpen(false);
            }}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
