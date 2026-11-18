'use client';

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

interface ParallaxItem {
  el: HTMLElement;
  powy: number;
  top: number;
  height: number;
}

export default function SmoothScroll() {
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initialize Lenis calibrated for 165Hz esports-grade fluid momentum (Matching Scalvini Marmi)
    const lenis = new Lenis({
      lerp: 0.14,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5,
      syncTouch: true,
      infinite: false,
      autoResize: true,
    });

    // 2. Pre-cache geometries & scroll dimensions (0 forced reflows during scroll)
    let cachedMaxScroll = 1;
    let parallaxItems: ParallaxItem[] = [];

    const measureLayout = () => {
      cachedMaxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

      const elements = document.querySelectorAll<HTMLElement>('[data-powy]');
      const sy = window.scrollY || window.pageYOffset;
      parallaxItems = Array.from(elements).map((el) => {
        const powy = parseFloat(el.getAttribute('data-powy') || '1.0');
        const rect = el.getBoundingClientRect();
        return {
          el,
          powy,
          top: rect.top + sy,
          height: rect.height,
        };
      });
    };

    measureLayout();
    window.addEventListener('resize', measureLayout, { passive: true });

    // 3. Universal Scalvini Marmi Scroll-Reveal Observer (Curtain wipes & text rolling shutters)
    const revealElements = document.querySelectorAll<HTMLElement>('[data-scroll-reveal]');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -6% 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
    document.documentElement.classList.add('is-ready');

    // 4. Ultra-high-performance, zero-re-render scroll handler
    const onScroll = (e: any) => {
      const scrollY = e.scroll !== undefined ? e.scroll : window.scrollY;
      const progress = Math.min(1, Math.max(0, scrollY / cachedMaxScroll));

      // Direct DOM update for scroll thumb without React re-renders
      if (thumbRef.current) {
        thumbRef.current.style.transform = `scaleY(${progress.toFixed(4)})`;
      }

      // Pure arithmetic parallax update (0 forced reflows)
      const wh = window.innerHeight;
      for (let i = 0; i < parallaxItems.length; i++) {
        const item = parallaxItems[i];
        if (item.powy === 1.0) continue;
        const n = (scrollY - item.height / 2 - (item.top - wh / 2)) / wh;
        const diff = wh * (item.powy - 1.0);
        item.el.style.transform = `translate3d(0, ${(diff * n).toFixed(1)}px, 0)`;
      }
    };

    (window as any).__lenis = lenis;
    lenis.on('scroll', onScroll);

    let reqId: number = 0;
    let isPaused = false;

    function raf(time: number) {
      if (!isPaused) {
        lenis.raf(time);
      }
      reqId = requestAnimationFrame(raf);
    }

    reqId = requestAnimationFrame(raf);

    const handleVisibilityChange = () => {
      isPaused = document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange, { passive: true });

    return () => {
      cancelAnimationFrame(reqId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', measureLayout);
      revealObserver.disconnect();
      lenis.off('scroll', onScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Stone & Style Minimal Vertical Scroll Progress Indicator */}
      <div
        className="fixed left-6 sm:left-10 top-1/2 -translate-y-1/2 h-24 sm:h-32 w-[1.5px] bg-white/10 z-40 pointer-events-none hidden md:flex flex-col justify-start rounded-full overflow-hidden"
        aria-hidden="true"
      >
        <div
          ref={thumbRef}
          className="w-full bg-white/70 origin-top will-change-transform"
          style={{
            height: '100%',
            transform: 'scaleY(0)',
          }}
        />
      </div>
    </>
  );
}
