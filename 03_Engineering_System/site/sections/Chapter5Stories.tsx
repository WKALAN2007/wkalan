"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";

const stories = [
  {
    name: "Photographer",
    banner: "/mori-banner.jpg",
    href: "/mori",
    theme: "warm" as const,
    objectPosition: "100% 50%" as const,
    noBanner: true,
  },
  {
    name: "Fashion",
    banner: "/fashion/hero.jpg",
    href: "/fashion",
    theme: "cool" as const,
    objectPosition: "100% 50%" as const,
    noBanner: true,
  },
  {
    name: "Content Creator",
    banner: "/yichen-hero.jpg",
    href: "/yichen",
    theme: "warm" as const,
    objectPosition: "50% 50%" as const,
    noBanner: true,
  },
  {
    name: "Start-up",
    banner: "/north-banner.jpg",
    href: "/north",
    theme: "warm" as const,
    objectPosition: "50% 50%" as const,
    noBanner: true,
  },
];

// Duplicate for seamless infinite loop (4 stories × 4 = 16 cards)
const LOOP_STORIES = [...stories, ...stories, ...stories, ...stories];

/* ─────────────────────────────────────────
   Inject keyframes
   ───────────────────────────────────────── */
function injectKeyframes() {
  if (typeof document === "undefined") return;
  if (document.getElementById("wk-kf")) return;
  const s = document.createElement("style");
  s.id = "wk-kf";
  s.textContent = `
@keyframes pf {
  0%   { translate: 0 0; scale: 1; opacity: 0; }
  15%  { opacity: 1; }
  50%  { translate: var(--dx,10px) -120px; scale: 1.6; opacity: 0.5; }
  85%  { opacity: 0.1; }
  100% { translate: calc(var(--dx,10px) * -0.5) -280px; scale: 0.4; opacity: 0; }
}
@keyframes sl {
  0%   { opacity: 0; transform: translateX(-100%) rotate(-8deg); }
  30%  { opacity: 1; }
  70%  { opacity: 1; }
  100% { opacity: 0; transform: translateX(120%) rotate(-8deg); }
}
@keyframes auto-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes auto-scroll-reverse {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
@keyframes auto-scroll-mobile {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}`;
  document.head.appendChild(s);
}

/* ─────────────────────────────────────────
   Particles
   ───────────────────────────────────────── */
const PARTICLE_DATA = Array.from({ length: 14 }, () => {
  const warm = Math.random() < 0.4;
  const cool = !warm && Math.random() < 0.5;
  return {
    s: 2 + Math.random() * 4,
    l: Math.random() * 100,
    d: Math.random() * 4,
    dur: 3 + Math.random() * 4,
    dx: ((Math.random() - 0.5) * 60).toFixed(0),
    o: 0.15 + Math.random() * 0.35,
    bg: warm
      ? "rgba(201,168,76,1)"
      : cool
        ? "rgba(126,184,160,1)"
        : "rgba(240,230,211,1)",
    glw: warm
      ? "0 0 4px rgba(201,168,76,0.6)"
      : cool
        ? "0 0 4px rgba(126,184,160,0.5)"
        : "0 0 3px rgba(240,230,211,0.5)",
  };
});

