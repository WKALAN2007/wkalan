"use client";

import { motion } from "framer-motion";

const headlineWords = "Clothes worn for living rather than being seen.".split(" ");

export function FashionManifesto() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F0EDE8] px-8">
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-10 text-center">
        {/* Chapter label */}
        <motion.span
          className="text-xs tracking-[0.25em] text-[#B8B0A0]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.7 } },
          }}
        >
          第三章 · 哲学
        </motion.span>

        {/* Word-by-word headline reveal */}
        <p className="font-heading text-3xl leading-relaxed tracking-[-0.01em] text-[#1E1E1C] sm:text-4xl md:text-5xl">
          <motion.span
            className="inline-flex flex-wrap justify-center gap-x-[0.3em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
            }}
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={word + i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        </p>

        {/* Divider */}
        <motion.div
          className="h-[1px] w-16 bg-[#D4CEC6]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        />

        {/* Body */}
        <motion.p
          className="max-w-lg text-sm leading-relaxed text-[#6B6B68]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          We believe in timeless silhouettes, honest materials, and the quiet confidence
          that comes from wearing something made with intention. Every garment is designed
          to be lived in — worn, washed, loved, and worn again. No seasons. No trends.
          Just clothes that earn their place in your life.
        </motion.p>

        {/* Closing line */}
        <motion.p
          className="mt-4 font-heading text-lg italic tracking-[-0.01em] text-[#8C8880]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          No logos. No trends. Just clothes that feel like home.
        </motion.p>
      </div>
    </section>
  );
}
