'use client';

import React, { useState } from 'react';

interface HamburgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function HamburgerButton({
  isOpen,
  onToggle,
}: HamburgerButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // When drawer is open, remove button completely so the drawer remains clean and systematic
  if (isOpen) return null;

  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Open Navigation Drawer"
      aria-expanded={false}
      className="fixed right-6 sm:right-10 md:right-14 lg:right-16 top-1/2 -translate-y-1/2 z-50 p-3 text-secondary focus:outline-none transition-transform duration-300 hover:scale-110 cursor-pointer"
      style={{
        position: 'fixed',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 50,
      }}
    >
      <div className="relative w-6 h-5 sm:w-7 sm:h-5 md:w-8 md:h-5 flex flex-col justify-between items-center">
        {/* Top Line */}
        <span
          className="block h-[2px] w-full bg-current origin-center transition-all duration-300 ease-out"
          style={{
            transform: isHovered ? 'translateX(4px)' : 'none',
          }}
        />

        {/* Middle Line */}
        <span
          className="block h-[2px] w-full bg-current transition-all duration-300 ease-out"
          style={{
            transform: isHovered ? 'translateX(-4px)' : 'none',
          }}
        />

        {/* Bottom Line */}
        <span
          className="block h-[2px] w-full bg-current origin-center transition-all duration-300 ease-out"
          style={{
            transform: isHovered ? 'translateX(2px)' : 'none',
          }}
        />
      </div>
    </button>
  );
}
