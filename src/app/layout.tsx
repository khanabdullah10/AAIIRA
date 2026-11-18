import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-extended',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#19191a',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://aaiiramarbles.com'),
  title: {
    default: 'AAIIRA MARBLES | Fine Architectural Stone & Living Heritage',
    template: '%s | AAIIRA MARBLES',
  },
  description:
    'Since 2008, Aaiira Marbles curates and crafts exquisite natural marble, bookmatched slabs, and geological strata for world-class architecture and private commissions.',
  keywords: [
    'Aaiira Marbles',
    'luxury architectural marble',
    'Italian marble Mumbai',
    'Statuario marble India',
    'Calacatta Borghini',
    'bookmatched marble slabs',
    'Ceppo di Gre Mumbai',
    'natural stone facade cladding',
    'quarry direct marble',
    'Akbar Naqvi marble',
  ],
  authors: [{ name: 'Aaiira Marbles Private Limited', url: 'https://aaiiramarbles.com' }],
  creator: 'Aaiira Marbles Private Limited',
  publisher: 'Aaiira Marbles Private Limited',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AAIIRA MARBLES | Fine Architectural Stone & Living Heritage',
    description:
      'Since 2008, Aaiira Marbles curates and crafts exquisite natural marble, bookmatched slabs, and geological strata for world-class architecture.',
    url: 'https://aaiiramarbles.com',
    siteName: 'AAIIRA MARBLES',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://aaiiramarbles.com/assets/clean-quarry.jpg',
        width: 1920,
        height: 1080,
        alt: 'Aaiira Marbles Architectural Quarry Heritage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAIIRA MARBLES | Fine Architectural Stone & Living Heritage',
    description:
      'Since 2008, Aaiira Marbles curates and crafts exquisite natural marble, bookmatched slabs, and geological strata for world-class architecture.',
    images: ['https://aaiiramarbles.com/assets/clean-quarry.jpg'],
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
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

// Technical SEO JSON-LD Structured Data Entities
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://aaiiramarbles.com/#organization',
    name: 'Aaiira Marbles Private Limited',
    alternateName: 'Aaiira Marbles',
    url: 'https://aaiiramarbles.com',
    logo: 'https://aaiiramarbles.com/assets/clean-quarry.jpg',
    foundingDate: '2008',
    founder: {
      '@type': 'Person',
      name: 'Akbar Naqvi',
      jobTitle: 'Founder & Managing Director',
      sameAs: 'https://www.linkedin.com/in/akbar-naqvi-57725536/',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9769021534',
      contactType: 'sales',
      email: 'aaiiramarbles@gmail.com',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://www.instagram.com/aaiiramarbles/',
      'https://www.linkedin.com/in/akbar-naqvi-57725536/',
      'https://share.google/zER8D3Y60H1o4Ks0T',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://aaiiramarbles.com/#localbusiness',
    name: 'Aaiira Marbles Mumbai Atelier',
    image: 'https://aaiiramarbles.com/assets/clean-quarry.jpg',
    url: 'https://aaiiramarbles.com',
    telephone: '+91-9769021534',
    email: 'aaiiramarbles@gmail.com',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.0760',
      longitude: '72.8777',
    },
    hasMap: 'https://maps.app.goo.gl/MW7q2gm9M9h68nJeA',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:30',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://aaiiramarbles.com/#website',
    url: 'https://aaiiramarbles.com',
    name: 'AAIIRA MARBLES',
    publisher: {
      '@id': 'https://aaiiramarbles.com/#organization',
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        {/* High-priority LCP Resource Hint for Hero Quarry Poster */}
        <link
          rel="preload"
          as="image"
          href="/assets/clean-quarry.jpg"
          // @ts-ignore
          fetchPriority="high"
        />
        {/* Validated JSON-LD Structured Data Scripts */}
        {structuredData.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body
        className="bg-primary text-secondary antialiased select-none selection:bg-secondary selection:text-primary min-h-screen overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
