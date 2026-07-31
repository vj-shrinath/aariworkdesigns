import { createClient } from '@supabase/supabase-js';

const configuredUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const configuredKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();

export const isSupabaseConfigured = Boolean(configuredUrl && configuredKey);

if (!isSupabaseConfigured) {
  console.warn('Supabase configuration is missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.');
}

// Keep static generation from crashing when deployment variables have not yet
// been configured. Auth remains disabled until the real values are supplied.
export const supabase = createClient(
  configuredUrl || 'https://supabase-config-missing.invalid',
  configuredKey || 'supabase-config-missing'
);
