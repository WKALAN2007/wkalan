"use client";

import { motion } from "framer-motion";

export function NorthCTA() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-white px-6">
      <motion.div className="flex flex-col items-center gap-8 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
        <motion.span
          className="text-xs tracking-[0.25em] text-gray-400"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7 } } }}
        >
          JOIN US
        </motion.span>
        <motion.h2
          className="font-heading text-3xl tracking-[-0.01em] text-gray-800 sm:text-5xl"
          variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
        >
          Let&apos;s build something
          <br />
          people will remember.
        </motion.h2>
        <motion.a
          href="mailto:hello@north.memory"
          className="text-sm tracking-[0.06em] text-[var(--color-accent)] underline underline-offset-4 transition-colors hover:text-gray-700"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, delay: 0.4 } } }}
        >
          hello@north.memory
        </motion.a>
      </motion.div>
    </section>
  );
}
