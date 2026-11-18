'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import AaiiraKineticLogo from './AaiiraKineticLogo';
import MonogramLogo from './MonogramLogo';
import HamburgerButton from './HamburgerButton';
import NavigationModal from './NavigationModal';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleCloseNav = useCallback(() => setIsNavOpen(false), []);
  const handleToggleNav = useCallback(() => setIsNavOpen((prev) => !prev), []);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(['.navbar-line-left', '.navbar-line-right'], {
        scaleY: 0,
        force3D: true,
      });

      gsap.set('.navbar-logo-date', {
        opacity: 0,
        visibility: 'hidden',
        force3D: true,
      });

      gsap.set(['.brand-subtext', '.brand-tagline', '.scroll-cue'], {
        opacity: 0,
        y: 12,
        force3D: true,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: 'power2.out',
        },
      });

      timelineRef.current = tl;

      // 1. Kinetic Logo paths glide seamlessly from their start coordinates (Zero FOUC, zero hang)
      const paths = containerRef.current?.querySelectorAll<SVGGraphicsElement>('.logo-intro-path');
      if (paths && paths.length > 0) {
        paths.forEach((p) => {
          const sx = p.getAttribute('data-start-x') || '0%';
          const sy = p.getAttribute('data-start-y') || '0%';
          tl.fromTo(
            p,
            { x: sx, y: sy },
            {
              x: '0%',
              y: '0%',
              duration: 1.8,
              ease: 'power2.out',
              clearProps: 'transform',
            },
            0
          );
        });
      }

      // 2. Framing vertical architectural lines draw in simultaneously
      tl.to(
        '.navbar-line-left',
        {
          scaleY: 1,
          duration: 1.8,
          ease: 'power2.out',
        },
        0
      )
        .to(
          '.navbar-line-right',
          {
            scaleY: 1,
            duration: 1.8,
            ease: 'power2.out',
          },
          0
        )
        // 3. Vertical year date and trademark fade in softly
        .to(
          '.navbar-logo-date',
          {
            opacity: 1,
            visibility: 'visible',
            duration: 0.6,
            ease: 'power2.out',
          },
          0.9
        )
        // 4. "MARBLES" and Tagline glide up together in continuous flowing wave
        .to(
          '.brand-subtext',
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power2.out',
          },
          0.95
        )
        .to(
          '.brand-tagline',
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power2.out',
          },
          1.05
        )
        // 5. Scroll cue fades in
        .to(
          '.scroll-cue',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
          },
          1.2
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary select-none"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#19191a',
        color: '#f2f2f0',
      }}
    >
      {/* ================= CLEAN BACKGROUND QUARRY VIDEO / IMAGE ================= */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <video
          className="absolute top-0 left-0 size-full object-cover"
          poster="/assets/clean-quarry.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="/assets/clean-quarry.mp4" type="video/mp4" />
        </video>

        {/* Cinematic dark tint overlay matching Marini Marmi's bg-primary/35 */}
        <div
          className="bg-[#19191a]/40 absolute inset-0"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(25, 25, 26, 0.45)',
          }}
        />
      </div>

      {/* ================= ARCHITECTURAL VERTICAL FRAMING LINES (Hero section only) ================= */}
      <div
        className="navbar-line-left absolute top-0 bottom-0 left-12 sm:left-20 md:left-28 lg:left-36 w-[1px] bg-secondary/25 z-20 origin-bottom scale-y-0 pointer-events-none"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '1px',
          backgroundColor: 'rgba(242, 242, 240, 0.25)',
          zIndex: 20,
          transformOrigin: 'bottom',
        }}
      />
      <div
        className="navbar-line-right absolute top-0 bottom-0 right-12 sm:right-20 md:right-28 lg:right-36 w-[1px] bg-secondary/25 z-20 origin-top scale-y-0 pointer-events-none"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '1px',
          backgroundColor: 'rgba(242, 242, 240, 0.25)',
          zIndex: 20,
          transformOrigin: 'top',
        }}
      />

      {/* ================= LEFT ARCHITECTURAL MONOGRAM LOGO (Matching ss3) ================= */}
      <MonogramLogo />

      {/* ================= RIGHT HAMBURGER / CLOSE BUTTON ================= */}
      <HamburgerButton isOpen={isNavOpen} onToggle={handleToggleNav} />

      {/* ================= CENTRAL KINETIC TYPOGRAPHY & BRAND LOCKUP ================= */}
      <main
        className="relative z-10 w-full flex flex-col items-center justify-center px-4"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 className="sr-only">AAIIRA MARBLES</h1>

        {/* The Kinetic AAIIRA Wordmark */}
        <AaiiraKineticLogo />

        {/* Secondary Title: MARBLES */}
        <div
          className="brand-subtext opacity-0 mt-3 sm:mt-5 md:mt-6 flex items-center justify-center will-change-transform"
          style={{
            marginTop: '1.25rem',
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
          }}
        >
          <span
            className="font-extended text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-[0.45em] sm:tracking-[0.55em] uppercase text-secondary/85 text-center pl-[0.45em] sm:pl-[0.55em]"
            style={{
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: 'rgba(242, 242, 240, 0.85)',
            }}
          >
            MARBLES
          </span>
        </div>

        {/* Brand Tagline: Beautiful Spaces Begin with Aaiira. */}
        <div
          className="brand-tagline opacity-0 mt-3 sm:mt-4 md:mt-5 max-w-lg text-center px-4 will-change-transform"
          style={{
            marginTop: '0.75rem',
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
          }}
        >
          <p
            className="font-sans text-xs sm:text-sm md:text-base font-light tracking-[0.14em] sm:tracking-[0.18em] text-secondary/70 leading-relaxed text-center"
            style={{
              letterSpacing: '0.15em',
              color: 'rgba(242, 242, 240, 0.70)',
              fontWeight: 300,
            }}
          >
            Beautiful Spaces Begin with Aaiira.
          </p>
        </div>
      </main>

      {/* ================= DOWNWARD SCROLL INDICATOR ================= */}
      <a
        href="#monolith-stage"
        className="scroll-cue opacity-0 absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group cursor-pointer"
        aria-label="Scroll to Monolith Stage"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm bg-black/20">
          <ArrowDown className="w-3.5 h-3.5 text-secondary/70 group-hover:text-secondary group-hover:translate-y-0.5 transition-all" />
        </div>
      </a>

      {/* ================= FULLSCREEN NAVIGATION MODAL ================= */}
      <NavigationModal isOpen={isNavOpen} onClose={handleCloseNav} />
    </div>
  );
}
