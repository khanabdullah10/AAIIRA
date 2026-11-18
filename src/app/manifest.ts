import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AAIIRA MARBLES | Fine Architectural Stone',
    short_name: 'AAIIRA MARBLES',
    description:
      'Since 2008, Aaiira Marbles curates and crafts exquisite natural marble, bookmatched slabs, and geological strata for world-class architecture.',
    start_url: '/',
    display: 'standalone',
    background_color: '#19191a',
    theme_color: '#19191a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
