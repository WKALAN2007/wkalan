"use client";

import { motion } from "framer-motion";

export function NorthProblem() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-8">
      <div className="mx-auto max-w-[var(--container-narrow)] text-center">
        <motion.span
          className="text-xs tracking-[0.25em] text-gray-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.7 } },
          }}
        >
          THE PROBLEM
        </motion.span>

        <motion.p
          className="mt-16 font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-gray-800 sm:text-4xl md:text-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          In four years, we have helped over 10,000 families.
          <br />
          As we advance to 2030, we have set new targets
          <br />
          for preserving a generation of stories.
        </motion.p>

        <motion.div
          className="mx-auto mt-12 h-[1px] w-16 bg-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] } },
          }}
        />

        <motion.p
          className="mx-auto mt-10 max-w-md text-sm leading-relaxed text-gray-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          Every day, irreplaceable moments are lost — not because we don&apos;t
          care, but because the tools to preserve them were never designed for
          how families actually live and remember.
        </motion.p>
      </div>
    </section>
  );
}
