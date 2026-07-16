"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { experiences } from "../data";

const experienceList = experiences;

export function HospitalityExperiences() {
  return (
    <section id="experiences" className="bg-[#F9F7F4] py-28 sm:py-36">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
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
          <span className="text-xs tracking-[0.2em] text-[var(--color-accent-dark)]">
            EXPERIENCES
          </span>
          <h2 className="mt-4 font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-4xl">
            A World of Discovery Awaits
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-text-secondary)]">
            Curated moments that transform a stay into a story — from
            ocean-to-table dining to private island adventures.
          </p>
        </motion.div>

        {/* Experience grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {experienceList.map((exp, i) => (
            <Link
              key={exp.slug}
              href={`/hospitality/experience/${exp.slug}`}
              className="group relative aspect-square overflow-hidden no-underline"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: 0.06 * i,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="h-full w-full"
              >
                <img
                  src={exp.cardImage}
                  alt={exp.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
                <span className="absolute bottom-4 left-4 z-10 font-heading text-lg text-white/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {exp.name}
                </span>
                <span className="absolute bottom-4 right-4 z-10 text-[10px] tracking-[0.12em] text-white/70 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  DISCOVER →
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
