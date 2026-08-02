'use client';

import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import styles from './PostComponents.module.css';

export function AuthorBox({ author }: { author: any }) {
  if (!author) return null;

  return (
    <div className={styles.authorBox}>
      <div className={styles.authorImageWrapper}>
        {author.image && (
          <Image
            src={urlFor(author.image).width(200).height(200).url()}
            alt={author.name}
            width={80}
            height={80}
            className={styles.authorImage}
          />
        )}
      </div>
      <div className={styles.authorContent}>
        <div className={styles.authorLabel}>Written By</div>
        <h4 className={styles.authorName}>{author.name}</h4>
        <p className={styles.authorBio}>{author.bio || "Aari design specialist and embroidery enthusiast sharing the art of traditional craftsmanship."}</p>
        <div className={styles.authorMeta}>
          <span>Expertise: Aari Work, Bridal Designs</span>
        </div>
      </div>
    </div>
  );
}

export function KeyTakeaways({ items, title = 'Key Takeaways' }: { items: string[]; title?: string }) {
  if (!items || items.length === 0) return null;

  return (
    <div className={styles.takeaways}>
      <div className={styles.takeawaysHeader}>
        <span className={styles.takeawaysIcon}>✨</span>
        <h3 className={styles.takeawaysTitle}>{title}</h3>
      </div>
      <ul className={styles.takeawaysList}>
        {items.map((item, index) => (
          <li key={index} className={styles.takeawaysItem}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function FaqSection({ faqs }: { faqs: any[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className={styles.faq}>
      <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}>
            <button 
              className={styles.faqQuestion} 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span className={styles.chevron}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </span>
            </button>
            <div className={styles.faqAnswer}>
              <div className={styles.answerContent}>{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
