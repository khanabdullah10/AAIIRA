'use client';

import React from 'react';
import Image from 'next/image';
import { Layers, Cpu, Maximize2, CheckCircle2 } from 'lucide-react';

export default function AtelierSection() {
  return (
    <section
      id="atelier-section"
      className="relative min-h-screen w-full bg-[#0d0d0e] text-secondary py-28 sm:py-36 px-6 sm:px-12 md:px-20 lg:px-32 z-10 overflow-hidden border-t border-white/5"
    >
      {/* Hairline guides */}
      <div className="absolute left-12 sm:left-20 md:left-28 lg:left-36 top-0 bottom-0 w-[1px] bg-secondary/10 pointer-events-none" />
      <div className="absolute right-12 sm:right-20 md:right-28 lg:right-36 top-0 bottom-0 w-[1px] bg-secondary/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col justify-between">
        {/* Section Header: Chapter 02 */}
        <div className="flex items-center gap-4 text-secondary/50 font-extended text-xs sm:text-sm tracking-[0.3em] uppercase mb-12 sm:mb-20 z-30 relative">
          <span className="text-secondary font-bold text-sm sm:text-base">02</span>
          <span>/</span>
          <span>DIGITAL ATELIER & PRECISION CRAFT</span>
        </div>

        {/* 2-Column Split: Image on Left, Process on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-30 relative">
          {/* Left Column: Workshop Atelier Photo */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/10 h-[420px] sm:h-[520px] shadow-2xl bg-black/50 group">
            <Image
              src="/assets/craft-fabrication.jpg"
              alt="Aaiira Marbles master craftsman inspecting 5-axis mitered stone volume"
              fill
              className="object-cover filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-extended text-[10px] tracking-[0.25em] uppercase text-white/50 block mb-1">
                Atelier Carrara & Dubai
              </span>
              <p className="font-sans text-xs sm:text-sm text-white/90 font-light">
                Hand-honed finishes executed by third-generation Tuscan stonemasons alongside 5-axis CNC diamond tooling.
              </p>
            </div>
          </div>

          {/* Right Column: 4-Step Robotic Fabrication Capability */}
          <div className="lg:col-span-6 flex flex-col gap-y-8">
            <div>
              <h2 className="font-extended text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white leading-tight mb-4">
                Sub-Millimeter <br />
                <span className="font-semibold text-white/95">Architectural Precision</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-secondary/70 font-light leading-relaxed">
                By bridging robotic 5-axis waterjet interpolation with ancestral hand-chiseling,
                Aaiira Marbles transforms monumental solid rock into seamless geometric volumes.
              </p>
            </div>

            <div className="flex flex-col gap-y-6 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <Cpu className="w-5 h-5 text-secondary/70 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-extended text-sm uppercase text-white mb-1">Volumetric 3D Laser Scanning</h4>
                  <p className="font-sans text-xs text-secondary/60 font-light leading-relaxed">
                    Digital point-cloud scans map every natural block before the first cut, optimizing vein alignment and bookmatched mirror reflections.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <Maximize2 className="w-5 h-5 text-secondary/70 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-extended text-sm uppercase text-white mb-1">Zero-Seam 45° Robotic Mitering</h4>
                  <p className="font-sans text-xs text-secondary/60 font-light leading-relaxed">
                    Laser-guided diamond bridge saws produce continuous monolithic edge returns with razor-sharp tolerances down to 0.2mm.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <Layers className="w-5 h-5 text-secondary/70 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-extended text-sm uppercase text-white mb-1">Dry-Lay Floorplate Inspection</h4>
                  <p className="font-sans text-xs text-secondary/60 font-light leading-relaxed">
                    Entire multi-thousand-square-meter layouts are pre-assembled in our atelier hangar, photographed from elevated gantries, and client-approved prior to shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
