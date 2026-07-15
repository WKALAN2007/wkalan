"use client";

import { motion } from "framer-motion";

const usages = [
  {
    emoji: "🍚",
    title: "As a treat",
    desc: "Sprinkle a pinch over their regular meal. Watch their tail start going before they even taste it. The aroma alone is enough to get them excited.",
  },
  {
    emoji: "🥄",
    title: "As a topper",
    desc: "Mix into wet or dry food to add flavor and nutrition. Perfect for pets who need a little encouragement at mealtime — or just deserve something extra.",
  },
];

export function UmiUsage() {
  return (
    <section className="bg-[#FFF8F0] py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        {/* Section header */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="text-xs tracking-[0.2em] text-[#C1272D]/60"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            第五章 · 使い方
          </motion.span>

          <motion.div
            className="mt-6"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            {["Simple", "ways", "to", "serve"].map((word, i) => (
              <motion.span
                key={word}
                className="mr-[0.3em] inline-block"
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <span className="font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-4xl">
                  {word}
                </span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Two usage cards */}
        <div className="grid gap-8 sm:grid-cols-2">
          {usages.map((u, i) => (
            <motion.div
              key={u.title}
              className="group flex flex-col items-center gap-5 rounded-2xl bg-white p-10 text-center transition-all duration-500 hover:shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {
                  opacity: 0,
                  x: i === 0 ? -24 : 24,
                  filter: "blur(4px)",
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              <span className="text-5xl transition-transform duration-500 group-hover:scale-110">
                {u.emoji}
              </span>
              <h3 className="font-heading text-2xl tracking-[-0.01em] text-[#1A1A18]">
                {u.title}
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-[#6B6B68]">
                {u.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
