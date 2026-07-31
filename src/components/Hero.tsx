'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import { useTranslation } from '@/context/LanguageContext';

export default function Hero() {
  const { t, locale } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <span className={`${styles.badge} animate-fade-in`}>
            {t('hero.badge', 'Web Tracing Tool Now Live')}
          </span>
          <h1 className={`${styles.title} animate-fade-in`}>
            {t('hero.title1', 'Trace Your ')}
            <span className="text-gradient">{t('hero.titleHighlight', 'Imagination')}</span>
            {t('hero.title2', ' Directly on Cloth')}
          </h1>
          <p 
            className={`${styles.description} animate-fade-in`}
            dangerouslySetInnerHTML={{ 
              __html: t('hero.description', 'Our full Android app is coming soon, but we couldn\'t wait to see you create. Our <strong>Web Tracing Studio</strong> is now live—pick any design, lock your screen, and start tracing today.') 
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
            <Link href={`/${locale}/trace`} className={styles.primaryBtn}>
              {t('hero.primaryBtn', 'Start Tracing Now')}
            </Link>
            <button className={styles.secondaryBtn}>
              {t('hero.secondaryBtn', 'App Waitlist')}
            </button>
          </div>
        </div>
        <div className={`${styles.mockupWrapper} animate-fade-in`}>
          <Image 
            src="/app-mockup.webp" 
            alt="Aari App Mockup" 
            width={500} 
            height={800} 
            className={`${styles.mockup} floating`}
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 500px"
            priority
          />
        </div>
      </div>
      <div className={styles.glow} />
    </section>
  );
}
