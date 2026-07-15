"use client";

import { motion } from "framer-motion";

const people = [
  {
    name: "Chen Wei",
    quote: "I spent six years at a major tech company. I left because I was tired of building things that made people more distracted. At Lumen, every feature we ship is designed to help someone focus. That's all I've ever wanted to build.",
  },
  {
    name: "Amara Obi",
    quote: "My mother was a university professor. She taught me that the best thinking happens in silence, with a book and a notebook. I joined Lumen because I want to bring that kind of quiet back to how we work with knowledge.",
  },
  {
    name: "David Lindström",
    quote: "I'm an engineer who reads philosophy. I've always believed that the tools we use shape the way we think. Lumen is the first product I've worked on that takes that responsibility seriously.",
  },
];

export function LumenPeople() {
  return (
    <section className="py-28 sm:py-40" style={{ background: "var(--lumen-bg-surface)" }}>
      <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)]">
        <motion.span
          className="text-xs tracking-[0.25em] uppercase" style={{ color: "var(--lumen-text-tertiary)" }}
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7 } } }}
        >
          People
        </motion.span>
        <motion.p
          className="mt-6 font-heading text-3xl leading-[1.15] tracking-[-0.01em] sm:text-5xl"
          style={{ color: "var(--lumen-text-primary)" }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
        >
          The people behind Lumen.
        </motion.p>
        <motion.p
          className="mt-8 max-w-lg text-sm leading-relaxed sm:text-base"
          style={{ color: "var(--lumen-text-secondary)" }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] } } }}
        >
          Eighteen people. No titles. Just a shared belief that the future belongs to people who can think clearly.
        </motion.p>
        <div className="mt-16 flex flex-col gap-14">
          {people.map((person, i) => (
            <motion.div
              key={person.name}
              className="flex flex-col gap-3 border-b pb-14 last:border-b-0 last:pb-0"
              style={{ borderColor: "var(--lumen-border)" }}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] } } }}
            >
              <div className="h-[1px] w-8" style={{ background: "var(--lumen-accent)", opacity: 0.3 }} />
              <p className="font-heading text-lg leading-relaxed italic" style={{ color: "var(--lumen-text-primary)" }}>
                &ldquo;{person.quote}&rdquo;
              </p>
              <span className="text-sm font-medium" style={{ color: "var(--lumen-text-primary)" }}>{person.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
