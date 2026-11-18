'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import SubpageNavbar from '@/components/SubpageNavbar';
import SubpageFooter from '@/components/SubpageFooter';
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  MapPin,
  ExternalLink,
} from 'lucide-react';

const StoneCube3D = dynamic(() => import('@/components/StoneCube3D'), {
  ssr: false,
  loading: () => (
    <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 animate-pulse bg-black/5 rounded-2xl flex items-center justify-center text-[9px] font-extended uppercase text-black/30">
      Loading 3D Stone...
    </div>
  ),
});

interface Swatch {
  id: number;
  name: string;
  slab: string;
  thumb: string;
}

interface BrandSeries {
  id: string;
  title: string;
  seriesNumber: string;
  brandName: string;
  originBadge: string;
  material: string;
  country: string;
  purpose: string;
  description: string;
  swatches: Swatch[];
}

const brandSeriesData: BrandSeries[] = [
  {
    id: 'bianco',
    title: 'BIANCO SERIES',
    seriesNumber: '01',
    brandName: 'SWAMY MARMO • BIANCO',
    originBadge: 'Carrara & Mediterranean Strata',
    material: 'Natural Marble (Statuario, Calacatta, Bianco Lasa)',
    country: 'Italy / Greece',
    purpose: 'Bookmatched Walls, Luxury Vanities, Flooring, Kitchen Islands, Facade Cladding',
    description:
      'Pristine crystalline white marble slabs hand-extracted from the historical Apuan Alps in Carrara and Mediterranean strata. Featuring bookmatched Statuario, Calacatta Borghini, and Bianco Lasa, ribboned with sublime organic charcoal and soft gold veining. For over a decade and a half, Aaiira Marbles has selected only the finest blocks with faultless structural density and luminescent clarity.',
    swatches: [
      { id: 1, name: 'Statuario Extra Bookmatch', slab: '/assets/brands/bianco/slab_1.jpg', thumb: '/assets/brands/bianco/thumb_1.jpg' },
      { id: 2, name: 'Calacatta Borghini Gold', slab: '/assets/brands/bianco/slab_2.jpg', thumb: '/assets/brands/bianco/thumb_2.jpg' },
      { id: 3, name: 'Bianco Lasa Covelano', slab: '/assets/brands/bianco/slab_3.jpg', thumb: '/assets/brands/bianco/thumb_3.jpg' },
      { id: 4, name: 'Volakas Drama Greek Marble', slab: '/assets/brands/bianco/slab_4.jpg', thumb: '/assets/brands/bianco/thumb_4.jpg' },
      { id: 5, name: 'Carrara Gioia Veined', slab: '/assets/brands/bianco/slab_5.jpg', thumb: '/assets/brands/bianco/thumb_5.jpg' },
      { id: 6, name: 'Thassos Pure Crystal Snow', slab: '/assets/brands/bianco/slab_6.jpg', thumb: '/assets/brands/bianco/thumb_6.jpg' },
      { id: 7, name: 'Arbescato Vagli Brecciated', slab: '/assets/brands/bianco/slab_7.jpg', thumb: '/assets/brands/bianco/thumb_7.jpg' },
      { id: 8, name: 'Paonazzo Violet Vein', slab: '/assets/brands/bianco/slab_8.jpg', thumb: '/assets/brands/bianco/thumb_8.jpg' },
    ],
  },
  {
    id: 'exotic',
    title: 'EXOTIC SERIES',
    seriesNumber: '02',
    brandName: 'SWAMY MARMO • EXOTIC',
    originBadge: 'Alpine & Brazilian Crystalline Strata',
    material: 'Exotic Quartzite, Emerald Marble, Sodalite & Granite',
    country: 'Italy / Brazil / Mediterranean',
    purpose: 'Backlit Countertops, Feature Art Walls, Superyacht Lounges, Statement Tables',
    description:
      'Nature’s rarest geological poetry. The Exotic Series encompasses dramatic crystalline quartzites, emerald green marbles, and volcanic breccias formed under extreme tectonic heat and pressure. Each slab is a singular masterpiece of the Earth, capturing vivid mineral bands, translucent quartz inclusions, and fluid artistic gradients that cannot be replicated.',
    swatches: [
      { id: 1, name: 'Emerald Green Quartzite', slab: '/assets/brands/exotic/slab_1.jpg', thumb: '/assets/brands/exotic/thumb_1.jpg' },
      { id: 2, name: 'Patagonia Crystalline Ice', slab: '/assets/brands/exotic/slab_2.jpg', thumb: '/assets/brands/exotic/thumb_2.jpg' },
      { id: 3, name: 'Blue Roma Metallic Sky', slab: '/assets/brands/exotic/slab_3.jpg', thumb: '/assets/brands/exotic/thumb_3.jpg' },
      { id: 4, name: 'Amazonite Turquoise Gem', slab: '/assets/brands/exotic/slab_4.jpg', thumb: '/assets/brands/exotic/thumb_4.jpg' },
      { id: 5, name: 'Fusion Fire Gold Quartzite', slab: '/assets/brands/exotic/slab_5.jpg', thumb: '/assets/brands/exotic/thumb_5.jpg' },
      { id: 6, name: 'Avocatus Deep Forest Green', slab: '/assets/brands/exotic/slab_6.jpg', thumb: '/assets/brands/exotic/thumb_6.jpg' },
      { id: 7, name: 'Sodalite Imperial Cobalt', slab: '/assets/brands/exotic/slab_7.jpg', thumb: '/assets/brands/exotic/thumb_7.jpg' },
      { id: 8, name: 'Copal Magma Breccia', slab: '/assets/brands/exotic/slab_8.jpg', thumb: '/assets/brands/exotic/thumb_8.jpg' },
    ],
  },
  {
    id: 'beige',
    title: 'TIMELESS BEIGE',
    seriesNumber: '03',
    brandName: 'SWAMY MARMO • TIMELESS BEIGE',
    originBadge: 'Verona, Brescia & Roman Travertine',
    material: 'Natural Marble & Roman Travertine',
    country: 'Italy / Spain',
    purpose: 'Interior Cladding, Minimalist Bathrooms, Monumental Columns, Patios, Flooring',
    description:
      'Warm, understated, and endlessly sophisticated. The Timeless Beige Series captures the quiet nobility of European architectural heritage. Sourced from Brescia, Verona, and Italian travertine basins, these slabs present rich cloudy textures, golden undertones, and warm mineral clouds that harmonize seamlessly with contemporary wood, brass, and textured plaster.',
    swatches: [
      { id: 1, name: 'Botticino Classico Fiorito', slab: '/assets/brands/beige/slab_1.jpg', thumb: '/assets/brands/beige/thumb_1.jpg' },
      { id: 2, name: 'Navona Roman Travertino', slab: '/assets/brands/beige/slab_2.jpg', thumb: '/assets/brands/beige/thumb_2.jpg' },
      { id: 3, name: 'Crema Marfil Royal Ivory', slab: '/assets/brands/beige/slab_3.jpg', thumb: '/assets/brands/beige/thumb_3.jpg' },
      { id: 4, name: 'Dyna Imperiale Gold Ribbon', slab: '/assets/brands/beige/slab_4.jpg', thumb: '/assets/brands/beige/thumb_4.jpg' },
      { id: 5, name: 'Perlato Sicilia Warm Cream', slab: '/assets/brands/beige/slab_5.jpg', thumb: '/assets/brands/beige/thumb_5.jpg' },
      { id: 6, name: 'Breccia Aurora Coral Beige', slab: '/assets/brands/beige/slab_6.jpg', thumb: '/assets/brands/beige/thumb_6.jpg' },
    ],
  },
  {
    id: 'dark',
    title: 'TIMELESS DARK',
    seriesNumber: '04',
    brandName: 'SWAMY MARMO • TIMELESS DARK',
    originBadge: 'Basque & Mediterranean Obsidian Formations',
    material: 'Nero Marquina, Black Saint Laurent, Grigio Carnico',
    country: 'Italy / Spain',
    purpose: 'Dramatic Powder Rooms, Monolithic Fireplaces, Architectural Foyers, Wet Bars',
    description:
      'Deep, dramatic, and magnetic. The Timeless Dark Series brings commanding presence to architectural spaces. Sourced from deep obsidian limestone and metamorphic quarries, these slabs feature deep midnight blacks, stormy graphite grays, and electric white calcite veins that slice across the darkness like frozen lightning.',
    swatches: [
      { id: 1, name: 'Nero Marquina Absolute Black', slab: '/assets/brands/dark/slab_1.jpg', thumb: '/assets/brands/dark/thumb_1.jpg' },
      { id: 2, name: 'Black Saint Laurent Gold Vein', slab: '/assets/brands/dark/slab_2.jpg', thumb: '/assets/brands/dark/thumb_2.jpg' },
      { id: 3, name: 'Grigio Carnico Alpine Slate', slab: '/assets/brands/dark/slab_3.jpg', thumb: '/assets/brands/dark/thumb_3.jpg' },
      { id: 4, name: 'Portoro Silver Obsidian', slab: '/assets/brands/dark/slab_4.jpg', thumb: '/assets/brands/dark/thumb_4.jpg' },
      { id: 5, name: 'Silver Wave Titanium Marble', slab: '/assets/brands/dark/slab_5.jpg', thumb: '/assets/brands/dark/thumb_5.jpg' },
      { id: 6, name: 'Nero Antico Deep Velvet', slab: '/assets/brands/dark/slab_6.jpg', thumb: '/assets/brands/dark/thumb_6.jpg' },
    ],
  },
  {
    id: 'onyx',
    title: 'TIMELESS ONYX',
    seriesNumber: '05',
    brandName: 'SWAMY MARMO • TIMELESS ONYX',
    originBadge: 'Rare Translucent Silicate Gem Formations',
    material: '100% Pure Translucent Natural Onyx',
    country: 'Italy / Iran / Mediterranean',
    purpose: 'Backlit Reception Desks, Luminous Spa Walls, Bar Fronts, Sculptural Niches',
    description:
      'Luminescent, crystalline, and precious. Onyx is one of the most fragile and breathtaking stones in existence, formed from parallel bands of chalcedony and cryptocrystalline silica. Capable of being dramatically backlit, these slabs transform spaces into glowing jewel boxes of amber, ivory, jade, and rose luminescence.',
    swatches: [
      { id: 1, name: 'Pure White Luminous Onyx', slab: '/assets/brands/onyx/slab_1.jpg', thumb: '/assets/brands/onyx/thumb_1.jpg' },
      { id: 2, name: 'Honey Amber Backlit Onyx', slab: '/assets/brands/onyx/slab_2.jpg', thumb: '/assets/brands/onyx/thumb_2.jpg' },
      { id: 3, name: 'Green Emerald Jade Onyx', slab: '/assets/brands/onyx/slab_3.jpg', thumb: '/assets/brands/onyx/thumb_3.jpg' },
      { id: 4, name: 'Pink Rose Translucent Quartz', slab: '/assets/brands/onyx/slab_4.jpg', thumb: '/assets/brands/onyx/thumb_4.jpg' },
    ],
  },
];

