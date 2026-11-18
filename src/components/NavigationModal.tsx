'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import {
  X,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';

interface NavigationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  title: string;
  tagline: string;
  sublinks: { name: string; href: string }[];
}

const menuData: MenuItem[] = [
  {
    title: 'Brand',
    tagline: 'Legacy & Geological Heritage',
    sublinks: [
      { name: 'About Atelier & Heritage', href: '/about' },
      { name: 'Quarry Extraction', href: '/about#philosophy' },
      { name: 'Artisanal Process', href: '/about#pillars' },
    ],
  },
  {
    title: 'Materia',
    tagline: 'Coveted Architectural Stone',
    sublinks: [
      { name: 'Ceppo di Gré', href: '/#monolith-stage' },
      { name: 'Aggloceppo®', href: '/#monolith-stage' },
      { name: 'Nuvolato Marble', href: '/#monolith-stage' },
      { name: 'Bespoke Slabs', href: '/about#materia' },
    ],
  },
  {
    title: 'Architecture',
    tagline: 'Monumental Global Envelopes',
    sublinks: [
      { name: 'Case Studies', href: '/#hp-creations' },
      { name: 'Ventilated Façades', href: '/about' },
      { name: 'Interior Cladding', href: '/about' },
      { name: 'Global Portfolio', href: '/#hp-creations' },
    ],
  },
  {
    title: 'Atelier',
    tagline: 'Direct Consult & Commission',
    sublinks: [
      { name: 'Discover Our Atelier (Brands)', href: '/brands' },
      { name: 'About Us & Heritage', href: '/about' },
      { name: 'Consult & Commission', href: '/#footer-section' },
      { name: 'Site Directory', href: '/sitemap' },
    ],
  },
];

function GoogleIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

