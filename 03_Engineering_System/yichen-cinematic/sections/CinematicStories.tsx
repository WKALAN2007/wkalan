"use client";

import { useRef, useEffect, useState } from "react";

interface Story {
  title: string;
  subtitle: string;
  tag: string;
  body: string;
  image?: string;
}

const stories: Story[] = [
  {
    title: "The Last Bookstore on Hefang Street",
    subtitle: "Hangzhou · 2024",
    tag: "CITIES & MEMORY",
    body: "I walked past that bookstore for ten years. One day the shutters were down. A sign said 'Closing After 32 Years.' I realized I had never been inside. I spent three weeks with Mr. Zhou, the owner. The video has been viewed 1.2 million times. More importantly, people in Hangzhou started showing up — not to buy books, just to say thank you.",
  },
  {
    title: "How a Village Learned to Remember, Digitally",
    subtitle: "Guizhou · 2023",
    tag: "TECHNOLOGY & CULTURE",
    body: "A village where the youngest person was 67. The old songs, the recipes, the names of the mountains — all being forgotten. I lived there for six weeks, taught the elders to use WeChat voice messages to record stories. The metrics say this is one of my least-watched videos. It's my favorite.",
  },
  {
    title: "Night Bus No. 28",
    subtitle: "Hangzhou · 2024",
    tag: "URBAN LIFE",
    body: "I couldn't sleep. Got on a random night bus. The driver knew every passenger's stop, their names, what they did for work, whether they'd had a good day. I rode Bus No. 28 every night for two weeks, filming only with available light. Someone commented: 'I've ridden this bus my whole life and never noticed any of this.'",
  },
  {
    title: "What Makes a City Feel Like Home",
    subtitle: "Shanghai · 2025",
    tag: "ARCHITECTURE & DESIGN",
    body: "I asked 50 people in five cities: 'When do you feel most at home?' Nobody mentioned their apartment. They talked about the smell of breakfast stalls, the sound of a specific street corner, the way light falls through plane trees at 4 PM. I made a video about the invisible architecture of belonging.",
  },
];

/* ── Lazy Loaded Image with blur→sharp transition ── */
function LazyImage({ src, alt, tag }: { src?: string; alt: string; tag: string }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className="relative aspect-[4/3] overflow-hidden bg-[#1A1A1A]"
    >
      {inView && src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-all duration-1000"
          style={{
            filter: loaded ? "blur(0px)" : "blur(20px)",
            transform: loaded ? "scale(1)" : "scale(1.05)",
          }}
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#222]">
          <span className="text-[10px] tracking-[0.2em] text-white/10">
            {inView ? "Loading..." : tag}
          </span>
        </div>
      )}
    </div>
  );
}

export function CinematicStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [portalReady, setPortalReady] = useState(false);

  const cardCount = stories.length;
  const totalPanels = cardCount + 1;

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    const lenis = (window as any).__lenis;
    if (!lenis) return;

    const update = ({ scroll }: { scroll: number }) => {
      const el = spacerRef.current;
      if (!el) return;
      const visualTop = el.getBoundingClientRect().top;
      const docTop = visualTop + scroll;
      const vh = window.innerHeight;
      const sectionH = el.offsetHeight;
      const range = sectionH - vh;
      const active = scroll >= docTop && scroll < docTop + range;
      setIsActive(active);
      if (range > 0) {
        setProgress(Math.max(0, Math.min(1, (scroll - docTop) / range)));
      }
    };

    lenis.on("scroll", update);
    update({ scroll: lenis.scroll ?? 0 });
    return () => { lenis.off("scroll", update); };
  }, []);

  const translateX = `-${(progress * (cardCount / totalPanels) * 100).toFixed(2)}%`;

  return (
    <>
      <div
        ref={spacerRef}
        className="relative bg-[#0A0A0A]"
        style={{ height: `${cardCount * 130}vh` }}
      />

      {portalReady && (
        <div
          className="fixed inset-0 z-[90] bg-[#0A0A0A]"
          style={{
            opacity: isActive ? 1 : 0,
            pointerEvents: isActive ? "auto" : "none",
            transition: "opacity 0.6s ease",
          }}
        >
          <div
            className="flex h-full"
            style={{
              transform: `translateX(${translateX})`,
              width: `${totalPanels * 100}vw`,
              transition: "transform 0.05s linear",
            }}
          >
            {/* Intro panel */}
            <div className="flex h-full w-screen shrink-0 items-center px-8 sm:px-16">
              <div className="flex max-w-xl flex-col gap-6">
                <span className="text-xs tracking-[0.25em] text-white/20">
                  CHAPTER 03 · SELECTED STORIES
                </span>
                <h2 className="font-heading text-4xl leading-[1.1] tracking-[-0.01em] text-white/80 sm:text-6xl">
                  Not a portfolio.
                  <br />
                  Stories behind
                  <br />
                  the stories.
                </h2>
                <div className="h-[1px] w-16 bg-white/15" />
                <p className="text-sm leading-relaxed text-white/30">
                  Scroll to explore →
                </p>
              </div>
            </div>

            {/* Story cards with lazy loaded images */}
            {stories.map((story, i) => (
              <div
                key={story.title}
                className="flex h-full w-screen shrink-0 items-center px-8 sm:px-16"
              >
                <div className="grid w-full max-w-[1200px] gap-12 lg:grid-cols-2 lg:gap-24">
                  {/* Lazy loaded image with blur transition */}
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                    <LazyImage
                      src={story.image}
                      alt={story.title}
                      tag={story.tag}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-center gap-6">
                    <span className="text-[10px] tracking-[0.2em] text-[#4A6FA5]/60">
                      {story.tag}
                    </span>
                    <h3 className="font-heading text-3xl tracking-[-0.01em] text-white/85 sm:text-4xl">
                      {story.title}
                    </h3>
                    <span className="text-xs tracking-[0.08em] text-white/25">
                      {story.subtitle}
                    </span>
                    <div className="h-[1px] w-10 bg-white/10" />
                    <p className="text-sm leading-relaxed text-white/35 sm:text-base">
                      {story.body}
                    </p>
                    <div className="mt-2 text-[10px] tracking-[0.15em] text-white/15">
                      {String(i + 1).padStart(2, "0")} / {String(cardCount).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
