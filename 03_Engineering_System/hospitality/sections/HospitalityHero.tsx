"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const slides = [
  {
    image: "/hospitality/hero/hero-1.jpg",
    title: "Guided by Aurelia:",
    subtitle: "The Greek Isles",
    description:
      "A journey through the Cyclades — where ancient stone meets endless blue, and every sunset tells a story worth crossing oceans for.",
    cta: "Discover",
  },
  {
    image: "/hospitality/hero/hero-2.jpg",
    title: "The Art of Arrival",
    subtitle: "",
    description:
      "From the moment you step through our doors, every sense is engaged. The scent of sea salt. The touch of linen. The quiet hum of a place that has been waiting for you.",
    cta: "Explore",
  },
  {
    image: "/hospitality/hero/hero-3.jpg",
    title: "Across Land & Sea",
    subtitle: "",
    description:
      "Private sailing, clifftop dining, and hidden coves known only to those who call this island home. This is the Aurelia way.",
    cta: "Discover",
  },
];

export function HospitalityHero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - r.left) / r.width);
      mouseY.set((e.clientY - r.top) / r.height);
    },
    [mouseX, mouseY]
  );

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#1C1C1A]"
      onMouseMove={handleMouseMove}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ken Burns slow zoom */}
          <motion.img
            src={slides[current].image}
            alt=""
            className="h-full w-full object-cover"
            initial={{ scale: 1 }}
            animate={{
              scale: 1.08,
              x: springX.get() * 20 - 10,
              y: springY.get() * 20 - 10,
            }}
            transition={{
              scale: { duration: 6, ease: "linear" },
            }}
            style={{ x: springX, y: springY }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Text content with stagger */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            className="flex flex-col items-center gap-4"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Label */}
            <motion.p
              className="text-xs tracking-[0.25em] text-white/50"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
                },
                exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
              }}
            >
              AURELIA HOTELS & RESORTS
            </motion.p>

            {/* Heading */}
            <motion.h1
              className="font-heading text-4xl leading-[1.1] tracking-[-0.01em] text-white sm:text-6xl md:text-7xl"
              variants={{
                hidden: { opacity: 0, y: 24, letterSpacing: "0.05em" },
                visible: {
                  opacity: 1,
                  y: 0,
                  letterSpacing: "-0.01em",
                  transition: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                },
                exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
              }}
            >
              {slides[current].title}
              {slides[current].subtitle && (
                <>
                  <br />
                  {slides[current].subtitle}
                </>
              )}
            </motion.h1>

            {/* Divider */}
            <motion.div
              className="h-[1px] w-16 bg-white/30"
              variants={{
                hidden: { width: 0, opacity: 0 },
                visible: {
                  width: 64,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
                },
                exit: { width: 0, opacity: 0, transition: { duration: 0.3 } },
              }}
            />

            {/* Description */}
            <motion.p
              className="max-w-lg text-sm leading-relaxed text-white/50"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                },
                exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
              }}
            >
              {slides[current].description}
            </motion.p>

            {/* CTA */}
            <motion.a
              href="#accommodations"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("accommodations")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-4 inline-block border border-[var(--color-accent-dark)] px-8 py-3 text-xs tracking-[0.15em] text-[var(--color-accent-dark)] no-underline transition-colors hover:bg-[var(--color-accent-dark)] hover:text-white"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] },
                },
                exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
              }}
            >
              {slides[current].cta}
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide controls */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 z-20 flex items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <button
          onClick={prev}
          className="text-[10px] tracking-[0.15em] text-white/40 transition-colors hover:text-white/70"
          aria-label="Previous"
        >
          PREV
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="relative h-[6px] rounded-full transition-all duration-300"
              style={{
                width: i === current ? 24 : 6,
                background: i === current
                  ? "rgba(255,255,255,0.8)"
                  : "rgba(255,255,255,0.3)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="text-[10px] tracking-[0.15em] text-white/40 transition-colors hover:text-white/70"
          aria-label="Next"
        >
          NEXT
        </button>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="ml-2 text-[10px] tracking-[0.15em] text-white/40 transition-colors hover:text-white/70"
          aria-label={isPaused ? "Play" : "Pause"}
        >
          {isPaused ? "PLAY" : "PAUSE"}
        </button>
      </motion.div>

      {/* Slide counter */}
      <motion.div
        className="absolute bottom-10 right-10 z-20 text-xs tracking-[0.15em] text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </motion.div>
    </section>
  );
}
