import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SubpageNavbar from '@/components/SubpageNavbar';
import SubpageFooter from '@/components/SubpageFooter';
import {
  ArrowUpRight,
  ShieldCheck,
  Compass,
  Sparkles,
  Layers,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | AAIIRA MARBLES — Heritage of Living Stone Since 2008',
  description:
    'Discover the legacy of Aaiira Marbles. Since 2008, curating the world’s most coveted geological strata, from Carrara and Verona quarries to monumental 5-axis precision architectural envelopes.',
};

const timelineMilestones = [
  {
    year: '2008',
    title: 'Founding of the Stone Atelier',
    desc: 'Founded with a singular commitment: to hand-select only the purest 1% of natural marble blocks directly from historic Italian and Mediterranean quarries.',
  },
  {
    year: '2014',
    title: 'Global Quarry Direct-Sourcing',
    desc: 'Established exclusive procurement conduits across Carrara, Brescia, Verona, and Greece, eliminating intermediaries to ensure uncompromised block authenticity.',
  },
  {
    year: '2018',
    title: 'Aaiira Marbles Private Limited & 5-Axis Tech',
    desc: 'Formalized corporate expansion in Mumbai and integrated robotic five-axis waterjet machining to execute hyper-complex architectural envelopes.',
  },
  {
    year: 'Today',
    title: 'Monolithic Architectural Landmark Projects',
    desc: 'Curating bespoke bookmatched slabs, monolithic floating staircases, and superyacht interiors for prestigious architects and private clients globally.',
  },
];

const coreValues = [
  {
    icon: Compass,
    title: 'Geological Curation',
    desc: 'We inspect every extracted quarry block in person. Vein continuity, crystal luminescence, and strata density are scrutinized before block booking.',
  },
  {
    icon: Layers,
    title: 'Bookmatch Mastery',
    desc: 'Continuous mirror veining across monumental wall claddings and bookmatched flooring, calculated with 3D CAD dry-lay simulation.',
  },
  {
    icon: Sparkles,
    title: 'Five-Axis Precision',
    desc: 'Sub-millimeter CNC waterjet cutting and hand-chiseling by master masons, marrying centuries of Italian craft with aerospace tolerance.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Compromise Ethics',
    desc: '100% natural monolithic stone with verified quarry origins, unadulterated strata integrity, and comprehensive client confidentiality.',
  },
];

