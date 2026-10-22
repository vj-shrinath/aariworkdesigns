'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useSubscription } from '@/context/SubscriptionContext';

export default function AdsterraSocialBar() {
  const { isSubscribed } = useSubscription();
  const pathname = usePathname();

  // 1. Never show ads to paid / VIP subscribers
  if (isSubscribed) {
    return null;
  }

  // 2. Prevent social bar from cluttering admin dashboards or checkout/payment verification pages
  if (pathname && (pathname.includes('/admin') || pathname.includes('/payment-status'))) {
    return null;
  }

  return (
    <Script
      id="adsterra-socialbar"
      src="https://bauval.org/14/ba8700d390d8d0477e69b3c500a4e41c"
      strategy="afterInteractive"
      data-cfasync="false"
    />
  );
}
