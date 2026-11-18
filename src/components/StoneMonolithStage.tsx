'use client';

import React from 'react';
import Link from 'next/link';

export default function StoneMonolithStage() {
  return (
    <section
      id="monolith-stage"
      className="relative min-h-screen w-full bg-[#0f0f10] overflow-hidden border-t border-white/5 flex flex-col justify-between"
    >
      {/* Decorative hairline architectural vertical grid guides */}
      <div className="absolute left-10 sm:left-16 md:left-24 lg:left-32 top-0 bottom-0 w-[1px] bg-white/[0.04] pointer-events-none z-10" />
      <div className="absolute right-10 sm:right-16 md:right-24 lg:right-32 top-0 bottom-0 w-[1px] bg-white/[0.04] pointer-events-none z-10" />

      {/* =========================================================================
          BACKGROUND WATERMARK
          Giant faint AAIIRA wordmark pinned cleanly to the upper banner
          with hardware-accelerated rendering
      ========================================================================= */}
      <div
        className="absolute inset-x-0 top-2 sm:top-4 md:top-6 lg:top-8 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.05] z-0"
        aria-hidden="true"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      >
        <span className="font-extended text-[16vw] sm:text-[17vw] md:text-[18vw] font-bold tracking-[0.18em] text-white uppercase whitespace-nowrap pl-[0.18em] leading-none">
          AAIIRA
        </span>
      </div>

      {/* =========================================================================
          SEO ARCHITECTURAL EDITORIAL CONTENT (Scalvini Marmi Rolling Text Reveal)
          Responsive flow: Relative on mobile to prevent content collision,
          flanking horizon line on desktop at ~48vh flanking the 3D stone monolith.
      ========================================================================= */}
      <div className="relative lg:absolute inset-x-0 pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-0 lg:pb-0 lg:top-[48vh] w-full max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 z-30 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-8 items-start w-full">
          {/* ================= LEFT CONTENT: QUARRY EXTRACTION & STRATA ================= */}
          <div className="lg:col-span-4 pointer-events-auto flex flex-col justify-start text-left pl-2 sm:pl-4 lg:pl-8">
            {/* Category Subtitle */}
            <div className="o-reveal flex items-center gap-2.5 mb-2.5 sm:mb-3" data-scroll-reveal style={{ '--stagger': 0 } as React.CSSProperties}>
              <span className="w-5 sm:w-6 h-[1px] bg-[#c9c2ac]" />
              <span className="font-extended text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#c9c2ac] font-medium">
                01 / QUARRY &amp; STRATA
              </span>
            </div>

            {/* Primary Semantic H2 (Scalvini Mechanical Shutter Reveal) */}
            <h2
              className="o-text-reveal font-extended text-base sm:text-lg md:text-xl lg:text-[1.45rem] font-normal uppercase text-white tracking-[-0.015em] leading-[1.2] mb-2.5 sm:mb-3 select-none"
              data-scroll-reveal
              data-component="split-lines"
            >
              <span className="o-text-reveal__wrapper">
                <span className="o-text-reveal__item" style={{ '--line-index': 0 } as React.CSSProperties}>
                  Rare Natural Stone
                </span>
              </span>
              <span className="o-text-reveal__wrapper">
                <span className="o-text-reveal__item text-[#c9c2ac]" style={{ '--line-index': 1 } as React.CSSProperties}>
                  &amp; Geological Mastery
                </span>
              </span>
            </h2>

            {/* SEO Body Paragraph */}
            <p
              className="o-reveal font-sans text-xs sm:text-[13px] text-[#e8e6e2]/85 font-light leading-relaxed tracking-wide mb-3.5 max-w-sm"
              data-scroll-reveal
              style={{ '--stagger': 2 } as React.CSSProperties}
            >
              Since 2008, Aaiira Marbles extracts and curates the world’s most coveted geological strata. From monumental bookmatched Calacatta and Statuario slabs to deep obsidian Nero Marquina, each block is hand-selected from exclusive Italian and Mediterranean quarries for world-class architecture.
            </p>

            {/* Structured Specifications for Search Visibility */}
            <div
              className="o-reveal grid grid-cols-2 gap-3 pt-2.5 border-t border-white/10 max-w-sm"
              data-scroll-reveal
              style={{ '--stagger': 3 } as React.CSSProperties}
            >
              <div>
                <span className="block font-extended text-[8.5px] sm:text-[9px] tracking-[0.18em] uppercase text-[#c9c2ac]">
                  Origin Sourcing
                </span>
                <span className="block font-sans text-[11px] text-white/70 font-light mt-0.5">
                  Carrara • Verona • Thassos
                </span>
              </div>
              <div>
                <span className="block font-extended text-[8.5px] sm:text-[9px] tracking-[0.18em] uppercase text-[#c9c2ac]">
                  Strata Purity
                </span>
                <span className="block font-sans text-[11px] text-white/70 font-light mt-0.5">
                  100% Monolithic Marble
                </span>
              </div>
            </div>
          </div>

          {/* ================= CENTER COLUMN: RESERVED FOR 3D STONE MONOLITH ================= */}
          {/* On mobile: Generates clean vertical clearance for the floating 3D stone monolith so it never collides with text */}
          <div className="lg:hidden h-[28vh] sm:h-[34vh] w-full pointer-events-none" aria-hidden="true" />
          {/* On desktop: Reserves center 4 columns flanking the 3D stone monolith */}
          <div className="hidden lg:block lg:col-span-4 h-full pointer-events-none" aria-hidden="true" />

          {/* ================= RIGHT CONTENT: BESPOKE ENGINEERING & FABRICATION ================= */}
          <div className="lg:col-span-4 pointer-events-auto flex flex-col justify-start text-left pr-2 sm:pr-4 lg:pr-8">
            {/* Category Subtitle */}
            <div className="o-reveal flex items-center gap-2.5 mb-2.5 sm:mb-3" data-scroll-reveal style={{ '--stagger': 0 } as React.CSSProperties}>
              <span className="w-5 sm:w-6 h-[1px] bg-[#c9c2ac]" />
              <span className="font-extended text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#c9c2ac] font-medium">
                02 / BESPOKE ENGINEERING
              </span>
            </div>

            {/* Primary Semantic H3 (Scalvini Mechanical Shutter Reveal) */}
            <h3
              className="o-text-reveal font-extended text-base sm:text-lg md:text-xl lg:text-[1.45rem] font-normal uppercase text-white tracking-[-0.015em] leading-[1.2] mb-2.5 sm:mb-3 select-none"
              data-scroll-reveal
              data-component="split-lines"
            >
              <span className="o-text-reveal__wrapper">
                <span className="o-text-reveal__item" style={{ '--line-index': 0 } as React.CSSProperties}>
                  Bespoke Fabrication
                </span>
              </span>
              <span className="o-text-reveal__wrapper">
                <span className="o-text-reveal__item text-[#c9c2ac]" style={{ '--line-index': 1 } as React.CSSProperties}>
                  &amp; Five-Axis Precision
                </span>
              </span>
            </h3>

            {/* SEO Body Paragraph */}
            <p
              className="o-reveal font-sans text-xs sm:text-[13px] text-[#e8e6e2]/85 font-light leading-relaxed tracking-wide mb-3.5 max-w-sm"
              data-scroll-reveal
              style={{ '--stagger': 2 } as React.CSSProperties}
            >
              Transforming massive raw quarry blocks into refined architectural envelopes. We unite ancestral artisan hand-chiseling with ultra-precise five-axis waterjet robotics, executing bespoke residential estates, superyacht interiors, monolithic staircases, and custom marble bathtubs globally.
            </p>

            {/* Structured Specifications for Search Visibility */}
            <div
              className="o-reveal grid grid-cols-2 gap-3 pt-2.5 border-t border-white/10 max-w-sm"
              data-scroll-reveal
              style={{ '--stagger': 3 } as React.CSSProperties}
            >
              <div>
                <span className="block font-extended text-[8.5px] sm:text-[9px] tracking-[0.18em] uppercase text-[#c9c2ac]">
                  Fabrication
                </span>
                <span className="block font-sans text-[11px] text-white/70 font-light mt-0.5">
                  5-Axis CNC &amp; Artisan Masonry
                </span>
              </div>
              <div>
                <span className="block font-extended text-[8.5px] sm:text-[9px] tracking-[0.18em] uppercase text-[#c9c2ac]">
                  Portfolio Sectors
                </span>
                <span className="block font-sans text-[11px] text-white/70 font-light mt-0.5">
                  Estates • Yachts • Monoliths
                </span>
              </div>
            </div>

            {/* Architectural Atelier Link */}
            <div className="o-reveal mt-3.5 pt-1" data-scroll-reveal style={{ '--stagger': 4 } as React.CSSProperties}>
              <Link
                href="/brands"
                className="inline-flex items-center gap-2 font-extended text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#c9c2ac] hover:text-white transition-colors duration-300 group"
              >
                <span>Explore Atelier Heritage</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
