"use client";

import { motion } from "framer-motion";

export function FashionManifesto() {
  return (
    <section id="manifesto" className="bg-[#F0EDE8] py-24 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#999999] sm:text-xs"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            Our Philosophy
          </motion.span>

          <motion.h2
            className="mt-6 font-heading text-2xl leading-[1.2] text-[#1A1A1A] sm:text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            Clothes worn for living
            <br />
            rather than being seen.
          </motion.h2>

          <motion.p
            className="mt-6 text-sm leading-relaxed text-[#777777] sm:mt-8 sm:text-base"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            This collection begins with a wish to return to the source — the kind
            of garments you reach for without thinking, because they already feel
            familiar. We believe in timeless silhouettes, honest materials, and
            the quiet confidence that comes from wearing something made with
            intention. Every piece is crafted to outlast seasons, not chase them.
          </motion.p>

          <motion.p
            className="mt-4 text-sm leading-relaxed text-[#999999]"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            No logos. No trends. Just clothes that feel like home.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
