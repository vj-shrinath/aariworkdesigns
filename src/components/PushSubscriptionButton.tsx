'use client';

import { useState, useEffect } from 'react';
import { Bell, BellOff } from 'lucide-react';

export default function PushSubscriptionButton() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && 'PushManager' in window) {
      setIsSupported(true);
      checkSubscription();
    } else {
      setIsLoading(false);
    }
  }, []);

  const checkSubscription = async () => {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      setIsSubscribed(!!subscription);
    } catch (e) {
      console.error('Error checking push subscription', e);
    } finally {
      setIsLoading(false);
    }
  };

  const urlB64ToUint8Array = (base64String: string) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };

  const handleSubscribe = async () => {
    if (isSubscribed) {
      alert('You are already subscribed to notifications! To unsubscribe, use your browser settings.');
      return;
    }

    setIsLoading(true);
    try {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        alert('Notification permission denied.');
        setIsLoading(false);
        return;
      }

      const registration = await navigator.serviceWorker.ready;
       
      const applicationServerKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
      
      if (!applicationServerKey) {
        console.error('VAPID key not configured');
        alert('Push notifications are not configured on the server yet.');
        setIsLoading(false);
        return;
      }

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array(applicationServerKey)
      });

      await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription),
      });

      setIsSubscribed(true);
      alert('Successfully subscribed to Aari Work Designs notifications!');
    } catch (e) {
      console.error('Error subscribing to push notifications', e);
      alert('Could not subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isSupported) return null;

  return (
    <button 
      onClick={handleSubscribe}
      disabled={isLoading || isSubscribed}
      aria-label="Toggle Push Notifications"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 18px',
        background: isSubscribed 
          ? 'rgba(255, 255, 255, 0.05)' 
          : 'var(--accent-gradient, linear-gradient(135deg, #fff1b0 0%, #d4af37 45%, #aa7c11 100%))',
        color: isSubscribed ? 'var(--text-secondary, #e2d7ba)' : '#120406',
        border: isSubscribed 
          ? '1px solid rgba(212, 175, 55, 0.2)' 
          : 'none',
        borderRadius: '9999px',
        cursor: isLoading || isSubscribed ? 'not-allowed' : 'pointer',
        fontWeight: 800,
        fontSize: '13px',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        boxShadow: isSubscribed ? 'none' : '0 4px 15px rgba(212, 175, 55, 0.3)',
        transition: 'all 0.3s ease',
        touchAction: 'manipulation',
        width: 'fit-content'
      }}
    >
      {isSubscribed ? <BellOff size={16} /> : <Bell size={16} />}
      {isLoading 
        ? 'Checking...' 
        : isSubscribed 
          ? 'Notifications Active'
          : 'Enable Notifications'
      }
    </button>
  );
}
