'use client';

import React from 'react';

export default function BottomPill() {
  return (
    <div className="bottom-pill invisible opacity-0 fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center">
      <div className="flex items-center gap-x-3 sm:gap-x-4 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-secondary shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300 hover:border-white/40 hover:bg-black/70 cursor-pointer">
        {/* Exhibition Tag / Brand Monogram */}
        <div className="flex items-center gap-1.5 border-r border-white/20 pr-3 sm:pr-4">
          <span className="font-extended text-[9px] sm:text-[11px] font-bold tracking-[0.2em] uppercase leading-none">
            DOWNTOWN
          </span>
          <span className="font-sans text-[8px] sm:text-[10px] font-light tracking-[0.15em] uppercase text-secondary/70 leading-none">
            DESIGN
          </span>
        </div>

        {/* Date and Location Details */}
        <div className="flex items-center gap-2 sm:gap-3 font-extended text-[9px] sm:text-[11px] tracking-[0.16em] uppercase whitespace-nowrap">
          <span className="font-semibold text-secondary">
            NOVEMBER 4–8, 2026
          </span>
          <span className="hidden sm:inline text-secondary/40">•</span>
          <span className="text-secondary/80">DUBAI</span>
          <span className="text-secondary/40">•</span>
          <span className="text-secondary/90 font-medium">STAND B5-501</span>
        </div>
      </div>
    </div>
  );
}
