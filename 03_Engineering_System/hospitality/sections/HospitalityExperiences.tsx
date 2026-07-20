"use client";

import { useCallback, useState } from "react";
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
          <span className="text-xs tracking-[0.2em] text-[var(--wk-accent-dark)]">
            EXPERIENCES
          </span>
          <h2 className="mt-4 font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-4xl">
            A World of Discovery Awaits
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--wk-text-secondary)]">
            Curated moments that transform a stay into a story — from
            ocean-to-table dining to private island adventures.
          </p>
        </motion.div>

        {/* Experience grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {experienceList.map((exp, i) => (
            <ExperienceCard key={exp.slug} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experienceList)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      key={exp.slug}
      href={`/hospitality/experience/${exp.slug}`}
      className="group relative aspect-square overflow-hidden no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
              delay: 0.06 * index,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        }}
        className="h-full w-full"
      >
        <motion.img
          src={exp.cardImage}
          alt={exp.name}
          className="h-full w-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Overlay — fades in on hover */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
          animate={{
            background: hovered
              ? "rgba(0,0,0,0.55)"
              : "rgba(0,0,0,0.15)",
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="font-heading text-lg text-white sm:text-xl"
            animate={{ y: hovered ? 0 : 12, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            {exp.name}
          </motion.span>
          <motion.span
            className="mt-3 text-[10px] tracking-[0.12em] text-white/70"
            animate={{ y: hovered ? 0 : 8, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            DISCOVER →
          </motion.span>
        </motion.div>
      </motion.div>
    </Link>
  );
}
