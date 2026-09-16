const url = "https://mnrfwgtgrajbtwzqtxss.supabase.co/rest/v1/pdf_purchases";
const key = "sb_publishable_nJYqsFTLRUDC0nGtsqHM0Q_eNvF_niV";

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
        user_id: "e812b7a9-9999-9999-9999-999999999999",
        email: "test_anon@gmail.com",
        pdf_id: "71461551-4ef2-434c-a15b-9968c90650ff",
        txnid: "test_insert_anon",
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
