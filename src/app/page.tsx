'use client';

import dynamic from 'next/dynamic';
import SmoothScroll from '@/components/SmoothScroll';
import Hero from '@/components/Hero';
import StoneMonolithStage from '@/components/StoneMonolithStage';
import HpAboutSection from '@/components/HpAboutSection';
import FooterSection from '@/components/FooterSection';
import HpCtaGallery from '@/components/HpCtaGallery';

// Dynamically import Three.js 3D WebGL Stone Canvas so it only initializes in the browser
const StoneCanvas = dynamic(() => import('@/components/StoneCanvas'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-primary">
      {/* Luxury smooth momentum scrolling engine matching Stone & Style */}
      <SmoothScroll />

      {/* 3D WebGL Canvas: Interactive Floating & Fracturing Stone with ScrollTrigger physics */}
      <StoneCanvas />

      {/* Hero Section: Monolithic AAIIRA kinetic typography, framing lines & tagline */}
      <Hero />

      {/* Monolith Stage: Pure stage where the 3D stone stands alone with only the AAIIRA watermark */}
      <StoneMonolithStage />

      {/* Scalvini Marmi: c-hp-about section placed just below the AAIIRA watermark */}
      <HpAboutSection />

      {/* Scalvini Marmi: Interactive Magnetic Creations Gallery Ribbon (moved just below c-hp-about) */}
      <HpCtaGallery />

      {/* Footer Section: Architectural Colophon & Contacts (3D cube settles below Request Consultation) */}
      <FooterSection />
    </div>
  );
}
