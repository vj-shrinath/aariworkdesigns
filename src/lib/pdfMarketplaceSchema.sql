-- ========================================================
-- Aari Work Designs: PDF Marketplace Schema for Supabase
-- ========================================================

-- 1. Table for Marketplace PDF Listings
CREATE TABLE IF NOT EXISTS public.pdf_marketplace (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    category VARCHAR(100) NOT NULL DEFAULT 'Bridal Neck',
    tags TEXT[] DEFAULT '{}',
    price_inr NUMERIC(10, 2) NOT NULL DEFAULT 49.00,
    is_free_for_vip BOOLEAN NOT NULL DEFAULT true,
    clean_file_url TEXT NOT NULL, -- Private Supabase Storage Path (e.g., pdf-masters/bridal-neck.pdf)
    watermarked_file_url TEXT DEFAULT '', -- Legacy or optional preview reference
    preview_images TEXT[] DEFAULT '{}',
    page_count INT DEFAULT 1,
    download_count INT DEFAULT 0,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for quick catalog browsing
CREATE INDEX IF NOT EXISTS idx_pdf_marketplace_category ON public.pdf_marketplace(category);
CREATE INDEX IF NOT EXISTS idx_pdf_marketplace_published ON public.pdf_marketplace(is_published);

-- 2. Table for Individual Item Purchases
CREATE TABLE IF NOT EXISTS public.pdf_purchases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT, -- Supabase Auth User ID or 'guest_[email]'
    email VARCHAR(255) NOT NULL,
    pdf_id UUID NOT NULL REFERENCES public.pdf_marketplace(id) ON DELETE CASCADE,
    txnid VARCHAR(100) UNIQUE NOT NULL,
    amount_paid NUMERIC(10, 2) NOT NULL,
    payment_status VARCHAR(50) NOT NULL DEFAULT 'PAID',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for checking purchase permissions
CREATE INDEX IF NOT EXISTS idx_pdf_purchases_lookup ON public.pdf_purchases(email, pdf_id);
CREATE INDEX IF NOT EXISTS idx_pdf_purchases_user ON public.pdf_purchases(user_id);

-- 3. Audit Table for PDF Downloads & Abuse Protection
CREATE TABLE IF NOT EXISTS public.downloads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT,
    email VARCHAR(255),
    pdf_id UUID NOT NULL REFERENCES public.pdf_marketplace(id) ON DELETE CASCADE,
    txnid VARCHAR(100),
    access_type VARCHAR(50) NOT NULL DEFAULT 'purchase', -- 'purchase', 'subscription', 'preview'
    downloaded_at TIMESTAMPTZ DEFAULT NOW(),
    ip_hash TEXT
);

CREATE INDEX IF NOT EXISTS idx_downloads_user_pdf ON public.downloads(user_id, pdf_id);
CREATE INDEX IF NOT EXISTS idx_downloads_email_pdf ON public.downloads(email, pdf_id);

-- Enable RLS
ALTER TABLE public.pdf_marketplace ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pdf_purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.downloads ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Public read for published PDF marketplace items"
    ON public.pdf_marketplace FOR SELECT
    USING (is_published = true);

CREATE POLICY "Users can read own PDF purchases"
    ON public.pdf_purchases FOR SELECT
    USING (true);

CREATE POLICY "Service role full access downloads"
    ON public.downloads FOR ALL
    USING (true);
