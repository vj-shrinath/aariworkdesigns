'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './TraceSEOContent.module.css';
import { useTranslation } from '@/context/LanguageContext';

export default function HomeSEOContent() {
  const { t, locale } = useTranslation();

  return (
    <div className={styles.seoWrapper} style={{ marginTop: '2rem' }}>
      <div className={styles.divider} aria-hidden="true" />
      
      <section className={styles.section} aria-labelledby="about-aari-tracing">
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div>
              <h2 id="about-aari-tracing" className={styles.sectionHeading}>
                The Art of <span className={`text-gradient ${styles.accentUnderline}`}>Aari Embroidery</span>
              </h2>
              <p className={styles.sectionPara}>
                Aari embroidery, also known as Maggam work, is a timeless Indian art form that uses a pen-like needle topped with a tiny hook. This delicate needlepoint technique creates highly intricate, jewelry-like patterns by meticulously looping threads, beads, zardozi, and kundan stones through fabric stretching across a wooden cot.
              </p>
              <p className={styles.sectionPara}>
                For centuries, artisans relied on physical carbon paper, pin-pricking, and chalk dust to transfer complex paper blueprints onto luxurious fabrics like raw silk, georgette, and organza. A single mistake during tracing could ruin an expensive bridal blouse before the first stitch was even sewn. 
              </p>
              <p className={styles.sectionPara}>
                Today, our <strong>Aari Tracing Studio</strong> bridges traditional beadwork with modern digital precision. By transforming your mobile device or tablet into a brilliant tracing lightbox, you can effortlessly transfer digital patterns directly to your garment.
              </p>
            </div>
            
            <div>
              <p className={styles.sectionPara} style={{ marginBottom: '0.5rem' }}>
                Why modern designers use digital tracing:
              </p>
              <ul className={styles.featureList} role="list">
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon} aria-hidden="true">✓</span>
                  <span><strong>Zero Paper Waste:</strong> Eliminate the need for printers and one-use carbon sheets.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon} aria-hidden="true">✓</span>
                  <span><strong>Perfect Proportions:</strong> Digitally zoom and rotate to fit necklines, sleeves, and bodices precisely.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon} aria-hidden="true">✓</span>
                  <span><strong>Instant Setup:</strong> Lock the screen, place the georgette, and trace in minutes.</span>
                </li>
                <li className={styles.featureItem}>
                  <span className={styles.featureIcon} aria-hidden="true">✓</span>
                  <span><strong>Reusable Vectors:</strong> Use our gallery designs infinitely across multiple projects.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="mastering-materials" style={{ background: 'radial-gradient(ellipse at bottom right, rgba(45,5,5,0.35) 0%, transparent 60%)' }}>
        <div className={styles.container}>
          <h2 id="mastering-materials" className={styles.sectionHeading}>
            Mastering Tracing <span className="text-gradient">Fabrics & Materials</span>
          </h2>
          <p className={styles.sectionSubheading}>
            Getting a crystal-clear transfer relies heavily on the fabric you choose and the markers you use. Here is what industry experts recommend.
          </p>

          <div className={styles.benefitsGrid} role="list">
            <article className={styles.benefitCard} role="listitem">
              <span className={styles.benefitEmoji} aria-hidden="true">✂️</span>
              <h3>Ideal Fabrics</h3>
              <p>Transparent and lightweight materials inherently allow the most backlight through. Chiffon, soft net, georgette, and thin organza are the absolute best choices for direct-screen tracing.</p>
            </article>
            <article className={styles.benefitCard} role="listitem">
              <span className={styles.benefitEmoji} aria-hidden="true">👗</span>
              <h3>Working with Silk</h3>
              <p>While raw silk and taffeta are thicker, pushing your device brightness to maximum usually provides enough contrast. Try to trace in a dimly lit room to enhance screen visibility.</p>
            </article>
            <article className={styles.benefitCard} role="listitem">
              <span className={styles.benefitEmoji} aria-hidden="true">✒️</span>
              <h3>Washable Markers</h3>
              <p>Always use water-soluble or heat-erasable fabric pens. These glide softly over screens without scratching and vanish completely once ironed or faintly wiped with a damp cloth.</p>
            </article>
            <article className={styles.benefitCard} role="listitem">
              <span className={styles.benefitEmoji} aria-hidden="true">🔒</span>
              <h3>Screen Safety</h3>
              <p>Ensure your screen is locked using our interface to prevent accidental zooms. Avoid pressing down heavily; the marker should only kiss the fabric surface.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.linksSection} aria-labelledby="start-learning">
        <div className={styles.container}>
          <h2 id="start-learning" className={styles.sectionHeading}>
            Continue Your <span className="text-gradient">Aari Journey</span>
          </h2>
          <p className={styles.sectionSubheading}>
            Whether you are tracing bridal peacocks or simple mango motifs, we have the resources to help you create stunning handmade apparel.
          </p>

          <nav className={styles.linksGrid} aria-label="Educational Resources">
            <Link href={`/${locale}/blog`} className={styles.internalLink}>
              Read Our Step-by-Step Tutorials
              <span className={styles.internalLinkArrow} aria-hidden="true">→</span>
            </Link>
            <Link href={`/${locale}/gallery`} className={styles.internalLink}>
              Download Tracing Blueprints
              <span className={styles.internalLinkArrow} aria-hidden="true">→</span>
            </Link>
            <Link href={`/${locale}/trace`} className={styles.internalLink}>
              Open the Lightbox Studio
              <span className={styles.internalLinkArrow} aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      </section>
    </div>
  );
}
