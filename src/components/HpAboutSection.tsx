'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function HpAboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const media1Ref = useRef<HTMLDivElement>(null);
  const media2Ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Trigger is-inview when visible in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(section);

    // High performance parallax scroll engine (Matching Scalvini Marmi data-scroll-parallax="1" & "2")
    let reqId: number;
    let isTicking = false;
    let sectionTop = 0;
    let sectionHeight = 0;

    const measureSection = () => {
      if (section) {
        const sy = window.scrollY || window.pageYOffset;
        sectionTop = section.getBoundingClientRect().top + sy;
        sectionHeight = section.offsetHeight || 800;
      }
    };
    measureSection();
    window.addEventListener('resize', measureSection, { passive: true });

    const onScroll = () => {
      if (!isTicking) {
        reqId = requestAnimationFrame(() => {
          if (!section) return;
          const wh = window.innerHeight;
          const sy = window.scrollY || window.pageYOffset;
          const topInView = sectionTop - sy;
          const bottomInView = topInView + sectionHeight;

          if (topInView < wh && bottomInView > 0) {
            const totalTravel = wh + sectionHeight;
            const progress = (wh - topInView) / totalTravel;
            const centered = progress - 0.5;

            // Parallax factor 1: ~60px total travel
            if (media1Ref.current) {
              const y1 = centered * -60;
              media1Ref.current.style.transform = `translate3d(0, ${y1.toFixed(1)}px, 0)`;
            }

            // Parallax factor 2: ~130px total travel
            if (media2Ref.current) {
              const y2 = centered * -130;
              media2Ref.current.style.transform = `translate3d(0, ${y2.toFixed(1)}px, 0)`;
            }
          }
          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(reqId);
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measureSection);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`c-hp-about relative w-full overflow-hidden py-24 sm:py-32 lg:py-44 z-20 lg:z-10 ${
        isInView ? 'is-inview' : ''
      }`}
      data-component="hp-about"
      data-scroll-reveal
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        padding: '8vw 0 10vw 0',
      }}
    >
      {/* Background layer: Solid on mobile (z-25) to avoid stone clipping images, transparently layered on desktop (z-10) */}
      <div
        className="c-hp-about__bg absolute inset-0 pointer-events-none z-25 lg:z-10"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#212121',
        }}
        aria-hidden="true"
      />

      {/* Dynamic CSS styles replicating Scalvini Marmi's exact tokens & animations */}
      <style jsx global>{`
        /* Scalvini Marmi Heading Split Layout */
        .o-heading-split {
          display: flow-root;
          width: 100%;
        }
        .o-heading-split .left {
          float: left;
          clear: left;
          text-align: left;
        }
        .o-heading-split .right + .left {
          clear: right;
        }
        .o-heading-split .right {
          float: right;
          clear: right;
          text-align: right;
        }

        /* Scalvini Marmi Animated Underline CTA Button (.o-button--arrow) */
        .o-button-arrow {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 1.25rem;
          padding-bottom: 0.75em;
          font-family: var(--font-extended), 'Neue Montreal', sans-serif;
          font-size: 0.95rem;
          line-height: 1;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          color: #c9c2ac;
          cursor: pointer;
          transition: color 0.4s ease;
        }
        .o-button-arrow:hover {
          color: #f4f2ee;
        }

        /* Scalvini Double Animated Underline Sweep */
        .o-button-arrow::before {
          position: absolute;
          bottom: 0;
          left: -2px;
          width: calc(100% + 2px);
          height: 1px;
          background-color: currentColor;
          content: '';
          pointer-events: none;
          transform: scaleX(0);
          transform-origin: 0 0;
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          transition-delay: 0s;
        }
        .o-button-arrow::after {
          position: absolute;
          bottom: 0;
          right: -2px;
          width: calc(100% + 2px);
          height: 1px;
          background-color: currentColor;
          content: '';
          pointer-events: none;
          transform: scaleX(1);
          transform-origin: 100% 0;
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          transition-delay: 50ms;
        }
        .o-button-arrow:hover::before {
          transform: scaleX(1);
          transition-delay: 50ms;
        }
        .o-button-arrow:hover::after {
          transform: scaleX(0);
          transition-delay: 0s;
        }

        /* Reveal transitions */
        .c-hp-about .o-reveal {
          transform: translateY(30px);
          opacity: 0;
          transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
          will-change: transform, opacity;
        }
        .c-hp-about.is-inview .o-reveal {
          transform: translateY(0);
          opacity: 1;
        }
        .c-hp-about.is-inview .o-reveal--delay-1 {
          transition-delay: 0.15s;
        }
        .c-hp-about.is-inview .o-reveal--delay-2 {
          transition-delay: 0.3s;
        }

        /* Curtain mask reveal for images */
        .c-hp-about .o-figure-curtain::before {
          position: absolute;
          inset: -1px;
          z-index: 3;
          background-color: #212121;
          content: '';
          transform-origin: 50% 0;
          transform: scaleY(1);
          transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
          will-change: transform;
        }
        .c-hp-about.is-inview .o-figure-curtain::before {
          transform: scaleY(0);
        }
        .c-hp-about.is-inview .o-figure-curtain--delay-1::before {
          transition-delay: 0.2s;
        }
        .c-hp-about.is-inview .o-figure-curtain--delay-2::before {
          transition-delay: 0.4s;
        }
      `}</style>

      {/* Reverted to exact original Scalvini Marmi full-width container (px-[6.25vw]) */}
      <div
        className="o-container relative w-full max-w-[1920px] mx-auto px-[6.25vw]"
        style={{
          position: 'relative',
          zIndex: 30,
        }}
      >
        {/* =========================================================================
            SPLIT HEADING: "ARTISANS,  MASTER MASONS & STONE INNOVATORS"
            Exact Scalvini Marmi fluid typography & split layout
        ========================================================================= */}
        <h2
          className="c-hp-about__title o-heading-split o-text-reveal select-none mb-12 sm:mb-16 md:mb-20 lg:mb-28"
          data-scroll-reveal
          data-component="split-lines"
          style={{
            fontFamily: 'var(--font-extended), "Neue Montreal", sans-serif',
            fontSize: 'min(max(2.6rem, 7.2vw), 5.4rem)',
            fontWeight: 400,
            textTransform: 'uppercase',
            color: '#c9c2ac',
            letterSpacing: '-0.015em',
            lineHeight: 0.94,
          }}
        >
          <span className="left block o-text-reveal__wrapper">
            <span className="o-text-reveal__item" style={{ '--line-index': 0 } as React.CSSProperties}>
              Artisans,
            </span>
          </span>
          <span className="right block o-text-reveal__wrapper">
            <span className="o-text-reveal__item" style={{ '--line-index': 1 } as React.CSSProperties}>
              master masons
            </span>
          </span>
          <span className="right block o-text-reveal__wrapper">
            <span className="o-text-reveal__item" style={{ '--line-index': 2 } as React.CSSProperties}>
              &amp; stone innovators
            </span>
          </span>
        </h2>

        {/* =========================================================================
            12-COLUMN ARCHITECTURAL GRID (c-hp-about__grid-top)
        ========================================================================= */}
        <div
          className="o-grid c-hp-about__grid-top relative grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-0 md:gap-x-[6.25vw] items-start"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
            rowGap: '2rem',
            columnGap: '6.25vw',
            position: 'relative',
          }}
        >
          {/* Child 1: Natural Stone & Architectural Philosophy */}
          <h3
            className="c-hp-about__text o-reveal col-span-12 md:col-start-7 md:col-span-6 lg:col-start-8 lg:col-span-5 xl:col-span-4"
            data-scroll-reveal
            style={{
              fontFamily: 'var(--font-sans), "Neue Montreal", sans-serif',
              fontSize: 'min(max(1.3rem, 1.85vw), 1.95rem)',
              fontWeight: 300,
              lineHeight: 1.36,
              color: '#e8e6e2',
              letterSpacing: '-0.01em',
              gridRow: 1,
            }}
          >
            Dedicated to the mastery of natural stone, transforming earth’s rarest marble strata into timeless architectural monoliths through ancestral masonry and five-axis precision.
          </h3>

          {/* Child 2: Discover Our Atelier CTA Button */}
          <div
            className="c-hp-about__cta o-reveal o-reveal--delay-1 col-span-12 md:col-start-7 md:col-span-5 lg:col-start-8 lg:col-span-5 pt-4 md:pt-10 lg:pt-14"
            data-scroll-reveal
            style={{
              gridRow: 2,
            }}
          >
            <Link href="/brands" className="o-button-arrow group" aria-label="Discover our atelier">
              <span>Discover Our Atelier</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ stroke: '#c9c2ac', strokeWidth: 1.75 }}
                aria-hidden="true"
              >
                <polyline points="4.657,3.64 16.304,3.64 16.304,15.287" />
                <line x1="3.77" y1="16.281" x2="16.304" y2="3.64" />
              </svg>
            </Link>
          </div>

          {/* Child 3: Workshop Stacked Slabs Photo (Original Flush Left Edge with -ml-[6.25vw] and Parallax 1) */}
          <div
            ref={media1Ref}
            className="c-hp-about__media o-reveal o-reveal--delay-1 col-span-10 md:col-start-1 md:col-span-5 lg:col-span-5 md:row-start-2 md:row-span-2 -ml-[6.25vw] will-change-transform"
            data-scroll-reveal
            data-scroll-parallax="1"
            style={{
              marginLeft: '-6.25vw',
              gridRow: '2 / span 2',
              willChange: 'transform',
            }}
          >
            <div
              className="c-hp-about__figure o-figure o-figure-curtain o-figure-curtain--delay-1 relative w-full overflow-hidden"
              style={{
                position: 'relative',
                height: 0,
                paddingBottom: '133.33%', // 4:3 architectural portrait ratio
                backgroundColor: '#303030',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
              }}
            >
              <div
                className="o-figure__wrapper absolute inset-0 overflow-hidden"
                style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
              >
                <div
                  className="o-figure__image absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out hover:scale-[1.03]"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: "url('/assets/about/dsc00290_copia.1880x0.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 50%',
                  }}
                  role="img"
                  aria-label="Artisan craftsman in workshop alongside stacked marble slabs"
                />
              </div>
            </div>
          </div>

          {/* Child 4: Touching Veined Marble Video (Bottom-Right Media with Parallax 2) */}
          <div
            ref={media2Ref}
            className="c-hp-about__image o-reveal o-reveal--delay-2 col-start-5 col-span-8 md:col-start-10 md:col-span-3 self-end will-change-transform pt-12 md:pt-0"
            data-scroll-reveal
            data-scroll-parallax="2"
            style={{
              gridRow: '3 / span 1',
              alignSelf: 'flex-end',
              willChange: 'transform',
            }}
          >
            <div
              className="c-hp-about__figure o-figure o-figure-curtain o-figure-curtain--delay-2 relative w-full overflow-hidden"
              style={{
                position: 'relative',
                height: 0,
                paddingBottom: '133.33%', // 4:3 architectural portrait ratio
                backgroundColor: '#303030',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
              }}
            >
              <div
                className="o-figure__wrapper absolute inset-0 overflow-hidden"
                style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
              >
                <video
                  className="o-figure__video absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.03]"
                  loop
                  playsInline
                  muted
                  autoPlay
                  preload="auto"
                  src="/assets/about/video-chi-siamo-hp_03.mp4"
                  poster="/assets/about/copertina-video-chi-siamo-hp.1900x0.jpg"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
