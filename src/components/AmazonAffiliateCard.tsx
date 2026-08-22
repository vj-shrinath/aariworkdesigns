import React from 'react';
import Image from 'next/image';
import { AMAZON_INDIA_PRODUCTS, AmazonProduct } from '@/data/amazonIndiaProducts';
import styles from './AmazonAffiliateCard.module.css';

interface AmazonAffiliateCardProps {
  semanticKeywords?: string[];
  categories?: string[];
  fallbackKeyword?: string;
  affiliateTag?: string; // e.g., 'aariwork-21'
}

// Very basic term frequency scorer
function getDynamicAffiliateProduct(keywords: string[]): AmazonProduct {
  let highestScore = -1;
  let bestMatch = AMAZON_INDIA_PRODUCTS[0]; // fallback to first item

  for (const product of AMAZON_INDIA_PRODUCTS) {
    let score = 0;
    
    // Check against each post keyword
    for (const kw of keywords) {
      const lowerKw = kw.toLowerCase();
      // Check if any product matchKeyword is included in the post keyword (or vice versa)
      for (const matchKw of product.matchKeywords) {
        if (lowerKw.includes(matchKw.toLowerCase()) || matchKw.toLowerCase().includes(lowerKw)) {
          score += 2;
        }
      }
    }

    // Tie-breaker using priority
    const finalScore = score + (product.priority * 0.1); 

    if (finalScore > highestScore && score > 0) {
      highestScore = finalScore;
      bestMatch = product;
    }
  }

  return bestMatch;
}

export default function AmazonAffiliateCard({ 
  semanticKeywords = [], 
  categories = [], 
  fallbackKeyword = 'aari work materials',
  affiliateTag = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG || 'YOUR_AMAZON_TAG-21' 
}: AmazonAffiliateCardProps) {

  // Combine keywords for the scoring engine
  const searchTerms = [...semanticKeywords, ...categories].filter(Boolean);
  
  const recommendedProduct = getDynamicAffiliateProduct(searchTerms);
  
  if (!recommendedProduct) return null;

  // Build the final Affiliate URL
  const productUrl = new URL(recommendedProduct.amazonUrl);
  productUrl.searchParams.set('tag', affiliateTag);
  const finalAffiliateUrl = productUrl.toString();

  return (
    <div className={styles.affiliateCardWrapper}>
      <div className={styles.badge}>👍 Recommended for this Tutorial</div>
      <div className={styles.affiliateCard}>
        <div className={styles.imageContainer}>
          <Image 
            src={recommendedProduct.imageUrl}
            alt={recommendedProduct.title}
            width={120}
            height={120}
            className={styles.productImage}
            unoptimized
          />
        </div>
        
        <div className={styles.productInfo}>
          <h4 className={styles.productTitle}>{recommendedProduct.title}</h4>
          <span className={styles.priceEstimate}>Est. {recommendedProduct.priceEstimate}</span>
          
          <a 
            href={finalAffiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buyButton}
          >
            Check Price on Amazon.in
          </a>
          <span className={styles.disclaimer}>*We may earn a commission if you purchase through this link.</span>
        </div>
      </div>
    </div>
  );
}
