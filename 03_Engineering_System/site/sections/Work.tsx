"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * WKALAN Work — Council-adapted 2026
 *
 * Six story cards in a static 2-column grid. No carousel. No particles.
 * Each card carries its identity label — Photographer, Content Creator, etc.
 *
 * Jobs: Show the work. Don't explain it.
 * Ive: Static is elegant. Let the user choose what to look at.
 * Fukasawa: Hover is a whisper, not a shout. Scale + color. That's it.
 * Vignelli: Every card shares the same proportions. Discipline.
 */

const projects = [
  {
    name: "Mori",
    tag: "摄影师",
    image: "/mori-banner.jpg",
    href: "/mori",
  },
  {
    name: "一尘工作室",
    tag: "内容创作者",
    image: "/yichen-hero-v2.jpg",
    href: "/yichen",
  },
  {
    name: "Atelier",
    tag: "时尚",
    image: "/fashion/hero.jpg",
    href: "/fashion",
  },
  {
    name: "Aurelia Hospitality",
    tag: "酒店",
    image: "/hospitality/hero/hero-1.jpg",
    href: "/hospitality",
  },
  {
    name: "The Watch Archive",
    tag: "腕表",
    image: "/watches/hero-watch.jpg",
    href: "/watches",
  },
  {
    name: "Meridian Commerce",
    tag: "电商",
    image: "/commerce-banner.jpg",
    href: "/commerce",
  },
];

export function Work() {
  return (
    <section
      className="bg-[var(--wk-bg)] py-[var(--space-section-lg)]"
      id="work"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        {/* Section head — minimal. No motivational text. */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--wk-text-tertiary)]"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            精选作品
          </motion.span>
        </motion.div>

        {/* Grid — 2 columns on desktop, 1 on mobile. Equal cards. */}
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.href}
              className="group block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Image — contained within a considered proportion */}
              <motion.div
                className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--wk-surface)]"
                variants={{
                  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
                  visible: {
                    opacity: 1,
                    clipPath: "inset(0 0 0% 0)",
                    transition: {
                      duration: 0.7,
                      delay: 0.06 * i,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </motion.div>

              {/* Label — identity tag + name + enter button. */}
              <motion.div
                className="mt-5 flex items-center justify-between gap-3"
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      delay: 0.2 + 0.06 * i,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--wk-text-tertiary)]">
                    {project.tag}
                  </span>
                  <span className="text-[var(--text-body)] font-medium text-[var(--wk-text-primary)] transition-colors duration-500 group-hover:text-[var(--wk-accent)]">
                    {project.name}
                  </span>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-[var(--wk-text-tertiary)] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-[var(--wk-accent)] group-hover:gap-2">
                  进入网站 <span className="text-sm">&rarr;</span>
                </span>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
