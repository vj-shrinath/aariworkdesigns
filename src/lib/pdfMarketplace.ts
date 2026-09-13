import { supabase } from './supabase';

export interface PdfMarketplaceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  price_inr: number;
  is_free_for_vip: boolean;
  clean_file_url?: string;
  watermarked_file_url?: string;
  preview_images: string[];
  page_count: number;
  download_count: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface PdfPurchaseRecord {
  id: string;
  user_id: string;
  email: string;
  pdf_id: string;
  txnid: string;
  amount_paid: number;
  payment_status: string;
  created_at: string;
}

export const CATEGORIES = [
  'All Designs',
  'Bridal Neck',
  'Sleeve Designs',
  'Elbow Sleeve',
  'Full Length Sleeve',
  'Short Sleeve',
  'Floral Tracing',
  'Peacock Motifs',
  'Saree Border',
  'Heavy Embroidery',
  'Simple Tracing'
] as const;

/**
 * Fetch published PDF marketplace listings
 */
export async function getMarketplacePdfs(category?: string, searchQuery?: string): Promise<PdfMarketplaceItem[]> {
  try {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams();
      if (category && category !== 'All Designs') params.append('category', category);
      if (searchQuery && searchQuery.trim()) params.append('search', searchQuery.trim());

      const res = await fetch(`/api/pdf/catalog?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        return data.items || [];
      }
    }

    let query = supabase
      .from('pdf_marketplace')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false });

    if (category && category !== 'All Designs') {
      query = query.eq('category', category);
    }

    if (searchQuery && searchQuery.trim()) {
      query = query.ilike('title', `%${searchQuery.trim()}%`);
    }

    const { data, error } = await query;
    if (error) {
      console.warn('Supabase query error:', error.message);
      return [];
    }
    return data || [];
  } catch (err) {
    console.error('Error fetching marketplace PDFs:', err);
    return [];
  }
}

/**
 * Check if a user (or email) has purchased a specific PDF or has an active VIP subscription
 */
export async function checkUserPdfAccess(pdfId: string, email?: string, userId?: string): Promise<{ hasAccess: boolean; isVip: boolean; isPurchased: boolean }> {
  try {
    if (!email && !userId) {
      return { hasAccess: false, isVip: false, isPurchased: false };
    }

    // 1. Check VIP Subscription status
    let isVip = false;
    if (userId || email) {
      const { data: subData } = await supabase
        .from('subscriptions')
        .select('status, expires_at')
        .or(`user_id.eq.${userId || ''},email.eq.${email || ''}`)
        .eq('status', 'active')
        .maybeSingle();

      if (subData && new Date(subData.expires_at) > new Date()) {
        isVip = true;
      }
    }

    // Check if the item is free for VIP
    const { data: itemData } = await supabase
      .from('pdf_marketplace')
      .select('is_free_for_vip')
      .eq('id', pdfId)
      .single();

    if (isVip && itemData?.is_free_for_vip) {
      return { hasAccess: true, isVip: true, isPurchased: false };
    }

    // 2. Check direct purchase record
    let isPurchased = false;
    if (email || userId) {
      const { data: purchaseData } = await supabase
        .from('pdf_purchases')
        .select('id')
        .eq('pdf_id', pdfId)
        .eq('payment_status', 'PAID')
        .or(`email.eq.${email || ''},user_id.eq.${userId || ''}`)
        .maybeSingle();

      if (purchaseData) {
        isPurchased = true;
      }
    }

    return {
      hasAccess: isVip || isPurchased,
      isVip,
      isPurchased,
    };
  } catch (err) {
    console.error('Error checking PDF access:', err);
    return { hasAccess: false, isVip: false, isPurchased: false };
  }
}
