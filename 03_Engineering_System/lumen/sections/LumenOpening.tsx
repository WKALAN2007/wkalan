"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function LumenOpening() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Multi-layer parallax — background slow, midground medium, foreground fast
  const bgScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.08]);
  const midScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.03]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 0.72]);
  const textY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-18%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-end overflow-hidden"
      style={{ background: "var(--lumen-bg)" }}
    >
      {/* Layer 1: Background — slowest parallax */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1800&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <motion.div
          className="absolute inset-0"
          style={{ background: "var(--lumen-bg)", opacity: overlayOpacity }}
        />
      </motion.div>

      {/* Layer 2: Midground accent shapes — medium parallax */}
      <motion.div className="absolute inset-0 z-[1]" style={{ scale: midScale }}>
        <div
          className="absolute top-[20%] left-[5%] w-[1px] h-32 hidden lg:block"
          style={{ background: "var(--lumen-accent)", opacity: 0.2 }}
        />
        <div
          className="absolute top-[35%] right-[10%] w-[1px] h-24 hidden lg:block"
          style={{ background: "var(--lumen-accent)", opacity: 0.15 }}
        />
        <div
          className="absolute bottom-[30%] left-[15%] w-32 h-[1px] hidden lg:block"
          style={{ background: "var(--lumen-border)", opacity: 0.3 }}
        />
      </motion.div>

      {/* Gradient fade at bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-64 bg-gradient-to-t from-[var(--lumen-bg)] to-transparent" />

      {/* Content — anchored to bottom */}
      <motion.div
        className="relative z-20 w-full pb-16 sm:pb-24"
        style={{ y: textY, opacity: textOpacity }}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <div className="max-w-3xl">
            {/* Label — blur reveal */}
            <motion.p
              className="text-xs tracking-[0.25em] uppercase"
              style={{ color: "var(--lumen-text-tertiary)" }}
              variants={{
                hidden: { opacity: 0, filter: "blur(6px)" },
                visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              AI Knowledge Workspace
            </motion.p>

            {/* Headline — blur reveal */}
            <motion.h1
              className="mt-8 font-heading text-4xl leading-[1.05] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ color: "var(--lumen-text-primary)" }}
              variants={{
                hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              Helping people
              <br />
              think clearly.
            </motion.h1>

            {/* Accent line — blur reveal */}
            <motion.div
              className="mt-10 h-[1px] w-20"
              style={{ background: "var(--lumen-accent)" }}
              variants={{
                hidden: { scaleX: 0, filter: "blur(4px)" },
                visible: { scaleX: 1, filter: "blur(0px)", transition: { duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] } },
              }}
            />

            {/* Subtitle — blur reveal */}
            <motion.p
              className="mt-8 max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: "var(--lumen-text-secondary)" }}
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              一個 AI 知識工作平台。不是為了讓你做得更快，而是讓你想得更清楚。
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <motion.span
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ color: "var(--lumen-text-dim)" }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
        </motion.span>
      </motion.div>
    </section>
  );
}
