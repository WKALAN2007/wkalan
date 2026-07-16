"use client";

import { motion } from "framer-motion";

export function HospitalityAbout() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row lg:min-h-[80vh]">
        {/* Image */}
        <div className="relative lg:w-1/2 min-h-[50vh] lg:min-h-full">
          <img
            src="/hospitality/about.jpg"
            alt="Aurelia Santorini"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Text */}
        <div className="flex items-center lg:w-1/2">
          <motion.div
            className="px-8 py-16 sm:px-16 lg:py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <span className="text-xs tracking-[0.2em] text-[var(--color-accent-dark)]">
              THE SPIRIT OF AURELIA
            </span>
            <h2 className="mt-4 font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-4xl">
              One journey that lingers long
            </h2>

            <div className="mt-8 space-y-5">
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
                Since 1923, Aurelia has been more than a collection of addresses.
                It is a philosophy — a belief that the finest luxury is felt, not
                displayed. It is in the cool marble beneath your feet on a summer
                afternoon, the rosemary carried by the breeze across a terrace,
                and the quiet confidence of a place that knows exactly who it is.
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
                Each of our properties is a reflection of its surroundings — the
                volcanic stone of Santorini, the whitewashed lanes of Mykonos, the
                lemon groves of Amalfi — woven together by a common thread of
                genuine care. Our people, many of whom have been with us for
                decades, are the keepers of this spirit.
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-[var(--color-accent-dark)]/30 pl-6">
              <p className="font-heading text-lg italic leading-relaxed text-[#1A1A18] sm:text-xl">
                &ldquo;Luxury is not about opulence. It is about attention.
                About time. About the quiet confidence of being exactly where
                you belong.&rdquo;
              </p>
            </blockquote>

            <a
              href="#experiences"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("experiences")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-[var(--color-accent-dark)] no-underline transition-all hover:gap-3"
            >
              DISCOVER MORE
              <span className="text-[10px]">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
