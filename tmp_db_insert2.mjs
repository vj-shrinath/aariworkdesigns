const url = "https://mnrfwgtgrajbtwzqtxss.supabase.co/rest/v1/pdf_purchases";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ucmZ3Z3RncmFqYnR3enF0eHNzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODY2MDQ4MCwiZXhwIjoyMDk0MjM2NDgwfQ.j2Tcb8y7VU8uirJkChjhhvdBqNFD5CIA8QyHZ713iVI";

async function doInsert() {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'apikey': key,
        'Authorization': 'Bearer ' + key,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        user_id: null,
        email: "mail.vijayshrinath@gmail.com",
        pdf_id: "",
        txnid: "test_insert_empty",
        amount_paid: 1,
        payment_status: "PAID"
      })
    });
    console.log("Status:", res.status);
    console.log("Body:", await res.text());
  } catch (err) {
    console.error(err);
  }
}
doInsert();
