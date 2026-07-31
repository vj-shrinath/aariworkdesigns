import Link from 'next/link';
import styles from './CompliancePage.module.css';

export type ComplianceSection = { heading: string; paragraphs?: string[]; bullets?: string[] };

export default function CompliancePage({ locale, eyebrow, title, intro, sections, children }: {
  locale: string; eyebrow?: string; title: string; intro: string; sections?: ComplianceSection[]; children?: React.ReactNode;
}) {
  return <main className={styles.page}><div className="container"><div className={styles.content}>
    {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
    <h1 className={`${styles.title} text-gradient`}>{title}</h1>
    <p className={styles.intro}>{intro}</p>
    {children}
    {sections?.map((section) => <section className={styles.section} key={section.heading}>
      <h2>{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
    </section>)}
    <p style={{ marginTop: '3rem', color: 'var(--text-muted)' }}>Questions? <Link className={styles.link} href={`/${locale}/contact`}>Contact AARI Work Designs support</Link>.</p>
  </div></div></main>;
}

export { styles };
