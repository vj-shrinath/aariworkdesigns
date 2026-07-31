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
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
