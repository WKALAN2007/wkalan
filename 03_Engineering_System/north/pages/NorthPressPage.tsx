"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const downloads = [
  { title: "Brand Guidelines", desc: "Logo usage, color specifications, typography, and brand voice.", size: "PDF · 2.4 MB" },
  { title: "Press Kit", desc: "Company overview, founder bios, product screenshots, and key facts.", size: "ZIP · 8.1 MB" },
  { title: "Logo Package", desc: "North logo in SVG, PNG, and EPS formats. Light and dark variants.", size: "ZIP · 1.2 MB" },
  { title: "Product Screenshots", desc: "High-resolution product images for media use. Updated quarterly.", size: "ZIP · 12.5 MB" },
  { title: "Founder Photography", desc: "Portrait and candid photography of the North founding team.", size: "ZIP · 15.3 MB" },
  { title: "Fact Sheet", desc: "Key statistics, milestones, and company information. Updated January 2025.", size: "PDF · 0.8 MB" },
];

const press = [
  { outlet: "TechCrunch", date: "2024.11", title: '"North wants to be the last memory app your family ever needs"' },
  { outlet: "Forbes", date: "2024.09", title: '"This founder left big tech to build a time machine for family memories"' },
  { outlet: "Fast Company", date: "2024.07", title: '"The most thoughtful startup of 2024 is not what you expect"' },
  { outlet: "The Verge", date: "2024.05", title: '"North is building the anti-cloud — a place where memories live forever"' },
];

export function NorthPressPage() {
  return (
    <main className="bg-white">
      {/* Back button */}
      <div className="fixed left-8 top-24 z-40">
        <Link
          href="/north"
          className="flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--color-text-tertiary)] no-underline transition-colors hover:text-[var(--color-accent)]"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 3L5 8l5 5" />
          </svg>
          Back
        </Link>
      </div>
      <section className="flex min-h-[40vh] items-center px-8 pt-32 sm:px-16">
        <div className="mx-auto max-w-[var(--container-narrow)]">
          <motion.span className="text-xs tracking-[0.25em] text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
            PRESS & DOWNLOADS
          </motion.span>
          <motion.h1 className="mt-8 font-heading text-4xl leading-[1.1] tracking-[-0.01em] text-gray-900 sm:text-5xl" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
            Brand assets,<br />press materials,<br />and media resources.
          </motion.h1>
        </div>
      </section>

      <section className="px-8 py-20 sm:px-16 sm:py-28">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.span className="text-xs tracking-[0.25em] text-gray-400" initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7 } } }}>
            DOWNLOADS
          </motion.span>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {downloads.map((item, i) => (
              <motion.div key={item.title} className="group flex flex-col gap-3 border border-gray-200 p-6 transition-colors hover:border-gray-400"
                style={{ borderRadius: "var(--radius-lg)" }}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] } } }}>
                <h3 className="font-medium text-sm text-gray-800">{item.title}</h3>
                <p className="text-xs leading-relaxed text-gray-500">{item.desc}</p>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <span className="text-[10px] tracking-[0.08em] text-gray-400">{item.size}</span>
                  <span className="text-xs font-medium tracking-[0.06em] text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100">Download →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-8 py-20 sm:px-16 sm:py-28">
        <div className="mx-auto max-w-[var(--container-narrow)]">
          <motion.span className="text-xs tracking-[0.25em] text-gray-400" initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7 } } }}>
            PRESS MENTIONS
          </motion.span>
          <div className="mt-10 flex flex-col">
            {press.map((item, i) => (
              <motion.div key={item.title} className="flex flex-col gap-2 border-b border-gray-200 py-6 last:border-b-0"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] } } }}>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] tracking-[0.1em] text-[var(--color-accent)]">{item.outlet}</span>
                  <span className="text-[10px] text-gray-400">{item.date}</span>
                </div>
                <p className="font-heading text-lg leading-snug italic text-gray-700">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex min-h-[40vh] items-center justify-center px-8 py-20 sm:px-16">
        <motion.div className="flex flex-col items-center gap-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
          <motion.p className="font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-gray-800 sm:text-4xl"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>
            Media inquiries.
          </motion.p>
          <motion.p className="max-w-md text-sm leading-relaxed text-gray-500"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] } } }}>
            For press inquiries, interview requests, or speaking opportunities, please contact our communications team.
          </motion.p>
          <motion.a href="mailto:press@north.memory" className="text-sm tracking-[0.04em] text-[var(--color-accent)] underline underline-offset-4 transition-colors hover:text-gray-700"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, delay: 0.4 } } }}>
            press@north.memory
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