export default function NavigationModal({
  isOpen,
  onClose,
}: NavigationModalProps) {
  const [mounted, setMounted] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  // Client-side portal mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background momentum scroll & freeze body when drawer is open
  useEffect(() => {
    if (!mounted) return;

    if (isOpen) {
      (window as any).__lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      (window as any).__lenis?.start();
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      (window as any).__lenis?.start();
      document.body.style.overflow = '';
    };
  }, [isOpen, mounted, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[60] select-none transition-all duration-500 ease-out ${
        isOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
      }`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      {/* =========================================================================
          LAYER 1: CINEMATIC BLURRED BACKDROP
          Blurs the entire 3D WebGL stone, hero video & page behind it
      ========================================================================= */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-[#060608]/70 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? 'opacity-100 backdrop-blur-2xl'
            : 'opacity-0 backdrop-blur-none pointer-events-none'
        }`}
        style={{
          WebkitBackdropFilter: isOpen ? 'blur(24px) saturate(160%)' : 'blur(0px)',
          backdropFilter: isOpen ? 'blur(24px) saturate(160%)' : 'blur(0px)',
        }}
      />

      {/* =========================================================================
          LAYER 2: ARCHITECTURAL SLIDING DRAWER PANEL
          Slides in smoothly from the right with high-velocity cubic-bezier easing
      ========================================================================= */}
      <aside
        className={`absolute top-0 right-0 bottom-0 h-full w-full sm:w-[520px] md:w-[600px] lg:w-[680px] xl:w-[720px] z-[70] flex flex-col justify-between overflow-y-auto bg-[#0d0d10]/85 border-l border-white/10 shadow-[-28px_0_90px_rgba(0,0,0,0.85)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          WebkitBackdropFilter: 'blur(36px) saturate(180%)',
          backdropFilter: 'blur(36px) saturate(180%)',
          boxShadow: isOpen
            ? '-24px 0 90px rgba(0, 0, 0, 0.85), inset 1px 0 0 0 rgba(255, 255, 255, 0.08)'
            : 'none',
        }}
      >
        {/* ================= DRAWER TOP HEADER ================= */}
        <div
          className={`flex items-center justify-between px-6 sm:px-10 md:px-12 pt-8 pb-6 border-b border-white/10 shrink-0 transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="font-extended text-xs sm:text-sm tracking-[0.28em] uppercase text-white font-semibold">
              AAIIRA MARBLES
            </span>
            <span className="text-secondary/30">•</span>
            <span className="font-extended text-[10px] sm:text-xs tracking-[0.2em] uppercase text-secondary/60">
              SINCE 2008
            </span>
          </div>

          {/* Dedicated Header Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Drawer"
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 hover:border-white/35 bg-white/5 hover:bg-white/10 text-secondary/70 hover:text-white transition-all duration-300 text-xs font-extended tracking-widest uppercase"
          >
            <span className="hidden sm:inline-block">Close</span>
            <X className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" />
          </button>
        </div>

        {/* ================= DRAWER BODY: EDITORIAL ACCORDION MENU ================= */}
        <div className="flex-1 px-6 sm:px-10 md:px-12 py-6 sm:py-8 flex flex-col justify-center">
          <ul className="flex flex-col space-y-4 sm:space-y-6">
            {menuData.map((item, index) => {
              const isExpanded = openAccordion === index;
              const delayMs = 160 + index * 70;

              return (
                <li
                  key={item.title}
                  className={`border-b border-white/5 pb-4 sm:pb-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${delayMs}ms` : '0ms',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isExpanded ? null : index)}
                    aria-expanded={isExpanded}
                    aria-controls={`drawer-section-${index}`}
                    className="w-full flex items-center justify-between text-left group transition-all duration-300 py-1"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-extended text-xs sm:text-sm text-secondary/40 font-mono tracking-widest">
                        0{index + 1}
                      </span>
                      <div>
                        <span className="font-extended text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider text-white/90 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300 block">
                          {item.title}
                        </span>
                        <span className="text-[10px] sm:text-xs text-secondary/40 tracking-wider font-light uppercase mt-0.5 block">
                          {item.tagline}
                        </span>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-secondary/50 group-hover:text-white group-hover:border-white/30 transition-all shrink-0">
                      <span className="text-base font-light transition-transform duration-300">
                        {isExpanded ? '—' : '+'}
                      </span>
                    </div>
                  </button>

                  {/* Accordion Sublinks */}
                  <div
                    id={`drawer-section-${index}`}
                    role="region"
                    aria-label={item.title}
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isExpanded
                        ? 'max-h-72 opacity-100 mt-4 sm:mt-5'
                        : 'max-h-0 opacity-0 mt-0 pointer-events-none'
                    }`}
                  >
                    <ul className="pl-8 sm:pl-12 flex flex-col space-y-2.5">
                      {item.sublinks.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            onClick={onClose}
                            className="group/sub flex items-center gap-2.5 font-sans text-xs sm:text-sm text-secondary/60 hover:text-white transition-colors duration-200 tracking-wider"
                          >
                            <ArrowRight className="w-3 h-3 text-secondary/30 group-hover/sub:text-white group-hover/sub:translate-x-1 transition-transform" />
                            <span>{sub.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Quick Action Consultation Banner */}
          <div
            className={`mt-6 sm:mt-8 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: isOpen ? '460ms' : '0ms',
            }}
          >
            <div>
              <span className="block font-extended text-xs tracking-wider uppercase text-white font-medium">
                Direct Commission
              </span>
              <span className="block text-[11px] text-secondary/40 font-light mt-0.5">
                Bespoke stone consulting for private residences & superyachts
              </span>
            </div>
            <a
              href="mailto:aaiiramarbles@gmail.com"
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-white text-black hover:bg-secondary transition-colors font-extended text-[11px] uppercase tracking-wider font-semibold shrink-0 ml-4 flex items-center gap-1.5"
            >
              <span>Consult</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ================= DRAWER FOOTER: CONTACT & SOCIALS ================= */}
        <div
          className={`px-6 sm:px-10 md:px-12 py-6 border-t border-white/10 shrink-0 space-y-4 bg-black/30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{
            transitionDelay: isOpen ? '520ms' : '0ms',
          }}
        >
          {/* Direct Channels */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <a
              href="mailto:aaiiramarbles@gmail.com"
              className="flex items-center gap-2 text-secondary/80 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-white/70" />
              <span className="underline underline-offset-4 font-extended text-[11px] sm:text-xs">
                aaiiramarbles@gmail.com
              </span>
            </a>

            <a
              href="tel:09769021534"
              className="flex items-center gap-2 text-secondary/80 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-white/70" />
              <span className="font-extended text-[11px] sm:text-xs">
                097690 21534
              </span>
            </a>
          </div>

          {/* Social Icons Strip */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] sm:text-[11px] font-extended tracking-wider">
            <div className="flex items-center gap-4 text-secondary/60">
              <a
                href="https://www.instagram.com/aaiiramarbles/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/akbar-naqvi-57725536/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://share.google/zER8D3Y60H1o4Ks0T"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
                title="Google Business Profile"
              >
                <GoogleIcon className="w-3 h-3" />
                <span className="hidden sm:inline">Google</span>
              </a>
              <a
                href="https://maps.app.goo.gl/MW7q2gm9M9h68nJeA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
                title="Atelier Location"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Location</span>
              </a>
            </div>

            <span className="text-secondary/40 text-[10px]">
              MUMBAI ATELIER
            </span>
          </div>

          {/* Essential Legal & Directory Navigation */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-extended tracking-wider text-secondary/40 uppercase">
            <div className="flex items-center gap-2.5">
              <Link href="/brands" onClick={onClose} className="hover:text-white transition-colors">
                Brands
              </Link>
              <span>•</span>
              <Link href="/about" onClick={onClose} className="hover:text-white transition-colors">
                About
              </Link>
              <span>•</span>
              <Link href="/privacy-policy" onClick={onClose} className="hover:text-white transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/terms-and-conditions" onClick={onClose} className="hover:text-white transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link href="/legal" onClick={onClose} className="hover:text-white transition-colors">
                Legal
              </Link>
              <span>•</span>
              <Link href="/sitemap" onClick={onClose} className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </aside>
    </div>,
    document.body
  );
}
