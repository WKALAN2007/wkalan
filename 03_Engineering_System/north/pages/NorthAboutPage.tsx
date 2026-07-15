"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const timeline = [
  { year: "1988", title: "Born in a small town in Oregon.", body: "My parents ran a bookstore. I grew up surrounded by stories — on paper, in conversations, in the way my grandmother would sit by the window and describe every bird that landed on the sill." },
  { year: "2010", title: "Graduated with a degree in Computer Science.", body: "I loved building things. But I quickly realized the tech industry wasn't interested in what I cared about — preservation, meaning, memory. It was interested in growth, engagement, and making people click more." },
  { year: "2017", title: "My father was diagnosed with early-stage Alzheimer's.", body: "We started losing him, piece by piece. First names. Then places. Then entire decades. 'Write this down,' he'd say. 'I want to remember.'" },
  { year: "2019", title: "I quit my job.", body: "I spent six months just listening. To families dealing with memory loss. To archivists who'd dedicated their lives to preservation. One question kept surfacing: why are we building tools that make us more distracted, when the most valuable thing we have is being lost every day?" },
  { year: "2020", title: "The first prototype.", body: "Built in my apartment over three months. It could take a photograph, extract the faces, and attach a voice memo. I showed it to five families. Three of them cried." },
  { year: "2021", title: "First funding. First team member.", body: "A small angel round. My co-founder joined — a designer tired of building digital landfills. 'We're not building storage,' she said. 'We're building a time machine.'" },
  { year: "2022", title: "Our biggest failure.", body: "We launched 'Auto-Memory' — AI that tried to automatically curate your most important moments. People hated it. They told us it felt invasive. We pulled it after six weeks. You cannot automate meaning. People must choose what matters." },
  { year: "2024", title: "Today.", body: "Eighteen people. Thousands of families. A product that doesn't try to be smart — it tries to be trustworthy. Every decision we make starts with the same question: would my father have wanted this?" },
];

export function NorthAboutPage() {
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

      {/* Hero */}
      <section className="flex min-h-[60vh] items-center px-8 pt-20 sm:px-16">
        <div className="mx-auto max-w-[var(--container-narrow)]">
          <motion.span className="text-xs tracking-[0.25em] text-[var(--color-text-tertiary)]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
            ORGANIZE
          </motion.span>
          <motion.h1
            className="mt-8 font-heading text-4xl leading-[1.1] tracking-[-0.01em] text-[var(--color-text-primary)] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            This company exists
            <br />
            because someone I loved
            <br />
            was being forgotten.
          </motion.h1>
        </div>
      </section>

      {/* Founder portrait */}
      <section className="px-8 py-16 sm:px-16">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.div className="aspect-[3/1] w-full overflow-hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <img src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=1600&q=80" alt="Organize — bringing structure to memories" className="h-full w-full object-cover" />
          </motion.div>
          <p className="mt-4 text-xs text-[var(--color-text-tertiary)]">Organize — bringing structure to what matters.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-8 py-28 sm:px-16 sm:py-36">
        <div className="mx-auto max-w-[var(--container-narrow)]">
          <div className="relative">
            <motion.div
              className="absolute left-[7px] top-0 h-full w-[1px] bg-[var(--color-border)]"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ hidden: { scaleY: 0, transformOrigin: "top" }, visible: { scaleY: 1, transition: { duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] } } }}
            />
            <div className="flex flex-col gap-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="flex gap-6"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] } } }}
                >
                  <div className="relative flex h-[15px] w-[15px] shrink-0 items-center justify-center">
                    <div className="h-[7px] w-[7px] rounded-full bg-[var(--color-accent)]" />
                  </div>
                  <div className="flex flex-col gap-2 pb-4">
                    <span className="text-xs tracking-[0.12em] text-[var(--color-accent)]">{item.year}</span>
                    <p className="text-lg font-medium leading-snug text-[var(--color-text-primary)]">{item.title}</p>
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[var(--color-surface)] px-8 py-28 sm:px-16 sm:py-36">
        <div className="mx-auto max-w-[var(--container-narrow)] text-center">
          <motion.p
            className="font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-[var(--color-text-primary)] sm:text-4xl"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
          >
            We are not trying to grow fast.
            <br />
            We are trying to build something
            <br />
            that will still matter in fifty years.
          </motion.p>
          <motion.p
            className="mt-8 text-sm leading-relaxed text-[var(--color-text-secondary)]"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] } } }}
          >
            If that sounds naive, we&apos;re okay with that.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
