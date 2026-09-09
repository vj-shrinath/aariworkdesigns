import { createClient } from '@supabase/supabase-js';

const configuredUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const configuredKey = (
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)?.trim();

export const isSupabaseConfigured = Boolean(
  configuredUrl &&
  configuredKey &&
  !configuredUrl.includes('supabase-config-missing')
);

if (!isSupabaseConfigured) {
  console.warn(
    'Supabase configuration is missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY (or NEXT_PUBLIC_SUPABASE_ANON_KEY).'
  );
}

export const supabase = createClient(
  configuredUrl || 'https://supabase-config-missing.invalid',
  configuredKey || 'supabase-config-missing'
);
