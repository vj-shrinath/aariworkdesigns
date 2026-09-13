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
  return null;
}
