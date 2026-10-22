'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useSubscription } from '@/context/SubscriptionContext';

export default function AdsterraPopunder() {
  const { isSubscribed } = useSubscription();
  const pathname = usePathname();

  // 1. Never show intrusive popunder ads to paid / VIP subscribers
  if (isSubscribed) {
    return null;
  }

  // 2. Prevent popunders on sensitive administrative or payment verification pages
  if (pathname && (pathname.includes('/admin') || pathname.includes('/payment-status'))) {
    return null;
  }

  return (
    <Script
      id="adsterra-popunder"
      src="https://pl31964771.profitableratecpmnetwork.com/24/12/63/241263cab0c73f6cebe52b6c78811187.js"
      strategy="afterInteractive"
    />
  );
}
