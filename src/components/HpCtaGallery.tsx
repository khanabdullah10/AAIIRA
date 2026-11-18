'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface GalleryItem {
  id: number;
  image: string;
  alt: string;
  title: string;
  category: string;
  flexGrow: number;
  zIndex: number;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    image: '/assets/creations/creation-1-apice.jpg',
    alt: 'Apice angled architectural marble monolith',
    title: 'Apice',
    category: 'Sculptural Monolith',
    flexGrow: 1.15,
    zIndex: 1,
  },
  {
    id: 2,
    image: '/assets/creations/creation-2-fluted.jpg',
    alt: 'Fluted stone bench with chiseled tactile grooves',
    title: 'Fluted Form',
    category: 'Architectural Bench',
    flexGrow: 0.95,
    zIndex: 3,
  },
  {
    id: 3,
    image: '/assets/creations/creation-3-stool.jpg',
    alt: 'Solid travertine arched sculptural stool',
    title: 'Arco Stool',
    category: 'Travertine Seat',
    flexGrow: 1.25,
    zIndex: 2,
  },
  {
    id: 4,
    image: '/assets/creations/creation-4-totem.jpg',
    alt: 'Monumental geometric stone chair monolith',
    title: 'Totem Chair',
    category: 'Monolithic Throne',
    flexGrow: 0.9,
    zIndex: 4,
  },
  {
    id: 5,
    image: '/assets/creations/creation-5-prism.jpg',
    alt: 'Honed dark obsidian stone prism apex',
    title: 'Prism Apex',
    category: 'Geometric Apex',
    flexGrow: 1.1,
    zIndex: 2,
  },
  {
    id: 6,
    image: '/assets/creations/creation-6-egg.jpg',
    alt: 'Carved granite egg resting in deep marble washbasin',
    title: 'Ovo Basin',
    category: 'Curated Washbasin',
    flexGrow: 0.95,
    zIndex: 3,
  },
];

interface ParsedCard {
  el: HTMLElement;
  x: number;
  y: number;
  oldX: number;
  oldY: number;
  initialX: number;
  initialY: number;
}

const CREATIONS_LETTERS = ['C', 'R', 'E', 'A', 'T', 'I', 'O', 'N', 'S'];

