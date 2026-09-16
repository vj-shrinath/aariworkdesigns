async function run() {
  const { createClient } = require('@supabase/supabase-js');
  const s = createClient('https://mnrfwgtgrajbtwzqtxss.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ucmZ3Z3RncmFqYnR3enF0eHNzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODY2MDQ4MCwiZXhwIjoyMDk0MjM2NDgwfQ.j2Tcb8y7VU8uirJkChjhhvdBqNFD5CIA8QyHZ713iVI');
  const res = await s.from('pdf_purchases').insert({
    user_id: 'e812b7a9-9999-9999-9999-999999999999', // dummy uuid
    email: 'test@example.com',
    pdf_id: '71461551-4ef2-434c-a15b-9968c90650ff',
    txnid: 'test1234',
    amount_paid: 99,
    payment_status: 'PAID'
  });
  console.dir(res, {depth: null});
}
run();
