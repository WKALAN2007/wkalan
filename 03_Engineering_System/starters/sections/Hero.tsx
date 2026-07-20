"use client";

import { motion } from "framer-motion";

/**
 * Hero — one sentence. Who they are. What they do. CTA.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[90svh] items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center px-6 max-w-2xl">
        <motion.span
          className="text-sm font-medium tracking-wide text-neutral-500"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* ══ UPDATE: tagline ══ */}
          TAGLINE
        </motion.span>

        <motion.h1
          className="text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] tracking-[-0.02em] font-bold"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* ══ UPDATE: main headline ══ */}
          一个围绕
          <br />
          你的网站。
        </motion.h1>

        <motion.p
          className="max-w-md text-lg leading-relaxed text-neutral-500"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* ══ UPDATE: subheadline ══ */}
          快。干净。不套模板。
        </motion.p>

        <motion.div
          className="flex items-center gap-4 mt-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-6 py-3 text-sm font-medium transition-all hover:border-neutral-400 hover:bg-neutral-50"
          >
            了解我 →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-700"
          >
            联系我 →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
