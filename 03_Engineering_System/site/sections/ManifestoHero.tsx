"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ManifestoHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--wk-bg)]"
    >
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 px-6 text-center"
        style={{ y: textY, opacity, scale }}
      >
        <motion.h1
          className="font-heading text-[clamp(3rem,10vw,8rem)] leading-[1.05] tracking-[-0.02em] text-[var(--wk-text-primary)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
        >
          做一个
          <br />
          围绕你的网站。
        </motion.h1>

        <motion.p
          className="max-w-lg text-base leading-relaxed text-[var(--wk-text-secondary)] sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          帮人做网站。快。干净。不套模板。从一次对话开始。
        </motion.p>

        <motion.div
          className="mt-4 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.8 }}
        >
          <div className="h-10 w-[1px] overflow-hidden bg-[var(--wk-border)]">
            <motion.div
              className="h-full w-full bg-[var(--wk-text-tertiary)]"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[var(--wk-bg)] to-transparent" />
    </section>
  );
}
