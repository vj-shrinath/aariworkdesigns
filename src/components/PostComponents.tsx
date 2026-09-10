'use client';

import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import styles from './PostComponents.module.css';

const renderTextContent = (content: any, fallback: string = ''): string => {
  if (!content) return fallback;
  if (typeof content === 'string') return content;
  if (typeof content === 'number') return String(content);

  if (Array.isArray(content)) {
    const extracted = content
      .map((block: any) => {
        if (typeof block === 'string') return block;
        if (block && Array.isArray(block.children)) {
          return block.children.map((c: any) => c?.text || '').join('');
        }
        return '';
      })
      .join(' ')
      .trim();
    return extracted || fallback;
  }

  if (typeof content === 'object' && Array.isArray(content.children)) {
    const extracted = content.children.map((c: any) => c?.text || '').join('').trim();
    return extracted || fallback;
  }

  return fallback;
};

export function AuthorBox({ author }: { author: any }) {
  if (!author) return null;

  const authorImageUrl = author.image?.asset ? urlFor(author.image).width(200).height(200).url() : null;
  const bioText = renderTextContent(author.bio, "Aari design specialist and embroidery enthusiast sharing the art of traditional craftsmanship.");

  return (
    <div className={styles.authorBox}>
      <div className={styles.authorImageWrapper}>
        {authorImageUrl && (
          <Image
            src={authorImageUrl}
            alt={author.name || 'Author'}
            width={80}
            height={80}
            className={styles.authorImage}
          />
        )}
      </div>
      <div className={styles.authorContent}>
        <div className={styles.authorLabel}>Written By</div>
        <h4 className={styles.authorName}>{author.name}</h4>
        <p className={styles.authorBio}>{bioText}</p>
        <div className={styles.authorMeta}>
          <span>Expertise: Aari Work, Bridal Designs</span>
        </div>
      </div>
    </div>
  );
}

export function KeyTakeaways({ items, title = 'Key Takeaways' }: { items: any[]; title?: string }) {
  if (!items || items.length === 0) return null;

  return (
    <div className={styles.takeaways}>
      <div className={styles.takeawaysHeader}>
        <span className={styles.takeawaysIcon}>✨</span>
        <h3 className={styles.takeawaysTitle}>{title}</h3>
      </div>
      <ul className={styles.takeawaysList}>
        {items.map((item, index) => {
          const itemText = renderTextContent(item);
          if (!itemText) return null;
          return <li key={index} className={styles.takeawaysItem}>{itemText}</li>;
        })}
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
        {faqs.map((faq, index) => {
          const questionText = renderTextContent(faq?.question);
          const answerText = renderTextContent(faq?.answer);
          if (!questionText) return null;

          return (
            <div key={index} className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}>
              <button 
                className={styles.faqQuestion} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {questionText}
                <span className={styles.chevron}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </button>
              <div className={styles.faqAnswer}>
                <div className={styles.answerContent}>{answerText}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
