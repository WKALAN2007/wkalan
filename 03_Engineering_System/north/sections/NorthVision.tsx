"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function NorthVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.96, 1, 1, 0.96]);

  return (
    <section ref={sectionRef} className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 bg-white" style={{ opacity: bgOpacity }} />
      <div className="relative z-10 mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)] text-center">
        <motion.span
          className="text-xs tracking-[0.25em] text-gray-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7 } } }}
        >
          FUTURE TARGETS
        </motion.span>
        <motion.p
          className="mt-16 font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-gray-800 sm:text-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
        >
          By 2030, we want every family
          <br />
          to have a living archive —
          <br />
          not just files in a folder, but stories
          <br />
          their grandchildren can hold.
        </motion.p>
        <motion.div
          className="mx-auto mt-12 h-[1px] w-16 bg-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
        />
      </div>
    </section>
  );
}
