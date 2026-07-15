"use client";

import { motion } from "framer-motion";

const products = [
  {
    color: "#C1272D",
    name: "伝統",
    weight: "40g",
    desc: "Classic bonito flakes. The original recipe, unchanged since 1910. Pure katsuobushi, shaved thin for easy sprinkling.",
  },
  {
    color: "#D4583A",
    name: "鮭入り",
    weight: "35g",
    desc: "Bonito with wild salmon. A richer flavor profile for pets who prefer a stronger taste. Same tradition, extra depth.",
  },
  {
    color: "#E06920",
    name: "減塩",
    weight: "50g",
    desc: "Reduced sodium for senior pets or those on restricted diets. All the umami, with 40% less salt than our original.",
  },
];

export function UmiProducts() {
  return (
    <section className="bg-white py-28 sm:py-36">
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
            第四章 · 製品
          </motion.span>

          <motion.div
            className="mt-6"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            {["Available", "in", "three", "formulas"].map((word, i) => (
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

        {/* Product cards */}
        <div className="grid gap-8 sm:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              className="group flex flex-col items-center gap-6 rounded-2xl bg-[#FFF8F0] p-10 text-center transition-all duration-500 hover:shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.7,
                    delay: 0.12 * i,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {/* Package block */}
              <div
                className="flex h-36 w-24 shrink-0 flex-col items-center justify-center rounded-xl shadow-md transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundColor: p.color }}
              >
                <span className="text-[10px] font-bold text-white/70">{p.name}</span>
                <span className="mt-2 text-2xl">🐟</span>
                <span className="mt-1 text-[10px] font-medium text-white/50">{p.weight}</span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-[#1A1A18]">{p.name}</h3>
                <p className="text-sm leading-relaxed text-[#6B6B68]">{p.desc}</p>
              </div>

              <a
                href="#"
                className="text-sm tracking-[0.08em] text-[#C1272D] underline underline-offset-4 transition-colors hover:text-[#E06920]"
              >
                Learn more &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
