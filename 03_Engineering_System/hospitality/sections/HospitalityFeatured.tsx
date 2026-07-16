"use client";

import { motion } from "framer-motion";

export function HospitalityFeatured() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] min-h-[500px]">
        <img
          src="/hospitality/featured.jpg"
          alt="Luxury suite"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-8 text-center">
          <motion.div
            className="flex flex-col items-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <span className="text-[10px] tracking-[0.2em] text-[var(--color-accent-dark)]">
              EXCLUSIVE LAUNCH
            </span>
            <h2 className="font-heading text-3xl tracking-[-0.01em] text-white sm:text-5xl md:text-6xl">
              NEW IN: THE SUITE COLLECTION
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              Introducing our reimagined suites — each one a masterclass in
              understated luxury, designed for those who understand that space
              is the ultimate indulgence.
            </p>
            <a
              href="#accommodations"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("accommodations")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-4 inline-block border border-[var(--color-accent-dark)] px-8 py-3 text-xs tracking-[0.15em] text-[var(--color-accent-dark)] no-underline transition-colors hover:bg-[var(--color-accent-dark)] hover:text-white"
            >
              EXPLORE SUITES
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
