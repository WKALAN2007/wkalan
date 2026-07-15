"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const entries = [
  { date: "2024.12.03", title: "Why we chose to build slowly", excerpt: "Every startup advisor told us to ship faster. 'Move fast and break things.' But you cannot break people's memories. Here's why we chose a different path — and what it cost us." },
  { date: "2024.10.17", title: "What we learned from our first 100 families", excerpt: "We assumed people wanted AI to organize everything automatically. We were wrong. They wanted control. They wanted to choose what matters." },
  { date: "2024.08.22", title: "The hardest technical problem we've solved", excerpt: "How do you store a memory so it's still readable in 2124? File formats change. Companies die. Hard drives fail. Here's how we built a preservation system designed to outlast us." },
  { date: "2024.06.10", title: "A letter to future North users", excerpt: "If you're reading this fifty years from now, I hope your grandmother's voice still plays. Here's what we're doing today to make sure that happens." },
  { date: "2024.03.05", title: "Designing for attention, not engagement", excerpt: "The tech industry measures success in daily active users. But the best memory tool is one you use for ten minutes and then close — because it did its job." },
];

export function NorthJournalPage() {
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
      <section className="flex min-h-[50vh] items-center px-8 pt-32 sm:px-16">
        <div className="mx-auto max-w-[var(--container-narrow)]">
          <motion.span className="text-xs tracking-[0.25em] text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>JOURNAL</motion.span>
          <motion.h1 className="mt-8 font-heading text-4xl leading-[1.1] tracking-[-0.01em] text-gray-900 sm:text-5xl" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
            Notes from the build.
          </motion.h1>
          <motion.p className="mt-6 max-w-lg text-base leading-relaxed text-gray-500" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            Honest writing about building a memory technology company — what we&apos;re learning, what we&apos;re getting wrong, and what keeps us going.
          </motion.p>
        </div>
      </section>

      <section className="px-8 py-20 sm:px-16 sm:py-28">
        <div className="mx-auto max-w-[var(--container-narrow)]">
          <div className="flex flex-col">
            {entries.map((entry, i) => (
              <motion.article key={entry.title} className="group border-b border-gray-200 py-10 last:border-b-0"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] } } }}>
                <Link href="#" className="flex flex-col gap-3 no-underline">
                  <span className="text-xs tracking-[0.1em] text-gray-400">{entry.date}</span>
                  <h2 className="font-heading text-2xl leading-[1.2] tracking-[-0.01em] text-gray-800 transition-colors group-hover:text-[var(--color-accent)] sm:text-3xl">{entry.title}</h2>
                  <p className="text-sm leading-relaxed text-gray-500">{entry.excerpt}</p>
                  <span className="text-xs font-medium tracking-[0.08em] text-[var(--color-accent)]">Read more →</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
