import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import styles from './AmazonAffiliateCard.module.css';
import { getOptimizedAmazonQuery } from '@/lib/gemini';
import AmazonAffiliateCard from './AmazonAffiliateCard'; // Fallback

interface LiveAmazonAffiliateCardProps {
  semanticKeywords: string[];
  categories: string[];
  fallbackKeyword?: string;
}

export default async function LiveAmazonAffiliateCard({ 
  semanticKeywords = [], 
  categories = [], 
  fallbackKeyword = 'aari work materials'
}: LiveAmazonAffiliateCardProps) {
  
  // 1. Ask Gemini to determine the absolute single best Amazon Search Query
  const allKeywords = [...semanticKeywords, ...categories].filter(Boolean);
  const optimizedQuery = await getOptimizedAmazonQuery(allKeywords, fallbackKeyword);
  const affiliateTag = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG || 'YOUR_AMAZON_TAG-21';

  // 2. Build the Affiliate URL
  const productUrl = new URL('https://www.amazon.in/s');
  productUrl.searchParams.set('k', optimizedQuery);
  productUrl.searchParams.set('tag', affiliateTag);
  const finalUrl = productUrl.toString();

  return (
    <div className={styles.affiliateCardWrapper}>
      <div className={styles.badge}>
        ✨ AI Recommended
      </div>
      
      <div className={styles.affiliateCard}>
        <div className={styles.imageContainer} style={{ background: '#fff' }}>
          <Image
            src={`https://image.pollinations.ai/prompt/${encodeURIComponent(optimizedQuery + ' high quality craft supplies flatlay photo')}?width=400&height=400&nologo=true`}
            alt={optimizedQuery}
            width={120}
            height={120}
            className={styles.productImage}
            unoptimized
          />
        </div>
        
        <div className={styles.productInfo}>
          <h3 className={styles.productTitle} style={{ textTransform: 'capitalize' }}>
            {optimizedQuery}
          </h3>
          
          <span className={styles.priceEstimate}>
            Best Prices Online
          </span>

          <a 
            href={finalUrl}
            target="_blank" 
            rel="nofollow noopener sponsored"
            className={styles.buyButton}
          >
            Search on Amazon.in ↗
          </a>
        </div>
      </div>
    </div>
  );
}
