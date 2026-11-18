'use client';

import React, { useState } from 'react';

export default function MonogramLogo() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      aria-label="AAIIRA MARBLES - Since 2008 - Return to top"
      className="fixed left-4 sm:left-6 md:left-8 lg:left-10 xl:left-12 top-1/2 -translate-y-1/2 z-50 flex items-center gap-2.5 sm:gap-3 md:gap-3.5 cursor-pointer group select-none outline-none"
      style={{
        position: 'fixed',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 50,
      }}
    >
      {/* =========================================================================
          AAIIRA BRAND MONOGRAM LOGO
          Balanced architectural seal calibrated to 70% scale
          Exact geometric vector code in pure white (#ffffff)
      ========================================================================= */}
      <div
        className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[66px] lg:h-[66px] text-white transition-all duration-300 ease-out flex items-center justify-center shrink-0"
        style={{
          transform: isHovered ? 'scale(1.06)' : 'scale(1.0)',
          filter: isHovered
            ? 'drop-shadow(0 0 14px rgba(255, 255, 255, 0.7))'
            : 'drop-shadow(0 2px 7px rgba(0, 0, 0, 0.65))',
          willChange: 'transform, filter',
        }}
      >
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          role="img"
          className="w-full h-full text-white fill-white"
          style={{
            overflow: 'visible',
            display: 'block',
          }}
        >
          {/* Circular Outer Architectural Ring */}
          <circle
            cx="512"
            cy="512"
            r="339"
            fill="none"
            stroke="#ffffff"
            strokeWidth="32"
            className="transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0.95,
            }}
          />

          {/* ================= MONOGRAM GEOMETRIC STROKES ================= */}
          {/* Piece 1: Left Vertical Stem + Diagonal 1 (joined seamlessly at topline) */}
          <polygon
            points="337,391 368,391 501,617 470,617 364,437 364,617 337,617"
            fill="#ffffff"
          />

          {/* Piece 2: Diagonal 2 (parallel stroke slanting down-right at ~31°) */}
          <polygon
            points="410,391 441,391 574,617 543,617"
            fill="#ffffff"
          />

          {/* Piece 3: Center Vertical Stem + Diagonal 3 (joined seamlessly at topline) */}
          <polygon
            points="547,617 547,391 578,391 711,617 680,617 574,437 574,617"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* =========================================================================
          VERTICAL ARCHITECTURAL LABEL: "SINCE 2008"
          Correctly oriented reading top-to-bottom naturally along the vertical line
      ========================================================================= */}
      <div
        className="flex items-center justify-center text-white/80 group-hover:text-white transition-colors duration-300 select-none"
        style={{
          fontFamily: 'var(--font-extended), "Neue Montreal", sans-serif',
        }}
        aria-label="Since 2008"
      >
        <span
          className="text-[8px] sm:text-[9px] md:text-[9.5px] lg:text-[10px] font-medium tracking-[0.24em] uppercase leading-none [writing-mode:vertical-rl] opacity-85 group-hover:opacity-100 transition-opacity"
          style={{
            writingMode: 'vertical-rl',
            letterSpacing: '0.24em',
          }}
        >
          SINCE 2008
        </span>
      </div>
    </div>
  );
}
