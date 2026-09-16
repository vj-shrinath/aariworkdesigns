const url = "https://mnrfwgtgrajbtwzqtxss.supabase.co/rest/v1/pdf_purchases?select=*&payment_status=eq.PAID&or=(email.eq.mail.vijayshrinath@gmail.com)";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ucmZ3Z3RncmFqYnR3enF0eHNzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODY2MDQ4MCwiZXhwIjoyMDk0MjM2NDgwfQ.j2Tcb8y7VU8uirJkChjhhvdBqNFD5CIA8QyHZ713iVI";

async function doSelect() {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'apikey': key,
        'Authorization': 'Bearer ' + key,
      },
    });
    console.log("Status:", res.status);
    console.log("Body:", await res.text());
  } catch (err) {
    console.error(err);
  }
}
doSelect();
