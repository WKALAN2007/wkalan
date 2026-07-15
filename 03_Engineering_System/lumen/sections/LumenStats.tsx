"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CountUp } from "./CountUp";
import { ClipReveal } from "./ClipReveal";

const stats = [
  {
    number: "01",
    target: 10000,
    suffix: "+",
    label: "Families preserving memories across 40 countries",
    title: "Global Trust",
    desc: "Across 40 countries, over 10,000 families trust Lumen to preserve their most important stories. Our platform processes millions of documents monthly — each one treated with the same care as a family heirloom.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  },
  {
    number: "02",
    target: 2.5,
    isFloat: true,
    suffix: "M",
    label: "Voice recordings captured and archived forever",
    title: "Audio Preservation",
    desc: "Every voice recording is stored in open, lossless formats — designed to be readable for a century. Your grandchildren should hear your voice, not just read about you. Multi-region backup with encryption by default.",
    image: "https://images.unsplash.com/photo-1434030216411-1b79f4e147c6?w=800&q=80",
  },
  {
    number: "03",
    target: 100,
    suffix: "%",
    label: "Data stored in open formats, readable for a century",
    title: "Future-Proof Storage",
    desc: "No proprietary lock-in. Every document, every recording, every piece of knowledge stored in Lumen is saved in open formats. Readable today. Readable in 2125. That's not a feature — it's a promise.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
];

export function LumenStats() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-28 sm:py-40" style={{ background: "var(--lumen-bg-surface)" }}>
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "var(--lumen-text-tertiary)" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7 } } }}
          >
            Built to Last
          </motion.span>
          <motion.p
            className="mt-6 font-heading text-3xl leading-[1.15] tracking-[-0.01em] sm:text-5xl lg:text-6xl"
            style={{ color: "var(--lumen-text-primary)" }}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
          >
            The numbers behind
            <br />
            the promise.
          </motion.p>
          <motion.div
            className="mt-12 h-[1px] w-full"
            style={{ background: "var(--lumen-border)" }}
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] } } }}
          />
        </motion.div>

        {/* Accordion Stats — alkares durability style */}
        <div className="flex flex-col">
          {stats.map((s, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={s.number}
                className="cursor-pointer"
                style={{ borderBottom: "1px solid var(--lumen-border)" }}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.1 * i } },
                }}
              >
                <div className="flex items-center gap-4 sm:gap-8 py-6 sm:py-8">
                  <span
                    className="font-mono text-sm sm:text-lg shrink-0 transition-colors duration-500"
                    style={{ color: isActive ? "var(--lumen-accent)" : "var(--lumen-text-tertiary)" }}
                  >
                    {s.number}
                  </span>
                  <div className="flex-1 flex items-baseline gap-4 min-w-0">
                    <CountUp
                      target={s.target}
                      suffix={s.suffix}
                      isFloat={"isFloat" in s ? s.isFloat : false}
                      className="font-heading text-2xl sm:text-4xl tracking-[-0.02em] shrink-0 transition-colors duration-500"
                      style={{ color: isActive ? "var(--lumen-accent)" : "var(--lumen-text-primary)" } as React.CSSProperties}
                    />
                    <span
                      className="text-sm transition-colors duration-500 hidden sm:block"
                      style={{ color: "var(--lumen-text-tertiary)" }}
                    >
                      {s.label}
                    </span>
                  </div>
                  <motion.div
                    className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full"
                    style={{ border: `1px solid ${isActive ? "var(--lumen-accent)" : "var(--lumen-border)"}` }}
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span
                      className="text-lg leading-none transition-colors duration-500"
                      style={{ color: isActive ? "var(--lumen-accent)" : "var(--lumen-text-dim)" }}
                    >
                      +
                    </span>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 sm:pb-14 grid gap-8 lg:grid-cols-2 lg:gap-16">
                        <ClipReveal direction="up" className="aspect-[4/3]" style={{ borderRadius: "var(--radius-lg)" } as React.CSSProperties}>
                          <motion.img
                            src={s.image}
                            alt={s.title}
                            className="h-full w-full object-cover"
                            initial={{ scale: 1.06 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </ClipReveal>
                        <div className="flex flex-col gap-4 justify-center">
                          <p className="font-heading text-xl leading-snug sm:text-2xl" style={{ color: "var(--lumen-text-primary)" }}>
                            {s.title}
                          </p>
                          <p className="text-sm leading-relaxed sm:text-base" style={{ color: "var(--lumen-text-secondary)" }}>
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
