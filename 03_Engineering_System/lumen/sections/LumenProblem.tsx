"use client";

import { motion } from "framer-motion";

export function LumenProblem() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden" style={{ background: "var(--lumen-bg)" }}>
      {/* Entire block slides in from right */}
      <motion.div
        className="relative z-10 mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: { x: 120, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
        }}
      >
        <motion.span
          className="text-xs tracking-[0.25em] uppercase" style={{ color: "var(--lumen-text-dim)" }}
          variants={{
            hidden: { opacity: 0, filter: "blur(4px)" },
            visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, delay: 0.2 } },
          }}
        >
          The Problem
        </motion.span>

        <motion.p
          className="mt-16 font-heading text-3xl leading-[1.15] tracking-[-0.01em] sm:text-5xl md:text-6xl"
          style={{ color: "var(--lumen-text-primary)" }}
          variants={{
            hidden: { opacity: 0, filter: "blur(8px)" },
            visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          真正的挑戰從來不是資訊不足，
          <br />
          而是無法理解、整理與運用。
        </motion.p>

        <motion.div
          className="mx-auto mt-12 h-[1px] w-16" style={{ background: "var(--lumen-border-strong)" }}
          variants={{
            hidden: { scaleX: 0, filter: "blur(2px)" },
            visible: { scaleX: 1, filter: "blur(0px)", transition: { duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] } },
          }}
        />

        <motion.p
          className="mx-auto mt-10 max-w-md text-sm leading-relaxed sm:text-base"
          style={{ color: "var(--lumen-text-tertiary)" }}
          variants={{
            hidden: { opacity: 0, filter: "blur(4px)" },
            visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          在資訊爆炸的時代，人們每天閱讀大量文件、參加會議、觀看影片、整理筆記。但真正的挑戰，從來不是資訊不足，而是無法理解、整理與運用。我們打造 Lumen，就是為了解決這個問題。
        </motion.p>
      </motion.div>
    </section>
  );
}
