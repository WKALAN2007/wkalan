"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function BasketballHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen min-h-[700px] items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Subtle radial glow behind text */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)]" />

      {/* Main Typography */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 px-6 text-center"
        style={{ scale: textScale, opacity: textOpacity }}
      >
        <motion.h1
          className="text-[12vw] font-bold leading-[0.9] tracking-[0.03em] text-white sm:text-[10vw] md:text-[8vw] lg:text-[7vw]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
        >
          小白剪
          <br />
          了個球
        </motion.h1>
        <motion.p
          className="text-sm tracking-[0.25em] text-[#c9a84c] sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          每一刀，都有情绪
        </motion.p>
      </motion.div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
