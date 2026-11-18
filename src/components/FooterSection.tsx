'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from 'lucide-react';

function GoogleIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer
      id="footer-section"
      className="relative min-h-screen w-full bg-[#080809] text-secondary flex flex-col justify-between py-8 sm:py-12 md:py-16 px-6 sm:px-12 md:px-20 lg:px-28 z-10 overflow-hidden border-t border-white/10"
    >
      {/* =========================================================================
          Top Header: 04 / CONTACT & SINCE 2008
      ========================================================================= */}
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto z-30 pt-1">
        <div className="flex items-center gap-3 text-secondary/50 font-extended text-xs sm:text-sm tracking-[0.3em] uppercase">
          <span className="text-secondary font-bold text-sm sm:text-base">04</span>
          <span>/</span>
          <span>CONTACT</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-extended tracking-[0.25em] uppercase text-secondary/50">
          <span className="hidden sm:inline-block">AAIIRA MARBLES</span>
          <span className="hidden sm:inline-block text-secondary/30">•</span>
          <span className="text-white/80 font-medium">SINCE 2008</span>
        </div>
      </div>

      {/* =========================================================================
          Monumental Central Headline & Interactive 3D Cube Stage
      ========================================================================= */}
      <div className="relative flex flex-col items-center justify-center my-auto py-6 sm:py-8 z-30 select-none text-center">
        <h2 className="font-extended text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight uppercase text-white/95 leading-none">
          CONTACT
        </h2>
        <p className="font-sans text-xs sm:text-sm md:text-base text-secondary/60 font-light tracking-[0.2em] uppercase mt-3 sm:mt-4 max-w-xl">
          Beautiful Spaces Begin with Aaiira.
        </p>

        <div className="mt-5 sm:mt-6">
          <a
            href="mailto:aaiiramarbles@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-extended text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 group shadow-lg shadow-black/40 hover:scale-[1.02]"
          >
            <span>Request Consultation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Dedicated 3D Cube Stage Anchor: Positioned directly below Request Consultation */}
        <div
          id="contact-cube-anchor"
          className="w-20 h-20 sm:w-24 sm:h-24 mt-4 sm:mt-6 mb-2 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* =========================================================================
          Architectural Contact, Social & Location Information Grid
      ========================================================================= */}
      <div className="w-full max-w-7xl mx-auto z-30 py-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {/* Column 1: Direct Contact Channels */}
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <div className="text-[10px] sm:text-xs font-extended uppercase tracking-[0.25em] text-secondary/40 mb-3">
              Direct Inquiries
            </div>
            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:aaiiramarbles@gmail.com"
                className="group flex items-center gap-3 text-white/90 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/10 transition-all">
                  <Mail className="w-3.5 h-3.5 text-white/80 group-hover:text-white" />
                </div>
                <div>
                  <span className="block font-extended text-xs sm:text-sm tracking-wider underline underline-offset-4">
                    aaiiramarbles@gmail.com
                  </span>
                  <span className="block text-[10px] text-secondary/40 tracking-wider uppercase mt-0.5">
                    Architectural & Sourcing Desk
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:09769021534"
                className="group flex items-center gap-3 text-white/90 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/10 transition-all">
                  <Phone className="w-3.5 h-3.5 text-white/80 group-hover:text-white" />
                </div>
                <div>
                  <span className="block font-extended text-xs sm:text-sm tracking-wider">
                    097690 21534
                  </span>
                  <span className="block text-[10px] text-secondary/40 tracking-wider uppercase mt-0.5">
                    +91 97690 21534 • Atelier Direct
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="pt-2">
            <p className="font-sans text-xs text-secondary/50 font-light leading-relaxed">
              Curating rare Italian marble, bookmatched Statuario, Calacatta & monolithic architectural stone since 2008.
            </p>
          </div>
        </div>

        {/* Column 2: Verified Social & Professional Networks */}
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <div className="text-[10px] sm:text-xs font-extended uppercase tracking-[0.25em] text-secondary/40 mb-3">
              Network & Portfolio
            </div>
            <div className="space-y-2.5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/aaiiramarbles/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/80 group-hover:text-white">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-extended text-xs tracking-wider text-white">Instagram</span>
                    <span className="block text-[10px] text-secondary/40">@aaiiramarbles</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-secondary/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/akbar-naqvi-57725536/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/80 group-hover:text-white">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-extended text-xs tracking-wider text-white">LinkedIn</span>
                    <span className="block text-[10px] text-secondary/40">Akbar Naqvi • Leadership</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-secondary/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GMB Profile */}
              <a
                href="https://share.google/zER8D3Y60H1o4Ks0T"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/80 group-hover:text-white">
                    <GoogleIcon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-extended text-xs tracking-wider text-white">Google Business</span>
                    <span className="block text-[10px] text-secondary/40">Verified GMB Profile</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-secondary/40 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 3: Embedded Location & Google Maps */}
        <div className="flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between text-[10px] sm:text-xs font-extended uppercase tracking-[0.25em] text-secondary/40 mb-3">
              <span>Atelier Location</span>
              <a
                href="https://maps.app.goo.gl/MW7q2gm9M9h68nJeA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/70 hover:text-white underline underline-offset-2 transition-colors normal-case tracking-normal text-[11px]"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Maps Container with Luxury Architectural Styling */}
            <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl group">
              <iframe
                title="Aaiira Marbles Atelier Location"
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sAaiira+Marbles+Mumbai"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) contrast(115%) brightness(85%)',
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Floating Architectural Badge */}
              <div className="absolute top-2.5 left-2.5 pointer-events-none bg-[#111113]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 shadow-lg">
                <MapPin className="w-3 h-3 text-white" />
                <span className="font-extended text-[10px] tracking-wider uppercase text-white/90">
                  AAIIRA MARBLES • MUMBAI
                </span>
              </div>

              {/* Click-through pill at bottom right */}
              <a
                href="https://maps.app.goo.gl/MW7q2gm9M9h68nJeA"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2.5 right-2.5 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-[10px] font-extended tracking-wider uppercase px-3 py-1 rounded-full border border-white/20 transition-all flex items-center gap-1.5"
              >
                <span>View on Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <p className="font-sans text-[11px] text-secondary/40 font-light">
            Oshiwara, New Link Road, Jogeshwari West, Mumbai, MH 400102
          </p>
        </div>
      </div>

      {/* =========================================================================
          Bottom Colophon & Legal Navigation Bar
      ========================================================================= */}
      <div className="w-full max-w-7xl mx-auto z-30 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-extended tracking-wider text-secondary/50">
        <div className="flex items-center gap-3">
          <span className="text-white/80 font-semibold">AAIIRA MARBLES</span>
          <span>•</span>
          <span>SINCE 2008</span>
        </div>

        {/* Essential Legal & Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 uppercase text-[11px] text-secondary/60">
          <Link href="/brands" className="hover:text-white transition-colors duration-200">
            Brands
          </Link>
          <span className="text-white/20">•</span>
          <Link href="/about" className="hover:text-white transition-colors duration-200">
            About Us
          </Link>
          <span className="text-white/20">•</span>
          <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </Link>
          <span className="text-white/20">•</span>
          <Link href="/terms-and-conditions" className="hover:text-white transition-colors duration-200">
            Terms & Conditions
          </Link>
          <span className="text-white/20">•</span>
          <Link href="/legal" className="hover:text-white transition-colors duration-200">
            Legal Notice
          </Link>
          <span className="text-white/20">•</span>
          <Link href="/sitemap" className="hover:text-white transition-colors duration-200">
            Sitemap
          </Link>
        </nav>

        <div className="text-[11px] text-center md:text-right">
          <span>© {new Date().getFullYear()} AAIIRA MARBLES PVT. LTD.</span>
        </div>
      </div>
    </footer>
  );
}
