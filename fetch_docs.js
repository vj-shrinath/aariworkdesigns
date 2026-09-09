const https = require('https');
https.get('https://docs.payu.in/docs/custom-checkout-merchant-hosted', (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => {
    const match = data.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
    if (match) console.log(match[0].replace(/<[^>]+>/g, ' ').substring(0, 3000));
    else console.log('No article found');
  });
});
