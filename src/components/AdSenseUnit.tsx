'use client';

import { useEffect, useRef } from 'react';
import { useSubscription } from '@/context/SubscriptionContext';

interface AdSenseUnitProps {
  slotId: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  isResponsive?: boolean;
  style?: React.CSSProperties;
}

export default function AdSenseUnit({ 
  slotId, 
  format = 'auto', 
  isResponsive = true,
  style 
}: AdSenseUnitProps) {
  const { isSubscribed } = useSubscription();
  const adRef = useRef<HTMLModElement>(null);
  const adPushedRef = useRef(false);

  useEffect(() => {
    // If user is a premium member, ads are disabled.
    if (isSubscribed) return;

    if (typeof window !== 'undefined' && !adPushedRef.current) {
      try {
        const pushAd = () => {
          // Only push if the google object is available
          if ((window as any).adsbygoogle) {
             (window as any).adsbygoogle.push({});
             adPushedRef.current = true;
          }
        };
        
        // Try pushing after a tiny delay to ensure adsbygoogle script is loaded
        setTimeout(pushAd, 300);
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, [isSubscribed]);

  if (isSubscribed) return null; // Premium members don't see ads

  return (
    <div className="adsense-container" style={{ 
       margin: '1.5rem 0', 
       textAlign: 'center',
       minHeight: '90px',
       ...style 
    }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6627399718408055"
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={isResponsive ? "true" : "false"}
      />
    </div>
  );
}