const stoneSpecialties = [
  {
    name: 'Calacatta Borghini & Statuario Extra',
    origin: 'Carrara, Apuan Alps, Italy',
    image: '/assets/slab-calacatta.jpg',
    desc: 'Iconic warm or cool crystalline white backgrounds ribboned with bold, organic charcoal and gold feathery veining.',
  },
  {
    name: 'Ceppo di Gré & Aggloceppo®',
    origin: 'Lake Iseo, Lombardy, Italy',
    image: '/assets/slab-ceppo.jpg',
    desc: 'Rare sedimentary breccia with pebble-textured geological character, celebrated in brutalist and contemporary Milanese architecture.',
  },
  {
    name: 'Nero Marquina & Obsidian Antico',
    origin: 'Basque & Mediterranean Strata',
    image: '/assets/slab-nero.jpg',
    desc: 'Deep velvety midnight limestone electrified with crystalline white calcite fault lines and liquid luster.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-secondary flex flex-col justify-between selection:bg-white selection:text-black">
      {/* Top Architectural Header */}
      <SubpageNavbar currentPage="About" />

      {/* Main Content Area */}
      <main className="pt-20">
        {/* =========================================================================
            HERO SECTION: Monumental Headline & Background Atmosphere
        ========================================================================= */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-6 sm:px-12 md:px-20 lg:px-28 py-20 overflow-hidden border-b border-white/10">
          {/* Subtle Ambient Video / Image Backdrop */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
            <video
              className="w-full h-full object-cover"
              poster="/assets/about/copertina-video-chi-siamo-hp.1900x0.jpg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/about/video-chi-siamo-hp_03.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-[11px] font-extended tracking-[0.28em] uppercase text-white/80">
              <span>ESTABLISHED 2008</span>
              <span>•</span>
              <span>MUMBAI ATELIER & GLOBAL QUARRIES</span>
            </div>

            <h1 className="font-extended text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight text-white leading-[1.05]">
              THE ARCHITECTURE OF LIVING STONE
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg text-secondary/70 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Curating millions of years of geological formation into transcendent architectural envelopes.
              Beautiful spaces begin with Aaiira.
            </p>

            {/* Quick Metrics Strip */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-white/10">
              <div>
                <span className="block font-extended text-2xl sm:text-3xl font-medium text-white">2008</span>
                <span className="block text-[10px] sm:text-xs text-secondary/50 font-extended uppercase tracking-wider mt-1">
                  Heritage Founded
                </span>
              </div>
              <div>
                <span className="block font-extended text-2xl sm:text-3xl font-medium text-white">100%</span>
                <span className="block text-[10px] sm:text-xs text-secondary/50 font-extended uppercase tracking-wider mt-1">
                  Monolithic Marble
                </span>
              </div>
              <div>
                <span className="block font-extended text-2xl sm:text-3xl font-medium text-white">5-Axis</span>
                <span className="block text-[10px] sm:text-xs text-secondary/50 font-extended uppercase tracking-wider mt-1">
                  Robotic Precision
                </span>
              </div>
              <div>
                <span className="block font-extended text-2xl sm:text-3xl font-medium text-white">Worldwide</span>
                <span className="block text-[10px] sm:text-xs text-secondary/50 font-extended uppercase tracking-wider mt-1">
                  Quarry Direct
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 1: PHILOSOPHY & GEOLOGICAL CURATION
        ========================================================================= */}
        <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-20 lg:px-28 max-w-7xl mx-auto border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="text-secondary/40 font-extended text-xs tracking-[0.25em] uppercase">
                01 / PHILOSOPHY
              </div>
              <h2 className="font-extended text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white leading-tight">
                EVERY STONE TELLS A TWO-HUNDRED-MILLION YEAR ODYSSEY
              </h2>
              <div className="space-y-4 font-sans text-xs sm:text-sm text-secondary/70 font-light leading-relaxed">
                <p>
                  At Aaiira Marbles, we do not view natural stone merely as a building material. To us, natural marble is
                  the Earth’s geological memory—crystallized calcium carbonate forged under immense tectonic pressure, heat,
                  and deep eons of time.
                </p>
                <p>
                  Founded in 2008 and formalized as Aaiira Marbles Private Limited under the visionary leadership of Akbar Naqvi,
                  the atelier has earned an illustrious reputation among leading architectural firms, interior designers,
                  and discerning patrons for hand-procuring blocks that defy conventional market offerings.
                </p>
                <p>
                  Our sourcing team journeys directly to mountain quarries in Carrara, Brescia, Verona, and Mediterranean
                  deposits. We inspect every block in its raw, unquarried state, rejecting over 98% of extracted blocks
                  to curate only the most expressive vein patterns, tonal purity, and structural density.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-xs font-extended uppercase tracking-wider text-white">
                  <CheckCircle2 className="w-4 h-4 text-white/80" />
                  <span>Direct Quarry Allocation</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-extended uppercase tracking-wider text-white">
                  <CheckCircle2 className="w-4 h-4 text-white/80" />
                  <span>Dry-Lay 3D Verification</span>
                </div>
              </div>
            </div>

            {/* Editorial Showcase Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/[0.02] shadow-2xl group">
              <div className="aspect-[4/3] sm:aspect-[16/10] relative overflow-hidden">
                <Image
                  src="/assets/about/dsc00290_copia.1880x0.jpg"
                  alt="Aaiira Marbles Quarry Extraction and Block Curation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex justify-between items-center">
                <div>
                  <span className="block font-extended text-xs tracking-wider uppercase text-white font-medium">
                    Carrara Block Inspection
                  </span>
                  <span className="block text-[10px] text-secondary/50 font-light mt-0.5">
                    Hand-inspected natural strata for bespoke architectural dry-lay
                  </span>
                </div>
                <span className="text-[10px] font-extended uppercase tracking-widest text-secondary/40 font-mono">
                  ORIGIN 01
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: CORE PILLARS & VALUES
        ========================================================================= */}
        <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-20 lg:px-28 max-w-7xl mx-auto border-b border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-secondary/40 font-extended text-xs tracking-[0.25em] uppercase">
              02 / OUR PILLARS
            </span>
            <h2 className="font-extended text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white">
              DISCIPLINE OF THE STONEWRIGHT
            </h2>
            <p className="font-sans text-xs sm:text-sm text-secondary/60 font-light tracking-wide">
              Upholding strict metallurgical and geological benchmarks on every slab that enters our Mumbai Atelier.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-6 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/80 group-hover:text-white group-hover:scale-110 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-secondary/30 text-xs font-mono">0{idx + 1}</span>
                    <h3 className="font-extended text-base uppercase tracking-wider text-white">
                      {value.title}
                    </h3>
                    <p className="font-sans text-xs text-secondary/60 font-light leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: TIMELINE & HISTORICAL HERITAGE
        ========================================================================= */}
        <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-20 lg:px-28 max-w-7xl mx-auto border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <span className="text-secondary/40 font-extended text-xs tracking-[0.25em] uppercase">
                03 / HERITAGE
              </span>
              <h2 className="font-extended text-3xl sm:text-4xl font-light uppercase tracking-tight text-white">
                THE CHRONICLE OF AAIIRA MARBLES
              </h2>
              <p className="font-sans text-xs sm:text-sm text-secondary/60 font-light leading-relaxed">
                From a dedicated stone atelier in 2008 to an international natural marble powerhouse curating
                ultra-luxury residences, bespoke penthouses, and superyacht interiors.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-8 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/10">
              {timelineMilestones.map((item) => (
                <div key={item.year} className="relative pl-6 border-l border-white/15 group">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-white/40 group-hover:bg-white group-hover:scale-125 transition-all" />
                  <span className="font-extended text-sm font-semibold tracking-wider text-white font-mono">
                    {item.year}
                  </span>
                  <h3 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white/90 mt-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-secondary/60 font-light leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: SIGNATURE MATERIA COLLECTIONS
        ========================================================================= */}
        <section className="py-20 sm:py-28 px-6 sm:px-12 md:px-20 lg:px-28 max-w-7xl mx-auto border-b border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-secondary/40 font-extended text-xs tracking-[0.25em] uppercase">
                04 / MATERIA SPECTRUM
              </span>
              <h2 className="font-extended text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mt-2">
                COVETED ARCHITECTURAL VARIETIES
              </h2>
            </div>
            <Link
              href="/#monolith-stage"
              className="inline-flex items-center gap-2 text-xs font-extended uppercase tracking-widest text-white/80 hover:text-white underline underline-offset-4 transition-colors"
            >
              <span>Explore 3D Stone Monolith</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stoneSpecialties.map((stone) => (
              <div
                key={stone.name}
                className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] flex flex-col justify-between group hover:border-white/25 transition-all duration-300"
              >
                <div className="aspect-[16/11] relative overflow-hidden">
                  <Image
                    src={stone.image}
                    alt={stone.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-extended uppercase tracking-wider text-white border border-white/10">
                    {stone.origin}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-extended text-base uppercase tracking-wider text-white">
                    {stone.name}
                  </h3>
                  <p className="font-sans text-xs text-secondary/60 font-light leading-relaxed">
                    {stone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: DIRECT ATELIER CONSULTATION CTA
        ========================================================================= */}
        <section className="py-24 sm:py-32 px-6 sm:px-12 md:px-20 lg:px-28 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-extended tracking-[0.25em] uppercase text-secondary/40">
            <MapPin className="w-3.5 h-3.5 text-white/70" />
            <span>MUMBAI ATELIER • PRIVATE CONSULTATIONS</span>
          </div>

          <h2 className="font-extended text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-white leading-tight">
            COMMISSION YOUR BESPOKE ARCHITECTURAL STONE ENVELOPE
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-secondary/70 font-light max-w-xl mx-auto leading-relaxed">
            Collaborate directly with our stone specialists in Mumbai. Request tailored quarry samples,
            reserve bookmatched slab sequences, or review 5-axis shop drawings.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="mailto:aaiiramarbles@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black hover:bg-secondary font-extended text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl shadow-white/10"
            >
              <span>Email Consultation Desk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="tel:09769021534"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white font-extended text-xs sm:text-sm uppercase tracking-widest transition-all duration-300"
            >
              <span>Call +91 97690 21534</span>
            </a>
          </div>
        </section>
      </main>

      {/* Shared Footer with Full Legal Colophon */}
      <SubpageFooter />
    </div>
  );
}
