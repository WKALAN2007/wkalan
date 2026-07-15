"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Chapter1Stop() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const posterScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -40]);

  return (
    <section
      ref={ref}
      className="relative flex h-dvh items-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background photo — covers entire frame */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: posterScale }}
      >
        <img
          src="/hero-surf.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        {/* Cinematic overlay — lighter so image dominates */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
      </motion.div>

      {/* Poster typography */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-[var(--container-max)] px-[var(--container-padding)]"
        style={{ opacity: textOpacity, y: textY }}
      >
        <motion.div
          className="flex flex-col gap-8"
          initial="hidden"
          animate="visible"
        >
          {/* Top line */}
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.2em] text-[#C9A84C]/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Digital Identity Studio
          </motion.p>

          {/* Main poster text */}
          <motion.h1
            className="font-heading text-[clamp(3.5rem,12vw,9rem)] leading-[0.9] tracking-[-0.03em] text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            品味
            <br />
            人生
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="max-w-md text-base leading-relaxed text-white/40 sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.6 }}
          >
            Every creator has a story worth understanding.
          </motion.p>

          {/* Bottom line */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.0 }}
          >
            <div className="h-[1px] w-16 bg-[#C9A84C]/30" />
            <span className="font-heading text-lg tracking-[0.08em] text-[#C9A84C]/50">
              WKALAN
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute inset-x-0 bottom-12 z-10 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.4 }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-[1px] overflow-hidden bg-white/10">
            <motion.div
              className="h-full w-full bg-white/40"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
