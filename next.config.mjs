/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/free-aari-work-tracing-designs-pdf-download',
        destination: '/blog/aari-tracing-designs',
        permanent: true,
      },
      {
        source: '/simple-aari-work-blouse-designs-images-with-traces-50-easy-patterns-for-beginners',
        destination: '/blog/simple-aari-work-blouse-designs-images-with-traces-50-easy-patterns-for-beginners',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [{ source: '/(.*)', headers: [
      { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://sdk.cashfree.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https://cdn.sanity.io https://m.media-amazon.com https://images.unsplash.com https://image.pollinations.ai; connect-src 'self' https://api.cashfree.com https://sandbox.cashfree.com https://*.supabase.co https://*.sanity.io; frame-src 'self' https://sdk.cashfree.com https://payments.cashfree.com; object-src 'none'; base-uri 'self'; form-action 'self' mailto:; upgrade-insecure-requests" },
    ]}];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'image.pollinations.ai',
      },
    ],
  },
};

export default nextConfig;
