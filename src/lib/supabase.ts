import { createClient } from '@supabase/supabase-js';

const DEFAULT_SUPABASE_URL = 'https://mnrfwgtgrajbtwzqtxss.supabase.co';
const DEFAULT_SUPABASE_KEY = 'sb_publishable_nJYqsFTLRUDC0nGtsqHM0Q_eNvF_niV';

const configuredUrl = (
  process.env.NEXT_PUBLIC_SUPABASE_URL || DEFAULT_SUPABASE_URL
)?.trim();

const configuredKey = (
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  DEFAULT_SUPABASE_KEY
)?.trim();

export const isSupabaseConfigured = Boolean(
  configuredUrl &&
  configuredKey &&
  !configuredUrl.includes('supabase-config-missing')
);

export const supabase = createClient(
  configuredUrl,
  configuredKey
);
