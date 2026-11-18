'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowLeft, Menu, X } from 'lucide-react';
import NavigationModal from './NavigationModal';

interface SubpageNavbarProps {
  currentPage?: string;
}

export default function SubpageNavbar({ currentPage }: SubpageNavbarProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleCloseNav = useCallback(() => setIsNavOpen(false), []);
  const handleOpenNav = useCallback(() => setIsNavOpen(true), []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e11]/80 backdrop-blur-2xl border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
          {/* Brand Identity / Home Link */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Return to Aaiira Marbles Home"
            >
              {/* Circular Monogram Icon */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center bg-white/5 group-hover:border-white transition-colors">
                <svg
                  viewBox="0 0 1024 1024"
                  className="w-5 h-5 text-white fill-white"
                  aria-hidden="true"
                >
                  <polygon
                    points="337,391 368,391 501,617 470,617 364,437 364,617 337,617"
                    fill="#ffffff"
                  />
                  <polygon
                    points="410,391 441,391 574,617 543,617"
                    fill="#ffffff"
                  />
                  <polygon
                    points="547,617 547,391 578,391 711,617 680,617 574,437 574,617"
                    fill="#ffffff"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-extended text-sm sm:text-base tracking-[0.25em] uppercase text-white font-medium">
                  AAIIRA MARBLES
                </span>
                <span className="text-[9px] font-extended tracking-[0.2em] uppercase text-secondary/40">
                  SINCE 2008 • MUMBAI ATELIER
                </span>
              </div>
            </Link>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 font-extended text-xs uppercase tracking-[0.22em] text-secondary/60">
            <Link
              href="/"
              className="hover:text-white transition-colors duration-200"
            >
              Atelier
            </Link>
            <Link
              href="/brands"
              className={`hover:text-white transition-colors duration-200 ${
                currentPage === 'Brands' ? 'text-white border-b border-white pb-1' : ''
              }`}
            >
              Brands
            </Link>
            <Link
              href="/about"
              className={`hover:text-white transition-colors duration-200 ${
                currentPage === 'About' ? 'text-white border-b border-white pb-1' : ''
              }`}
            >
              About
            </Link>
            <Link
              href="/#monolith-stage"
              className="hover:text-white transition-colors duration-200"
            >
              Materia
            </Link>
            <Link
              href="/#footer-section"
              className="hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action: Back to Atelier & Drawer Trigger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 hover:border-white/35 text-white/80 hover:text-white text-xs font-extended uppercase tracking-wider transition-all duration-300"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Atelier Home</span>
            </Link>

            <button
              type="button"
              onClick={handleOpenNav}
              aria-label="Open Navigation Drawer"
              className="p-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 hover:border-white/35 text-secondary hover:text-white transition-all duration-300"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Shared Animated Blurred Drawer */}
      <NavigationModal isOpen={isNavOpen} onClose={handleCloseNav} />
    </>
  );
}