export default function HpCtaGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const parsedItemsRef = useRef<ParsedCard[]>([]);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const isInViewRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Trigger is-inview when visible in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInViewRef.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.05, rootMargin: '100px 0px 100px 0px' }
    );
    observer.observe(container);

    // Measure cards for the repulsion physics engine
    const measureCards = () => {
      parsedItemsRef.current = itemsRef.current
        .filter((el): el is HTMLLIElement => el !== null)
        .map((el) => {
          const rect = el.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + window.scrollY + rect.height / 2;
          return {
            el,
            x: centerX,
            y: centerY,
            oldX: centerX,
            oldY: centerY,
            initialX: centerX,
            initialY: centerY,
          };
        });
    };

    measureCards();
    window.addEventListener('resize', measureCards, { passive: true });

    // Reverse-engineered Scalvini polar vector repulsion physics engine (Module 4289)
    // Optimized with hardware-composited direct translate3d updates (0 GC / 0 allocation overhead)
    let reqId: number;
    let targetMouse = { x: -9999, y: -9999 };
    let currentMouse = { x: -9999, y: -9999 };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = e.pageX;
      targetMouse.y = e.pageY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const physicsLoop = () => {
      reqId = requestAnimationFrame(physicsLoop);

      // Suspend physics compute if offscreen or tab is backgrounded
      if (!isInViewRef.current || document.hidden) return;

      // Smooth mouse position tracking
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.14;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.14;

      if (currentMouse.x < 0 || parsedItemsRef.current.length === 0) return;

      const items = parsedItemsRef.current;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const dx = item.x - currentMouse.x;
        const dy = item.y - currentMouse.y;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);

        // Scalvini polar repulsion formula: 1000 / dist
        if (dist > 5 && dist < 700) {
          const angle = Math.atan2(dy, dx);
          const force = Math.min(32, 1150 / dist);

          item.x += Math.cos(angle) * force;
          item.y += Math.sin(angle) * force;
        }

        // Spring damping restoring to resting position
        item.x += 0.05 * (item.oldX - item.x);
        item.y += 0.05 * (item.oldY - item.y);

        const offsetX = item.x - item.initialX;
        const offsetY = item.y - item.initialY;

        // Apply hardware-composited transform directly with sub-pixel quantization
        if (Math.abs(offsetX) > 0.02 || Math.abs(offsetY) > 0.02) {
          item.el.style.transform = `translate3d(${offsetX.toFixed(2)}px, ${offsetY.toFixed(2)}px, 0)`;
        } else if (item.el.style.transform !== '') {
          item.el.style.transform = '';
        }
      }
    };

    physicsLoop();

    return () => {
      cancelAnimationFrame(reqId);
      observer.disconnect();
      window.removeEventListener('resize', measureCards);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="creations-gallery"
      className={`c-hp-cta-gallery relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden py-16 sm:py-24 ${
        isInView ? 'is-inview' : ''
      }`}
      data-component="hp-cta-gallery"
      data-scroll-reveal
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        padding: '5vw 0',
      }}
    >
      {/* Background layer: Placed at zIndex: 10 so the 3D broken stone (StoneCanvas at zIndex: 20) is visible in front of it */}
      <div
        className="c-hp-cta-gallery__bg absolute inset-0 pointer-events-none"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#212121',
          zIndex: 10,
        }}
        aria-hidden="true"
      />

      {/* Dynamic CSS styles for Scalvini Marmi's exact .o-chars-reveal character rolling animation */}
      <style jsx global>{`
        .o-chars-reveal {
          --chars-reveal: 0;
        }
        .o-chars-reveal:hover,
        .o-chars-reveal:focus-visible {
          --chars-reveal: 1;
        }
        .o-chars-reveal__lines {
          --transition-duration: 0.65s;
          display: inline-flex;
          flex-direction: column;
          overflow: hidden;
          height: 1.05em;
          vertical-align: middle;
        }
        .o-chars-reveal__line {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 1em;
          line-height: 1;
        }
        .o-chars-reveal__line > span {
          display: inline-block;
          transform: translateY(calc(var(--chars-reveal) * -100%));
          transition: transform 0.65s cubic-bezier(0.23, 1, 0.32, 1);
          will-change: transform;
        }
        .o-chars-reveal:hover .o-chars-reveal__line > span,
        .o-chars-reveal:focus-visible .o-chars-reveal__line > span {
          transition-delay: calc(var(--index) * 0.022s);
        }

        /* Directional Underline: Expands left-to-right, contracts to the right */
        .c-hp-cta-gallery__title-link::before {
          position: absolute;
          z-index: -1;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: #c9c2ac;
          content: '';
          pointer-events: none;
          transform-origin: 100% 50%;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          will-change: transform;
          transform: scaleX(0);
        }
        .c-hp-cta-gallery__title-link:hover::before,
        .c-hp-cta-gallery__title-link:focus-visible::before {
          transform-origin: 0 50%;
          transform: scaleX(1);
        }
      `}</style>

      {/* =========================================================================
          CENTRAL MONUMENTAL TITLE: "CREATIONS"
          Exact Scalvini split-chars mechanical rolling letters + directional underline
          Positioned at zIndex: 40 (In front of 3D stone at zIndex: 20 and cards at zIndex: 30)
      ========================================================================= */}
      <h2
        className="c-hp-cta-gallery__title pointer-events-auto select-none"
        style={{
          position: 'absolute',
          zIndex: 40,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          textAlign: 'center',
          userSelect: 'none',
        }}
      >
        <a
          href="#creations-gallery"
          className="c-hp-cta-gallery__title-link o-chars-reveal o-chars-reveal--repeat-index relative inline-block uppercase text-[#c9c2ac] hover:text-[#f4f2ee] tracking-[-0.015em] transition-colors duration-300 group cursor-pointer"
          data-component="split-chars"
          style={{
            fontFamily: 'var(--font-extended), "Neue Montreal", sans-serif',
            fontSize: 'min(max(2.8rem, 8.2vw), 6.4rem)',
            fontWeight: 400,
            textDecoration: 'none',
            letterSpacing: '-0.015em',
            lineHeight: 1,
            textShadow: '0 4px 24px rgba(0, 0, 0, 0.65)',
          }}
          aria-label="Creations"
        >
          <span className="o-chars-reveal__lines">
            {/* Top row of characters (slides up out of view on hover) */}
            <span className="o-chars-reveal__line">
              {CREATIONS_LETTERS.map((letter, i) => (
                <span key={`row1-${i}`} style={{ '--index': i } as React.CSSProperties}>
                  {letter}
                </span>
              ))}
            </span>

            {/* Bottom duplicate row of characters (slides up into view from below on hover) */}
            <span className="o-chars-reveal__line" aria-hidden="true">
              {CREATIONS_LETTERS.map((letter, i) => (
                <span key={`row2-${i}`} style={{ '--index': i } as React.CSSProperties}>
                  {letter}
                </span>
              ))}
            </span>
          </span>
        </a>
      </h2>

      {/* =========================================================================
          HORIZONTAL GALLERY RIBBON (6 Overlapping Marble Figures)
          Layered with alternating z-indexes at zIndex: 30+ (In front of 3D stone at zIndex: 20),
          interactive hover zoom, brightening, and organic polar vector mouse repulsion parting
      ========================================================================= */}
      <ul
        className="c-hp-cta-gallery__list pointer-events-auto flex justify-around items-center w-full px-2 sm:px-6 md:px-12 m-0 list-none"
        style={{
          position: 'relative',
          zIndex: 30,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          listStyle: 'none',
        }}
      >
        {GALLERY_ITEMS.map((item, index) => {
          const isHovered = hoveredCardId === item.id;
          return (
            <li
              key={item.id}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              onMouseEnter={() => setHoveredCardId(item.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              className={`c-hp-cta-gallery__list-item relative list-none -mx-3 sm:-mx-6 md:-mx-8 lg:-mx-10 cursor-pointer ${
                index >= 4 ? 'hidden md:block' : 'block'
              }`}
              style={{
                position: 'relative',
                flex: '1 1 0',
                flexGrow: item.flexGrow,
                zIndex: isHovered ? 38 : 30 + item.zIndex,
                willChange: 'transform',
                transition: 'z-index 0s',
              }}
            >
              {/* Aspect Ratio Box with statuesque portrait ratio & Scalvini Curtain Wipe Reveal */}
              <div
                className="c-hp-cta-gallery__figure o-figure relative w-full overflow-hidden rounded-sm transition-all duration-700 ease-out group"
                data-scroll-reveal
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 0,
                  paddingBottom: '128%', // Vertical architectural ratio matching Scalvini
                  transform: isHovered ? 'scale(1.06) translateY(-4px)' : 'scale(1.01)',
                  boxShadow: isHovered
                    ? '0 32px 72px rgba(0, 0, 0, 0.95), 0 0 24px rgba(255, 255, 255, 0.06)'
                    : '0 20px 50px rgba(0, 0, 0, 0.75)',
                  '--stagger': index * 0.9,
                } as React.CSSProperties}
              >
                <div
                  className="o-figure__wrapper absolute inset-0 overflow-hidden bg-[#242426]"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    overflow: 'hidden',
                    backgroundColor: '#242426',
                  }}
                >
                  {/* Background Image with Scalvini zoom-out reveal & hover illumination */}
                  <div
                    className="o-figure__image absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: '50% 50%',
                      transform: isHovered ? 'scale(1.08)' : undefined,
                      '--stagger': index * 0.9,
                    } as React.CSSProperties}
                    aria-label={item.alt}
                  >
                    {/* Exact Scalvini dark overlay (.o-figure__image::after opacity: .3):
                        Dims from 0.3 down to 0 on hover to illuminate the piece */}
                    <div
                      className="absolute inset-0 bg-black transition-opacity duration-500 ease-out"
                      style={{
                        opacity: isHovered ? 0.0 : 0.32,
                      }}
                      aria-hidden="true"
                    />

                    {/* Subtle caption reveal at the bottom on hover */}
                    <div
                      className={`absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 flex flex-col justify-end ${
                        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <span className="font-extended text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#c9c2ac] font-medium">
                        {item.title}
                      </span>
                      <span className="font-sans text-[9px] sm:text-[10px] tracking-wider text-white/70">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
