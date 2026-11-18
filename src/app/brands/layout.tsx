import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Brands & Curated Natural Stone Series | AAIIRA MARBLES',
  description:
    'Explore Aaiira Marbles exclusive natural stone series: Bianco Series, Exotic Series, Timeless Beige, Timeless Dark, and Timeless Onyx. Curated from the rarest Mediterranean and Italian strata.',
  keywords: [
    'Bianco Series',
    'Exotic Series marble',
    'Timeless Beige marble',
    'Timeless Dark marble',
    'Timeless Onyx',
    'Statuario Extra Bookmatch',
    'Calacatta Borghini Gold',
    'Emerald Green Quartzite',
    'Aaiira Marbles collections',
  ],
  alternates: {
    canonical: 'https://aaiiramarbles.com/brands',
  },
  openGraph: {
    title: 'Our Brands & Curated Natural Stone Series | AAIIRA MARBLES',
    description:
      'Explore Aaiira Marbles exclusive natural stone series: Bianco Series, Exotic Series, Timeless Beige, Timeless Dark, and Timeless Onyx.',
    url: 'https://aaiiramarbles.com/brands',
    siteName: 'AAIIRA MARBLES',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://aaiiramarbles.com/assets/brands/bianco/slab_1.jpg',
        width: 1200,
        height: 630,
        alt: 'Aaiira Marbles Bianco Series — Statuario Extra Bookmatch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Brands & Curated Natural Stone Series | AAIIRA MARBLES',
    description:
      'Explore Aaiira Marbles exclusive natural stone series: Bianco, Exotic, Timeless Beige, Timeless Dark, and Timeless Onyx.',
    images: ['https://aaiiramarbles.com/assets/brands/bianco/slab_1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
