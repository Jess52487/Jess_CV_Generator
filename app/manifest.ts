import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jess CV Generator',
    short_name: 'CV Gen',
    description: 'A beautiful skeuomorphic CV generator that works fully offline.',
    start_url: '/',
    display: 'standalone',
    background_color: '#2c160e',
    theme_color: '#3d2b1f',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