export default function BrandsPage() {
  // Active swatch index per series
  const [activeSwatches, setActiveSwatches] = useState<{ [seriesId: string]: number }>({
    bianco: 0,
    exotic: 0,
    beige: 0,
    dark: 0,
    onyx: 0,
  });

  const handleSwatchSelect = (seriesId: string, index: number) => {
    setActiveSwatches((prev) => ({
      ...prev,
      [seriesId]: index,
    }));
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#060606] selection:bg-[#060606] selection:text-white transition-colors duration-500">
      {/* Light-theme Custom Subpage Navbar */}
      <SubpageNavbar currentPage="Brands" />

      {/* Pinned Left Vertical Scroll Progress Line */}
      <div
        className="fixed left-6 sm:left-10 top-1/2 -translate-y-1/2 h-28 sm:h-36 w-[1.5px] bg-black/10 z-40 pointer-events-none hidden md:flex flex-col justify-start rounded-full overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="w-full bg-[#060606] origin-top transition-transform duration-100"
          style={{ height: '100%', transform: 'scaleY(0.4)' }}
        />
      </div>

      <main className="pt-24 sm:pt-28">
        {/* =========================================================================
            HERO SECTION: Matching Stone & Style "02 OUR BRANDS" Canvas
        ========================================================================= */}
        <section className="relative min-h-[80vh] sm:min-h-[90vh] flex flex-col justify-between px-6 sm:px-12 md:px-20 lg:px-28 py-16 max-w-7xl mx-auto border-b border-black/10">
          {/* Top Row: Section Index 02 */}
          <div className="flex justify-between items-start w-full">
            <span
              className="font-serif italic text-6xl sm:text-7xl md:text-8xl text-black/15 select-none leading-none -translate-x-1"
              style={{ fontFamily: '"Playfair Display", "Didot", "Bodoni MT", serif' }}
            >
              02
            </span>

            <div className="text-right">
              <span className="font-extended text-[11px] sm:text-xs tracking-[0.25em] uppercase text-black/40 block">
                AAIIRA ATELIER
              </span>
              <span className="font-extended text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-black/70 font-medium">
                SWAMY MARMO ARCHIVE
              </span>
            </div>
          </div>

          {/* Central Monumental Headline */}
          <div className="my-auto py-10 space-y-6">
            <h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal uppercase tracking-tight text-[#060606] leading-[0.95]"
              style={{ fontFamily: '"Playfair Display", "Didot", "Bodoni MT", serif' }}
            >
              OUR BRANDS
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-black/10">
              <p className="md:col-span-8 font-sans text-xs sm:text-sm md:text-base font-light text-black/70 leading-relaxed tracking-wide">
                Aaiira Marbles is the premier direct curator and exclusive distributor of Swamy Marmo’s rarest
                quarried natural stone series: <strong>Bianco Series</strong>, <strong>Exotic Series</strong>,{' '}
                <strong>Timeless Beige</strong>, <strong>Timeless Dark</strong>, and <strong>Timeless Onyx</strong>.
              </p>

              <div className="md:col-span-4 flex items-center md:justify-end gap-3 font-extended text-xs tracking-wider uppercase text-black/60">
                <span>Scroll to Explore</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Bottom Bar: Series Index Indicators */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-6 text-[11px] sm:text-xs font-extended tracking-widest uppercase text-black/40">
            <a href="#bianco" className="hover:text-black transition-colors">01 Bianco</a>
            <span>/</span>
            <a href="#exotic" className="hover:text-black transition-colors">02 Exotic</a>
            <span>/</span>
            <a href="#beige" className="hover:text-black transition-colors">03 Beige</a>
            <span>/</span>
            <a href="#dark" className="hover:text-black transition-colors">04 Dark</a>
            <span>/</span>
            <a href="#onyx" className="hover:text-black transition-colors">05 Onyx</a>
          </div>
        </section>

        {/* =========================================================================
            ALTERNATING TWO-COLUMN BRAND SHOWCASE CHAPTERS
        ========================================================================= */}
        <div className="space-y-28 sm:space-y-40 py-20 sm:py-32">
          {brandSeriesData.map((series, index) => {
            const isEven = index % 2 === 1;
            const currentSwatchIdx = activeSwatches[series.id] || 0;
            const activeSwatch = series.swatches[currentSwatchIdx];

            return (
              <section
                key={series.id}
                id={series.id}
                className="relative max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28 scroll-mt-28"
              >
                {/* ================= MONUMENTAL PINNED BRAND HEADLINE ================= */}
                <div className="w-full text-center mb-8 sm:mb-12">
                  <h2
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal uppercase tracking-tight text-[#060606] leading-none"
                    style={{ fontFamily: '"Playfair Display", "Didot", "Bodoni MT", serif' }}
                  >
                    {series.title}
                  </h2>
                </div>

                {/* ================= ALTERNATING 2-COLUMN SPLIT PRESENTATION ================= */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    isEven ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
                  }`}
                >
                  {/* COLUMN A: Brand Details, Narrative, Specs, & Swatches */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Brand Title Lockup & Badge */}
                    <div className="space-y-2">
                      <span className="font-extended text-[11px] sm:text-xs tracking-[0.25em] uppercase text-black/40 block">
                        {series.originBadge}
                      </span>
                      <h3 className="font-extended text-xl sm:text-2xl uppercase tracking-wider text-[#060606] font-medium">
                        {series.brandName}
                      </h3>
                    </div>

                    {/* Editorial Narrative */}
                    <p className="font-sans text-xs sm:text-sm text-black/75 font-light leading-relaxed">
                      {series.description}
                    </p>

                    {/* CTA Link: Visit Website / Consultation */}
                    <div className="pt-1">
                      <a
                        href="mailto:aaiiramarbles@gmail.com"
                        className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm text-[#060606] underline underline-offset-4 hover:opacity-70 transition-opacity font-normal tracking-wide"
                      >
                        <span>Request Sourcing & Dry-Lay</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Specifications Grid */}
                    <div className="pt-4 border-t border-black/10 grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="block font-extended text-[10px] tracking-wider uppercase text-black/40">
                          Material
                        </span>
                        <span className="block font-sans text-xs text-black/80 font-medium mt-1">
                          {series.material}
                        </span>
                      </div>
                      <div>
                        <span className="block font-extended text-[10px] tracking-wider uppercase text-black/40">
                          Country of Origin
                        </span>
                        <span className="block font-sans text-xs text-black/80 font-medium mt-1">
                          {series.country}
                        </span>
                      </div>
                      <div className="col-span-2 pt-2">
                        <span className="block font-extended text-[10px] tracking-wider uppercase text-black/40">
                          Recommended Applications
                        </span>
                        <span className="block font-sans text-xs text-black/80 font-light mt-1 leading-relaxed">
                          {series.purpose}
                        </span>
                      </div>
                    </div>

                    {/* Interactive Swatch Dots Strip */}
                    <div className="pt-6 border-t border-black/10 space-y-3">
                      <div className="flex items-center justify-between text-[11px] font-extended tracking-wider uppercase text-black/50">
                        <span>Select Swatch ({series.swatches.length} Available)</span>
                        <span className="text-black font-semibold">
                          {activeSwatch.name}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
                        {series.swatches.map((swatch, sIdx) => {
                          const isSelected = currentSwatchIdx === sIdx;
                          return (
                            <button
                              key={swatch.id}
                              type="button"
                              onClick={() => handleSwatchSelect(series.id, sIdx)}
                              aria-label={`View ${swatch.name}`}
                              className={`relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full overflow-hidden transition-all duration-300 ${
                                isSelected
                                  ? 'ring-2 ring-black scale-110 shadow-lg'
                                  : 'opacity-70 hover:opacity-100 hover:scale-105'
                              }`}
                            >
                              <Image
                                src={swatch.thumb}
                                alt={swatch.name}
                                fill
                                className="object-cover"
                                sizes="44px"
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* COLUMN B: Full Slab Photo with Overlapping 3D Cutout Stone */}
                  <div className="lg:col-span-7 relative">
                    {/* Main Architectural Slab Frame */}
                    <div className="relative rounded-2xl overflow-hidden border border-black/10 bg-black/5 shadow-2xl aspect-[16/10] group">
                      <Image
                        src={activeSwatch.slab}
                        alt={`${series.title} - ${activeSwatch.name}`}
                        fill
                        className="object-cover transition-all duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

                      {/* Floating Caption inside frame */}
                      <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/10 text-[10px] font-extended uppercase tracking-wider text-black">
                        {activeSwatch.name}
                      </div>
                    </div>

                    {/* Overlapping Interactive 3D Natural Stone Cube */}
                    <div
                      className={`absolute -bottom-10 sm:-bottom-14 md:-bottom-16 z-20 pointer-events-auto transition-transform duration-500 ${
                        isEven ? '-left-4 sm:-left-8 md:-left-12' : '-right-4 sm:-right-8 md:-right-12'
                      }`}
                    >
                      <StoneCube3D
                        textureUrl={activeSwatch.slab}
                        isEven={isEven}
                      />
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* =========================================================================
            BOTTOM CALL-TO-ACTION & QUARRY RESERVATION
        ========================================================================= */}
        <section className="py-24 sm:py-32 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#f5f5f3] border-t border-black/10 text-center space-y-6">
          <span className="font-extended text-xs tracking-[0.25em] uppercase text-black/40 block">
            BESPOKE COMMISSIONS & SLAB ALLOCATION
          </span>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-normal uppercase tracking-tight text-[#060606] max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: '"Playfair Display", "Didot", "Bodoni MT", serif' }}
          >
            RESERVE EXCLUSIVE GANGSAW SLABS DIRECTLY FROM OUR QUARRY LOTS
          </h2>
          <p className="font-sans text-xs sm:text-sm text-black/60 max-w-xl mx-auto leading-relaxed">
            Every slab photographed in our archive represents real physical inventory curated from Swamy Marmo.
            Contact our Mumbai Atelier to request physical samples, dry-lay composites, or schedule a private warehouse viewing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="mailto:aaiiramarbles@gmail.com"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#060606] text-white hover:bg-black/80 font-extended text-xs uppercase tracking-widest transition-all duration-300 shadow-xl"
            >
              <span>Email Atelier Desk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="tel:09769021534"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-black/20 bg-white hover:bg-black/5 text-[#060606] font-extended text-xs uppercase tracking-widest transition-all duration-300"
            >
              <span>Call 097690 21534</span>
            </a>
          </div>
        </section>
      </main>

      {/* Seamless transition into our signature dark architectural footer */}
      <SubpageFooter />
    </div>
  );
}
