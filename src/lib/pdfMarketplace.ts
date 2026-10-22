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
  clean_file_url?: string; // Private storage path (e.g. pdf-masters/slug.pdf)
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

export interface UserPdfAccessResult {
  hasAccess: boolean;
  isVip: boolean;
  isPurchased: boolean;
  orderId?: string;
  accessType: 'subscription' | 'purchase' | 'none';
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
 * Fetch published PDF marketplace listings from Supabase ONLY
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
      .select('id, title, slug, description, category, tags, price_inr, is_free_for_vip, preview_images, page_count, download_count, is_published, created_at, updated_at')
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
export async function checkUserPdfAccess(pdfId: string, email?: string, userId?: string): Promise<UserPdfAccessResult> {
  try {
    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanUserId = (userId || '').trim();

    if (!cleanEmail && !cleanUserId) {
      return { hasAccess: false, isVip: false, isPurchased: false, accessType: 'none' };
    }

    // 1. Check VIP Subscription status
    let isVip = false;
    const subFilters = [];
    if (cleanUserId) subFilters.push(`user_id.eq.${cleanUserId}`);
    if (cleanEmail) {
      subFilters.push(`email.eq.${cleanEmail}`);
      subFilters.push(`user_id.eq.guest_${cleanEmail}`);
    }

    if (subFilters.length > 0) {
      const { data: subData } = await supabase
        .from('subscriptions')
        .select('status, expires_at')
        .or(subFilters.join(','))
        .eq('status', 'active')
        .maybeSingle();

      if (subData && new Date(subData.expires_at) > new Date()) {
        isVip = true;
      }
    }

    // Check if the item is free for VIP
    let itemData: any = null;
    try {
      const { data } = await supabase
        .from('pdf_marketplace')
        .select('is_free_for_vip')
        .eq('id', pdfId)
        .maybeSingle();
      itemData = data;
    } catch {
      itemData = { is_free_for_vip: true };
    }

    const isFreeForVip = itemData ? itemData.is_free_for_vip : true;

    if (isVip && isFreeForVip) {
      return { hasAccess: true, isVip: true, isPurchased: false, accessType: 'subscription' };
    }

    // 2. Check direct purchase record
    let isPurchased = false;
    let orderId = '';
    const purchaseFilters = [];
    if (cleanUserId) purchaseFilters.push(`user_id.eq.${cleanUserId}`);
    if (cleanEmail) {
      purchaseFilters.push(`email.eq.${cleanEmail}`);
      purchaseFilters.push(`user_id.eq.guest_${cleanEmail}`);
    }

    if (purchaseFilters.length > 0) {
      const { data: purchaseData } = await supabase
        .from('pdf_purchases')
        .select('id, txnid')
        .eq('pdf_id', pdfId)
        .eq('payment_status', 'PAID')
        .or(purchaseFilters.join(','))
        .maybeSingle();

      if (purchaseData) {
        isPurchased = true;
        orderId = purchaseData.txnid || purchaseData.id;
      }
    }

    if (isPurchased) {
      return { hasAccess: true, isVip, isPurchased: true, orderId, accessType: 'purchase' };
    }

    return {
      hasAccess: isVip,
      isVip,
      isPurchased: false,
      accessType: isVip ? 'subscription' : 'none',
    };
  } catch (err) {
    console.error('Error checking PDF access:', err);
    return { hasAccess: false, isVip: false, isPurchased: false, accessType: 'none' };
  }
}
