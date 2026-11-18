import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SubpageNavbar from '@/components/SubpageNavbar';
import SubpageFooter from '@/components/SubpageFooter';
import {
  Compass,
  Layers,
  FileText,
  MapPin,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap | AAIIRA MARBLES — Architectural Directory',
  description:
    'Comprehensive architectural directory and sitemap for Aaiira Marbles. Direct navigation to stone collections, heritage pages, fabrication specifications, and legal notices.',
};

const sitemapStructure = [
  {
    category: 'Core Atelier Experience',
    icon: Compass,
    links: [
      { name: 'Atelier Home (Hero Stage)', href: '/', desc: 'Interactive 3D stone monolith, kinetic typography, and quarry atmosphere' },
      { name: 'About Us (Atelier Heritage)', href: '/about', desc: 'Our journey since 2008, leadership by Akbar Naqvi, and quarry extraction' },
      { name: 'Stone Monolith Stage', href: '/#monolith-stage', desc: 'High-precision interactive 3D WebGL floating stone stage' },
      { name: 'Artisans & Fabrication Overview', href: '/#hp-about', desc: 'Ancestral chiseling united with 5-axis robotic waterjet cutting' },
      { name: 'Creations Gallery Ribbon', href: '/#hp-creations', desc: 'Curated architectural creations, custom stools, and monolithic sculptures' },
      { name: 'Atelier Contact & Inquiries', href: '/#footer-section', desc: 'Direct consultation desk, inquiry form, and Mumbai Atelier map' },
    ],
  },
  {
    category: 'Materia & Geological Strata',
    icon: Layers,
    links: [
      { name: 'Calacatta Borghini & Statuario Extra', href: '/about#materia', desc: 'Rare Carrara white marble with bold crystalline feather veining' },
      { name: 'Ceppo di Gré & Aggloceppo®', href: '/about#materia', desc: 'Historical Lombardy sedimentary breccia stone for contemporary facades' },
      { name: 'Nero Marquina & Obsidian Antico', href: '/about#materia', desc: 'Deep black limestone illuminated by vivid white calcite fractures' },
      { name: 'Bookmatched Monolithic Slabs', href: '/about#philosophy', desc: 'Mirror-veined monumental interior claddings and flooring' },
      { name: 'Five-Axis Bespoke Architectural Elements', href: '/about#pillars', desc: 'Cantilevered stairs, carved solid bathtubs, and ventilated facades' },
    ],
  },
  {
    category: 'Legal, Compliance & Disclosures',
    icon: FileText,
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy', desc: 'Data protection, client NDA protocols, and DPDP/GDPR compliance' },
      { name: 'Terms & Conditions', href: '/terms-and-conditions', desc: 'Natural stone characteristics, 5-axis tolerances, delivery, and jurisdiction' },
      { name: 'Legal Notice & Impressum', href: '/legal', desc: 'Official corporate registration (CIN: U45309MH2018PTC317009) and directors' },
      { name: 'XML Sitemap (Search Engines)', href: '/sitemap.xml', desc: 'Machine-readable XML index for Google and search engine crawlers' },
    ],
  },
  {
    category: 'Direct Channels & Verified Networks',
    icon: MapPin,
    links: [
      { name: 'Direct Email Consultation', href: 'mailto:aaiiramarbles@gmail.com', desc: 'aaiiramarbles@gmail.com — Architectural project desk', external: true },
      { name: 'Direct Line / Atelier Phone', href: 'tel:09769021534', desc: '097690 21534 / +91 97690 21534 — Showroom inquiries', external: true },
      { name: 'Instagram Portfolio (@aaiiramarbles)', href: 'https://www.instagram.com/aaiiramarbles/', desc: 'Real-time project updates, quarry visits, and slab unrollings', external: true },
      { name: 'LinkedIn Executive Network', href: 'https://www.linkedin.com/in/akbar-naqvi-57725536/', desc: 'Director Akbar Naqvi • Aaiira Marbles leadership', external: true },
      { name: 'Google Business Profile (GMB)', href: 'https://share.google/zER8D3Y60H1o4Ks0T', desc: 'Verified Google presence, atelier reviews, and operating hours', external: true },
      { name: 'Mumbai Atelier Google Maps Pin', href: 'https://maps.app.goo.gl/MW7q2gm9M9h68nJeA', desc: 'Oshiwara, New Link Road, Jogeshwari West, Mumbai 400102', external: true },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-secondary flex flex-col justify-between selection:bg-white selection:text-black">
      <SubpageNavbar currentPage="Sitemap" />

      <main className="pt-28 pb-20 px-6 sm:px-12 md:px-20 lg:px-28 max-w-5xl mx-auto space-y-14">
        {/* Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-extended tracking-[0.25em] uppercase text-secondary/40">
            <Compass className="w-3.5 h-3.5 text-white/80" />
            <span>ARCHITECTURAL DIRECTORY & SITE INDEX</span>
          </div>
          <h1 className="font-extended text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-white leading-tight">
            SITE DIRECTORY
          </h1>
          <p className="font-sans text-xs sm:text-sm text-secondary/60 font-light max-w-2xl leading-relaxed">
            An overview of all pages, digital collections, technical specifications, and legal resources across
            the Aaiira Marbles digital ecosystem.
          </p>
        </div>

        {/* Directory Columns */}
        <div className="space-y-12">
          {sitemapStructure.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.category} className="space-y-5">
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/80">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h2 className="font-extended text-lg sm:text-xl uppercase tracking-wider text-white">
                    {section.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.links.map((link) => {
                    const isExternal = Boolean((link as any).external);
                    const LinkComponent = isExternal ? 'a' : Link;
                    const extraProps = isExternal
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {};

                    return (
                      <LinkComponent
                        key={link.name}
                        href={link.href}
                        {...extraProps}
                        className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/20 transition-all duration-300 group flex flex-col justify-between"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="font-extended text-xs sm:text-sm text-white/90 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                            {link.name}
                          </span>
                          {isExternal ? (
                            <ExternalLink className="w-3.5 h-3.5 text-secondary/40 group-hover:text-white shrink-0 mt-0.5" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5 text-secondary/40 group-hover:text-white group-hover:translate-x-1 shrink-0 mt-0.5 transition-transform" />
                          )}
                        </div>
                        <p className="font-sans text-[11px] text-secondary/50 font-light mt-2 leading-relaxed">
                          {link.desc}
                        </p>
                      </LinkComponent>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <SubpageFooter />
    </div>
  );
}
