// Edge-compatible, pure WebCrypto AWS Signature V4 generator for Amazon PAAPI
export interface AmazonPAAPIProduct {
  asin: string;
  title: string;
  price: string;
  imageUrl: string;
  url: string;
}

const AWSService = 'ProductAdvertisingAPI';
const Host = 'webservices.amazon.in';
const Region = 'eu-west-1'; // PAAPI for IN uses eu-west-1

async function sha256(message: string | ArrayBuffer): Promise<ArrayBuffer> {
  const encoder = new TextEncoder();
  const data = typeof message === 'string' ? encoder.encode(message) : message;
  return crypto.subtle.digest('SHA-256', data);
}

async function hmac(key: ArrayBuffer | Uint8Array, message: string): Promise<ArrayBuffer> {
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  return crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(message));
}

function toHex(buffer: ArrayBuffer): string {
  const hashArray = Array.from(new Uint8Array(buffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function getSignatureKey(key: string, dateStamp: string, regionName: string, serviceName: string): Promise<ArrayBuffer> {
  const kDate = await hmac(new TextEncoder().encode('AWS4' + key), dateStamp);
  const kRegion = await hmac(kDate, regionName);
  const kService = await hmac(kRegion, serviceName);
  const kSigning = await hmac(kService, 'aws4_request');
  return kSigning;
}

export async function fetchLiveAmazonProducts(keyword: string): Promise<AmazonPAAPIProduct | null> {
  const accessKey = process.env.PAAPI_ACCESS_KEY;
  const secretKey = process.env.PAAPI_SECRET_KEY;
  const partnerTag = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG || 'YOUR_AMAZON_TAG-21';

  if (!accessKey || !secretKey) {
    console.error('PAAPI credentials missing');
    return null;
  }

  const endpoint = `https://${Host}/paapi5/searchitems`;
  const uri = '/paapi5/searchitems';

  const amzTarget = 'com.amazon.paapi5.v1.ProductAdvertisingAPIv1.SearchItems';
  const currentDate = new Date();
  const amzDate = currentDate.toISOString().replace(/[:\-]|\.\d{3}/g, '');
  const dateStamp = amzDate.substring(0, 8);

  const payload = {
    Keywords: keyword,
    PartnerTag: partnerTag,
    PartnerType: 'Associates',
    Marketplace: 'www.amazon.in',
    SearchIndex: 'All',
    ItemCount: 1,
    Resources: [
      'Images.Primary.Large',
      'ItemInfo.Title',
      'Offers.Listings.Price'
    ]
  };
  const payloadString = JSON.stringify(payload);

  // Task 1: Create a canonical request
  const canonicalHeaders = `content-encoding:amz-1.0\ncontent-type:application/json; charset=utf-8\nhost:${Host}\nx-amz-date:${amzDate}\nx-amz-target:${amzTarget}\n`;
  const signedHeaders = 'content-encoding;content-type;host;x-amz-date;x-amz-target';
  const payloadHash = toHex(await sha256(payloadString));
  
  const canonicalRequest = `POST\n${uri}\n\n${canonicalHeaders}\n${signedHeaders}\n${payloadHash}`;

  // Task 2: Create string to sign
  const algorithm = 'AWS4-HMAC-SHA256';
  const credentialScope = `${dateStamp}/${Region}/${AWSService}/aws4_request`;
  const stringToSign = `${algorithm}\n${amzDate}\n${credentialScope}\n${toHex(await sha256(canonicalRequest))}`;

  // Task 3: Calculate the signature
  const signingKey = await getSignatureKey(secretKey, dateStamp, Region, AWSService);
  const signature = toHex(await hmac(signingKey, stringToSign));

  // Task 4: Add signing information to request
  const authorizationHeader = `${algorithm} Credential=${accessKey}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Encoding': 'amz-1.0',
        'X-Amz-Target': amzTarget,
        'X-Amz-Date': amzDate,
        'Authorization': authorizationHeader,
      },
      body: payloadString,
      next: { revalidate: 3600 } // Cache aggressively (1hr) to save PAAPI limits
    });

    if (!response.ok) {
        console.error('PAAPI Error:', await response.text());
        return null;
    }

    const data = await response.json();
    const item = data.SearchResult?.Items?.[0];

    if (!item) return null;

    return {
      asin: item.ASIN,
      title: item.ItemInfo?.Title?.DisplayValue || keyword,
      price: item.Offers?.Listings?.[0]?.Price?.DisplayAmount || 'Check Amazon for price',
      imageUrl: item.Images?.Primary?.Large?.URL || 'https://images.unsplash.com/photo-1621256330911-39fe9d05e3be?auto=format&fit=crop&q=80&w=400',
      url: item.DetailPageURL
    };
  } catch (error) {
    console.error('Error fetching PAAPI:', error);
    return null;
  }
}
