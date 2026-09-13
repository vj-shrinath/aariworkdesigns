import { createClient } from '@supabase/supabase-js';

const DEFAULT_SUPABASE_URL = 'https://mnrfwgtgrajbtwzqtxss.supabase.co';
const DEFAULT_SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ucmZ3Z3RncmFqYnR3enF0eHNzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODY2MDQ4MCwiZXhwIjoyMDk0MjM2NDgwfQ.j2Tcb8y7VU8uirJkChjhhvdBqNFD5CIA8QyHZ713iVI';

const configuredUrl = (
  process.env.NEXT_PUBLIC_SUPABASE_URL || DEFAULT_SUPABASE_URL
)?.trim();

const configuredKey = (
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY &&
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.startsWith('eyJ')
    ? process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    : process.env.SUPABASE_SERVICE_ROLE_KEY || DEFAULT_SUPABASE_KEY
)?.trim();

export const isSupabaseConfigured = Boolean(
  configuredUrl &&
  configuredKey
);

export const supabase = createClient(
  configuredUrl,
  configuredKey
);
