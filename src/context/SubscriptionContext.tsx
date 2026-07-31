'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';

interface SubscriptionContextType {
  isSubscribed: boolean;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  setSubscriptionStatus: (status: boolean, email?: string) => void;
  subscriberEmail: string;
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
  checkSubscription: (userId: string, email: string) => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const checkSubscription = async (userId: string, email: string) => {
    try {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('status, expires_at')
        .eq('user_id', userId)
        .maybeSingle();

      if (error) {
        console.error('Error fetching subscription:', error);
        return;
      }

      if (data && data.status === 'active') {
        if (data.expires_at) {
          const isExpired = new Date(data.expires_at).getTime() < Date.now();
          if (isExpired) {
            setIsSubscribed(false);
            return;
          }
        }
        setIsSubscribed(true);
        localStorage.setItem('aari_premium_status', 'active');
        localStorage.setItem('aari_sub_email', email);
      } else {
        setIsSubscribed(false);
      }
    } catch (err) {
      console.error('Subscription check failed:', err);
    }
  };

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    // 1. Initial Local Storage Load (for quick UI load)
    const localStatus = localStorage.getItem('aari_premium_status');
    const localEmail = localStorage.getItem('aari_sub_email') || '';
    if (localStatus === 'active') {
      setIsSubscribed(true);
      setSubscriberEmail(localEmail);
    }

    // 2. Auth Context State Listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      const authUser = session?.user || null;
      setUser(authUser);
      if (authUser) {
        setSubscriberEmail(authUser.email || '');
        await checkSubscription(authUser.id, authUser.email || '');
      } else {
        // If logged out, reset user to guest and keep only local storage if they paid as guest
        const activeLocalStatus = localStorage.getItem('aari_premium_status');
        const activeLocalEmail = localStorage.getItem('aari_sub_email') || '';
        if (activeLocalStatus === 'active') {
          setIsSubscribed(true);
          setSubscriberEmail(activeLocalEmail);
        } else {
          setIsSubscribed(false);
          setSubscriberEmail('');
        }
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const setSubscriptionStatus = (status: boolean, email = '') => {
    setIsSubscribed(status);
    setSubscriberEmail(email);
    if (status) {
      localStorage.setItem('aari_premium_status', 'active');
      localStorage.setItem('aari_sub_email', email);
    } else {
      localStorage.removeItem('aari_premium_status');
      localStorage.removeItem('aari_sub_email');
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setSubscriptionStatus(false, '');
  };

  return (
    <SubscriptionContext.Provider
      value={{
        isSubscribed,
        isModalOpen,
        openModal,
        closeModal,
        setSubscriptionStatus,
        subscriberEmail,
        user,
        loading,
        logout,
        checkSubscription,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};
