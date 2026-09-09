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
    const cspHeader = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://static.cloudflareinsights.com https://accounts.google.com https://*.google.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https://cdn.sanity.io https://m.media-amazon.com https://images.unsplash.com https://image.pollinations.ai https://pagead2.googlesyndication.com https://www.google-analytics.com https://lh3.googleusercontent.com https://*.google.com https://*.gstatic.com",
      "connect-src 'self' https://test.payu.in https://secure.payu.in https://*.payu.in https://*.supabase.co https://*.sanity.io https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com https://fonts.googleapis.com https://fonts.gstatic.com https://accounts.google.com https://*.google-analytics.com",
      "frame-src 'self' https://test.payu.in https://secure.payu.in https://*.payu.in https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com https://accounts.google.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' mailto: https://test.payu.in https://secure.payu.in https://*.payu.in https://accounts.google.com",
      "upgrade-insecure-requests"
    ].join('; ');

    return [{
      source: '/(.*)',
      headers: [
        { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        { key: 'Content-Security-Policy', value: cspHeader },
      ]
    }];
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
