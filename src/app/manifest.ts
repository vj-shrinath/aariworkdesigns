import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aari Tracing Tool',
    short_name: 'Aari Tool',
    description: 'Trace embroidery designs directly onto fabric using your screen.',
    start_url: '/trace',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#2d0505',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
