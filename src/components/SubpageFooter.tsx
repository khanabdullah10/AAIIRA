'use client';

import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';

function GoogleIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

export default function SubpageFooter() {
  return (
    <footer className="w-full bg-[#08080a] text-secondary border-t border-white/10 pt-16 sm:pt-20 pb-10 px-6 sm:px-10 lg:px-20 z-10 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Top Header & Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 text-secondary/40 font-extended text-xs tracking-[0.25em] uppercase mb-2">
              <span>AAIIRA MARBLES</span>
              <span>•</span>
              <span className="text-white/80 font-medium">SINCE 2008</span>
            </div>
            <h2 className="font-extended text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white">
              FINE ARCHITECTURAL STONE
            </h2>
            <p className="font-sans text-xs sm:text-sm text-secondary/60 tracking-[0.16em] uppercase mt-2">
              Beautiful Spaces Begin with Aaiira.
            </p>
          </div>

          <a
            href="mailto:aaiiramarbles@gmail.com"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extended text-xs uppercase tracking-widest transition-all duration-300"
          >
            <span>Request Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3-Column Architectural Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Direct Inquiries */}
          <div className="space-y-4">
            <span className="block font-extended text-xs uppercase tracking-[0.25em] text-secondary/40">
              Direct Inquiries
            </span>
            <div className="space-y-2.5">
              <a
                href="mailto:aaiiramarbles@gmail.com"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors text-xs sm:text-sm font-extended tracking-wider underline underline-offset-4"
              >
                <Mail className="w-4 h-4 text-white/70" />
                <span>aaiiramarbles@gmail.com</span>
              </a>
              <a
                href="tel:09769021534"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors text-xs sm:text-sm font-extended tracking-wider"
              >
                <Phone className="w-4 h-4 text-white/70" />
                <span>097690 21534</span>
                <span className="text-[10px] text-secondary/40 tracking-normal">(+91 97690 21534)</span>
              </a>
            </div>
            <p className="font-sans text-xs text-secondary/50 font-light pt-2 leading-relaxed">
              Curating Carrara Statuario, Calacatta, Ceppo di Gré, and bookmatched monolithic stone for global architecture.
            </p>
          </div>

          {/* Column 2: Mumbai Atelier */}
          <div className="space-y-4">
            <span className="block font-extended text-xs uppercase tracking-[0.25em] text-secondary/40">
              Atelier & Sourcing Desk
            </span>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-secondary/80 font-sans leading-relaxed">
              <MapPin className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
              <div>
                <span className="block font-extended text-white tracking-wider uppercase text-xs">
                  Aaiira Marbles Private Limited
                </span>
                <span className="block text-secondary/60 text-xs mt-1">
                  Oshiwara, New Link Road, Jogeshwari West, Mumbai 400102, Maharashtra, India.
                </span>
                <a
                  href="https://maps.app.goo.gl/MW7q2gm9M9h68nJeA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-extended uppercase tracking-wider text-white hover:underline mt-2"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Verified Digital Presence */}
          <div className="space-y-4">
            <span className="block font-extended text-xs uppercase tracking-[0.25em] text-secondary/40">
              Digital Presence
            </span>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/aaiiramarbles/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-3.5 h-3.5 text-white/80" />
                  <span className="font-extended tracking-wider text-white">Instagram</span>
                </div>
                <span className="text-[10px] text-secondary/40">@aaiiramarbles</span>
              </a>

              <a
                href="https://www.linkedin.com/in/akbar-naqvi-57725536/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-3.5 h-3.5 text-white/80" />
                  <span className="font-extended tracking-wider text-white">LinkedIn</span>
                </div>
                <span className="text-[10px] text-secondary/40">Akbar Naqvi</span>
              </a>

              <a
                href="https://share.google/zER8D3Y60H1o4Ks0T"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <GoogleIcon className="w-3.5 h-3.5 text-white/80" />
                  <span className="font-extended tracking-wider text-white">Google Business</span>
                </div>
                <span className="text-[10px] text-secondary/40">GMB Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= ESSENTIAL LEGAL & SITEMAP FOOTER ROW ================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-extended tracking-wider text-secondary/50">
          {/* Navigation & Legal Links */}
          <nav className="flex flex-wrap items-center justify-center md:justify-start gap-5 sm:gap-8 uppercase text-[11px]">
            <Link
              href="/brands"
              className="hover:text-white transition-colors duration-200"
            >
              Brands
            </Link>
            <Link
              href="/about"
              className="hover:text-white transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/legal"
              className="hover:text-white transition-colors duration-200"
            >
              Legal Notice
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-white transition-colors duration-200"
            >
              Sitemap
            </Link>
          </nav>

          {/* Copyright & Entity */}
          <div className="text-[11px] text-center md:text-right">
            <span>© {new Date().getFullYear()} AAIIRA MARBLES PVT. LTD. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