function Particles({ hovered }: { hovered: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PARTICLE_DATA.map((p, i) => (
        <span
          key={i}
          className="absolute block rounded-full"
          style={{
            width: p.s,
            height: p.s,
            left: `${p.l}%`,
            bottom: "-8px",
            opacity: hovered ? p.o : 0,
            background: p.bg,
            boxShadow: p.glw,
            animation: hovered ? `pf ${p.dur}s ${p.d}s ease-in-out infinite` : "none",
            transition: "opacity 0.8s ease",
            "--dx": `${p.dx}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   Speed lines
   ───────────────────────────────────────── */
function SpeedLines({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          className="absolute block"
          style={{
            left: "-25%",
            top: `${5 + (i / 9) * 90}%`,
            width: `${50 + Math.random() * 90}%`,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(240,230,211,0.5) 30%, rgba(240,230,211,0.5) 70%, transparent)",
            animation: `sl ${0.4 + Math.random() * 0.3}s ${i * 0.025}s ease-out forwards`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   Scanlines
   ───────────────────────────────────────── */
function Scanlines({ hovered }: { hovered: boolean }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2]"
      style={{
        opacity: hovered ? 0.04 : 0,
        transition: "opacity 0.8s ease",
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)",
      }}
      aria-hidden="true"
    />
  );
}

/* ─────────────────────────────────────────
   Color Script Overlay
   ───────────────────────────────────────── */
function ColorScriptOverlay({
  hovered,
  theme,
}: {
  hovered: boolean;
  theme: "warm" | "cool";
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-700"
      style={{
        opacity: hovered ? 0.25 : 0,
        background:
          theme === "warm"
            ? "radial-gradient(ellipse 120% 120% at 50% 50%, rgba(201,168,76,0.35) 0%, rgba(201,168,76,0.08) 40%, transparent 70%)"
            : "radial-gradient(ellipse 120% 120% at 50% 50%, rgba(126,184,160,0.3) 0%, rgba(79,107,130,0.08) 40%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}

/* ─────────────────────────────────────────
   StoryCard
   ───────────────────────────────────────── */
function StoryCard({
  story,
  index,
}: {
  story: (typeof stories)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const mx = useSpring(0.5, { stiffness: 50, damping: 20 });
  const my = useSpring(0.5, { stiffness: 50, damping: 20 });

  const rotateY = useTransform(mx, [0, 1], [8, -8]);
  const rotateX = useTransform(my, [0, 1], [2, -2]);

  const imgOffsetX = useTransform(mx, [0, 1], ["-85%", "0%"]);
  const imgOffsetY = useTransform(my, [0, 1], ["-4%", "4%"]);

  const hoverScale = useSpring(hovered ? 1.03 : 1, { stiffness: 120, damping: 18 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const r = cardRef.current.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    },
    [mx, my]
  );

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my]);

  const isWarm = story.theme === "warm";

  return (
    <motion.a
      ref={cardRef}
      href={story.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex-shrink-0 flex flex-col overflow-hidden border border-[var(--color-border)] bg-[#1A1A18]"
      style={{
        width: "clamp(340px, 42vw, 520px)",
        borderRadius: "var(--radius-lg)",
        scale: hoverScale,
        borderColor: hovered
          ? isWarm
            ? "rgba(201,168,76,0.3)"
            : "rgba(126,184,160,0.3)"
          : undefined,
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.22)"
          : "0 2px 8px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.5s ease, border-color 0.5s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SpeedLines active={hovered} />
      <Particles hovered={hovered} />
      <Scanlines hovered={hovered} />
      <ColorScriptOverlay hovered={hovered} theme={story.theme} />

      {(story as any).noBanner ? (
        /* ── Text-only card (no banner) ── */
        <div className="flex aspect-[16/10] items-center justify-center bg-[#1A1A18]">
          <motion.h3
            className="font-heading text-xl sm:text-2xl"
            animate={{
              color: hovered
                ? isWarm
                  ? "rgba(240,230,211,0.95)"
                  : "rgba(200,225,215,0.95)"
                : "rgba(255,255,255,0.8)",
              textShadow: hovered
                ? isWarm
                  ? "0 0 20px rgba(201,168,76,0.3)"
                  : "0 0 20px rgba(126,184,160,0.3)"
                : "none",
            }}
            transition={{ duration: 0.6 }}
          >
            {story.name}
          </motion.h3>
        </div>
      ) : (
        /* ── Image banner card ── */
        <motion.div
          className="relative aspect-[16/10] overflow-hidden bg-[#1A1A18]"
          style={{ rotateY, rotateX }}
        >
          <motion.img
            src={story.banner}
            alt={story.name}
            className="absolute inset-y-0 h-full object-cover"
            style={{
              right: 0,
              width: "200%",
              objectPosition: story.objectPosition,
              x: imgOffsetX,
              y: imgOffsetY,
              filter: hovered
                ? "brightness(1.1) contrast(1.06) saturate(1.15)"
                : "brightness(1) contrast(1) saturate(1)",
            }}
            animate={{
              filter: hovered
                ? "brightness(1.1) contrast(1.06) saturate(1.15)"
                : "brightness(1) contrast(1) saturate(1)",
            }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: hovered ? 0.5 : 0.25,
              transition: "opacity 0.7s ease",
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 pt-16">
            <motion.h3
              className="font-heading text-xl sm:text-2xl"
              animate={{
                color: hovered
                  ? isWarm
                    ? "rgba(240,230,211,0.95)"
                    : "rgba(200,225,215,0.95)"
                  : "rgba(255,255,255,0.8)",
                textShadow: hovered
                  ? isWarm
                    ? "0 0 20px rgba(201,168,76,0.3)"
                    : "0 0 20px rgba(126,184,160,0.3)"
                  : "none",
              }}
              transition={{ duration: 0.6 }}
            >
              {story.name}
            </motion.h3>
          </div>

          <motion.div
            className="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-[2px]"
            animate={{
              opacity: hovered ? 1 : 0,
              background: isWarm
                ? "linear-gradient(90deg, transparent, rgba(201,168,76,0.7), transparent)"
                : "linear-gradient(90deg, transparent, rgba(126,184,160,0.7), transparent)",
            }}
            transition={{ duration: 0.5 }}
            aria-hidden="true"
          />

          <motion.div
            className="pointer-events-none absolute inset-0 z-[5]"
            animate={{
              opacity: hovered ? 1 : 0,
              boxShadow: isWarm
                ? "inset 0 0 0 1px rgba(201,168,76,0.25)"
                : "inset 0 0 0 1px rgba(126,184,160,0.25)",
            }}
            transition={{ duration: 0.5 }}
            aria-hidden="true"
          />
        </motion.div>
      )}
    </motion.a>
  );
}

/* ─────────────────────────────────────────
   Chapter5Stories — auto-scrolling carousel
   ───────────────────────────────────────── */
export function Chapter5Stories() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    injectKeyframes();
  }, []);

  // Total cards: 4 sets of 3 stories = 12 cards
  // Animation moves by 50% (half the track) to create seamless loop
  // Each set of 3 original cards ≈ 25% of the track
  // 50% shift = 2 original sets appear to loop perfectly

  return (
    <section className="bg-[var(--color-surface)] py-[var(--space-section)] overflow-hidden">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        {/* ── Header ── */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            className="flex items-center gap-3 mb-4"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
              Chapter 4
            </span>
            <div className="h-[1px] w-8 bg-[var(--color-border)]" />
          </motion.div>

          <motion.h2
            className="font-heading text-3xl leading-tight text-[var(--color-text-primary)] sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            Stories We&apos;ve Crafted.
          </motion.h2>
        </motion.div>
      </div>

      {/* ── Infinite auto-scroll track ── */}
      <div className="relative">
        {/* Fade edges — soft mask on left & right */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[var(--container-padding)]"
          style={{
            background: "linear-gradient(90deg, var(--color-surface), transparent)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[var(--container-padding)]"
          style={{
            background: "linear-gradient(270deg, var(--color-surface), transparent)",
          }}
          aria-hidden="true"
        />

        {/* The scrolling track — CSS animation, paused on hover */}
        <div
          ref={trackRef}
          className="flex gap-8"
          style={{
            width: "max-content",
            animation: `auto-scroll 45s linear infinite`,
          }}
        >
          {LOOP_STORIES.map((story, i) => (
            <StoryCard key={`${story.name}-${i}`} story={story} index={i % 2} />
          ))}
        </div>

        {/* ── Reverse track ── */}
        <div className="mt-8">
          <div
            className="flex gap-8"
            style={{
              width: "max-content",
              animation: `auto-scroll-reverse 45s linear infinite`,
            }}
          >
            {LOOP_STORIES.map((story, i) => (
              <StoryCard key={`${story.name}-rev-${i}`} story={story} index={i % 2} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom divider ── */}
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)] mt-8">
        <div className="h-[1px] bg-[var(--color-border)]" />
      </div>
    </section>
  );
}
