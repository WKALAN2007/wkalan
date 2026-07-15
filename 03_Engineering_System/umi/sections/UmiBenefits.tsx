"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    kanji: "一",
    title: "Pure Protein",
    desc: "100% natural skipjack tuna. No fillers, no preservatives, no artificial anything. Just pure, lean protein that supports muscle health and energy.",
  },
  {
    kanji: "二",
    title: "Rich in Omega-3",
    desc: "Cold-water bonito naturally contain high levels of DHA and EPA. Good for your pet's coat, skin, brain function, and joint mobility at every age.",
  },
  {
    kanji: "三",
    title: "Umami They Love",
    desc: "The natural glutamates in dried bonito create an irresistible flavor. Even picky eaters come running — no coaxing, no mixing, no tricks needed.",
  },
  {
    kanji: "四",
    title: "Low Calorie",
    desc: "With less than 3% fat content, our flakes make a guilt-free daily treat. Reward your companion without worrying about weight gain or health.",
  },
];

export function UmiBenefits() {
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
            第三章 · 利点
          </motion.span>

          <motion.div
            className="mt-6"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            {["What", "your", "pet", "will", "get"].map((word, i) => (
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

        {/* Benefit cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <motion.div
              key={b.kanji}
              className="group flex gap-6 rounded-2xl bg-white p-8 transition-all duration-500 hover:shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.7,
                    delay: 0.1 * i,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              <span className="shrink-0 font-heading text-4xl text-[#C1272D]/20 transition-colors duration-500 group-hover:text-[#C1272D]/40">
                {b.kanji}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-[#1A1A18]">{b.title}</h3>
                <p className="text-sm leading-relaxed text-[#6B6B68]">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
