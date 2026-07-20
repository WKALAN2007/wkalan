"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HospitalityFeatured() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const textScale = useTransform(scrollYProgress, [0, 0.3, 1], [0.95, 1, 1.02]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.6]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#1C1C1A] py-28 sm:py-36">
      <div className="relative aspect-[16/7] overflow-hidden">
        <motion.img
          src="/hospitality/featured.jpg"
          alt="Luxury suite"
          className="absolute inset-0 h-[115%] w-full object-cover"
          style={{ y: imageY, scale: imageScale }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-8 text-center">
          <motion.div
            className="flex flex-col items-center gap-4"
            style={{ scale: textScale, opacity: textOpacity }}
          >
            <motion.span
              className="text-[10px] tracking-[0.2em] text-[var(--wk-accent-dark)]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              EXCLUSIVE LAUNCH
            </motion.span>
            <motion.h2
              className="font-heading text-3xl tracking-[-0.01em] text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              NEW IN: THE SUITE COLLECTION
            </motion.h2>
            <motion.p
              className="max-w-md text-sm leading-relaxed text-white/60"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Introducing our reimagined suites — each one a masterclass in
              understated luxury, designed for those who understand that space
              is the ultimate indulgence.
            </motion.p>
            <motion.a
              href="/hospitality/suites"
              className="mt-4 inline-block border border-[var(--wk-accent-dark)] px-8 py-3 text-xs tracking-[0.15em] text-[var(--wk-accent-dark)] no-underline transition-colors hover:bg-[var(--wk-accent-dark)] hover:text-white"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              EXPLORE SUITES
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
