'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';

const slabs = [
  {
    name: 'Nero Antico Imperial',
    origin: 'Carrara Deep Strata • Italy',
    description:
      'Obsidian crystalline limestone threaded with razor-sharp calcite lightning veins. Honed to a velvet satin finish for monumental kitchen islands and statement cladding.',
    image: '/assets/slab-nero.jpg',
    finish: 'Velvet Honed / Mirror Polish',
    density: '2,710 kg/m³',
    absorption: '0.12%',
  },
  {
    name: 'Ceppo di Gré Breccia',
    origin: 'Lake Iseo Cliffs • Lombardy',
    description:
      'Iconic Italian architectural sedimentary stone with distinctive rounded dolomite pebbles suspended in a cool grey matrix. Preferred for high-traffic ventilated façades.',
    image: '/assets/slab-ceppo.jpg',
    finish: 'Sandblasted / Bush-hammered',
    density: '2,640 kg/m³',
    absorption: '0.18%',
  },
  {
    name: 'Calacatta Borghini Extra',
    origin: 'Apuan Alps • Tuscany',
    description:
      'Warm milky-ivory ground crossed by bold charcoal and honey-gold ribbon veining. Each slab is precision-scanned for museum-grade symmetrical bookmatched installations.',
    image: '/assets/slab-calacatta.jpg',
    finish: 'Bookmatched Mirror Gloss',
    density: '2,720 kg/m³',
    absorption: '0.09%',
  },
];

export default function MateriaSection() {
  return (
    <section
      id="materia-section"
      className="relative min-h-screen w-full bg-[#111112] text-secondary py-28 sm:py-36 px-6 sm:px-12 md:px-20 lg:px-32 z-10 overflow-hidden border-t border-white/5"
    >
      {/* Decorative architectural grid guides */}
      <div className="absolute left-12 sm:left-20 md:left-28 lg:left-36 top-0 bottom-0 w-[1px] bg-secondary/10 pointer-events-none" />
      <div className="absolute right-12 sm:right-20 md:right-28 lg:right-36 top-0 bottom-0 w-[1px] bg-secondary/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col justify-between">
        {/* Section Header: Chapter 02 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-24 z-30 relative">
          <div>
            <div className="flex items-center gap-4 text-secondary/50 font-extended text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">
              <span className="text-secondary font-bold text-sm sm:text-base">01</span>
              <span>/</span>
              <span>RARE MATERIA & CURATED SLABS</span>
            </div>
            <h2 className="font-extended text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-white leading-tight">
              Formed in Earth’s Deep Mantle. <br />
              <span className="text-secondary/60">Selected for Modern Architecture.</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-secondary/60 max-w-md font-light leading-relaxed">
            Every block in the Aaiira reserve is numbered, cataloged with high-resolution laser
            photogrammetry, and quarried with strict zero-explosive diamond wire tensioners.
          </p>
        </div>

        {/* 3-Column Slabs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 z-30 relative">
          {slabs.map((slab) => (
            <div
              key={slab.name}
              className="group flex flex-col bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Slab Preview Image */}
              <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-black/40">
                <Image
                  src={slab.image}
                  alt={slab.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-125 group-hover:filter-none"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111112] via-transparent to-transparent opacity-80" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-extended tracking-[0.2em] uppercase bg-black/60 backdrop-blur-md border border-white/10 text-white/80">
                  {slab.origin}
                </span>
              </div>

              {/* Slab Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-extended text-xl sm:text-2xl font-medium uppercase text-white mb-3 group-hover:text-amber-100/90 transition-colors">
                    {slab.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-secondary/60 font-light leading-relaxed mb-6">
                    {slab.description}
                  </p>
                </div>

                {/* Technical Specifications Specs */}
                <div className="border-t border-white/10 pt-4 flex flex-col gap-y-2 text-[11px] font-sans text-secondary/50">
                  <div className="flex justify-between items-center">
                    <span>Available Finish</span>
                    <span className="text-secondary/80 font-medium">{slab.finish}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Bulk Density</span>
                    <span className="text-secondary/80 font-medium">{slab.density}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Water Absorption</span>
                    <span className="text-secondary/80 font-medium">{slab.absorption}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Technical Assurance Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 border-t border-white/10 mt-16 sm:mt-24 z-30 relative">
          <div className="flex items-start gap-4">
            <Compass className="w-5 h-5 text-secondary/60 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-extended text-sm uppercase text-white mb-1">Direct Quarry Concession</h4>
              <p className="font-sans text-xs text-secondary/60 font-light">Zero third-party intermediaries, directly traceable from extraction face to site delivery.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-5 h-5 text-secondary/60 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-extended text-sm uppercase text-white mb-1">Structural Certification</h4>
              <p className="font-sans text-xs text-secondary/60 font-light">Every slab is ultrasound-tested for zero structural fractures or micro-fissures.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Sparkles className="w-5 h-5 text-secondary/60 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-extended text-sm uppercase text-white mb-1">Continuous Vein Flow</h4>
              <p className="font-sans text-xs text-secondary/60 font-light">Sequential slab harvesting ensures flawless vein flow across large floorplates.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
