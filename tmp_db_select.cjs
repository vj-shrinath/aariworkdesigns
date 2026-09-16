const { createClient } = require('@supabase/supabase-js');
const s = createClient('https://mnrfwgtgrajbtwzqtxss.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ucmZ3Z3RncmFqYnR3enF0eHNzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODY2MDQ4MCwiZXhwIjoyMDk0MjM2NDgwfQ.j2Tcb8y7VU8uirJkChjhhvdBqNFD5CIA8QyHZ713iVI');
async function testOr() {
  const { data, error } = await s.from('pdf_purchases')
        .select('*')
        .eq('payment_status', 'PAID')
        .or(`email.eq.mail.vijayshrinath@gmail.com`); // test with only email
  console.dir({data, error}, {depth: null});
}
testOr();
