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
      const cleanEmail = email.trim().toLowerCase();
      const filters = [];
      if (userId) filters.push(`user_id.eq.${userId}`);
      if (cleanEmail) {
        filters.push(`email.eq.${cleanEmail}`);
        filters.push(`user_id.eq.guest_${cleanEmail}`);
      }

      if (filters.length === 0) return;

      const { data, error } = await supabase
        .from('subscriptions')
        .select('status, expires_at, plan')
        .or(filters.join(','))
        .eq('status', 'active')
        .order('expires_at', { ascending: false })
        .limit(1)
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
        if (cleanEmail) {
          localStorage.setItem('aari_sub_email', cleanEmail);
        }
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

    // 2. Fetch active session immediately
    const initSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUser(session.user);
          setSubscriberEmail(session.user.email || '');
          await checkSubscription(session.user.id, session.user.email || '');
        }
      } catch (err) {
        console.error('Error fetching initial session:', err);
      } finally {
        setLoading(false);
      }
    };
    initSession();

    // 3. Auth Context State Listener (Google, Email/Password, Sessions)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      const authUser = session?.user || null;
      setUser(authUser);
      if (authUser) {
        setSubscriberEmail(authUser.email || '');
        await checkSubscription(authUser.id, authUser.email || '');
      } else {
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

  // 4. Auto-open modal after Google/OAuth redirect if openSubModal=true
  useEffect(() => {
    if (typeof window !== 'undefined' && !loading) {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('openSubModal') === 'true') {
        if (!isSubscribed) {
          setIsModalOpen(true);
        }
        // Clean up URL parameter cleanly without reloading page
        urlParams.delete('openSubModal');
        const newSearch = urlParams.toString();
        const newUrl = window.location.pathname + (newSearch ? `?${newSearch}` : '') + window.location.hash;
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, [loading, isSubscribed]);

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
    setUser(null);
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
