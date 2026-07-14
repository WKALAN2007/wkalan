"use client";

import { motion } from "framer-motion";

const benefits = [
  { kanji: "一", title: "High-quality protein", desc: "For strong, healthy muscles." },
  { kanji: "二", title: "Omega-3 fatty acids", desc: "For glowing skin and a shiny coat." },
  { kanji: "三", title: "Natural taurine", desc: "For healthy heart function. Essential for cats." },
  { kanji: "四", title: "Appetite stimulation", desc: "Natural compounds that entice picky eaters." },
];

export function UmiBenefits() {
  return (
    <section className="bg-[#FFF8F0] py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C1272D]"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
          >
            Benefits
          </motion.span>
          <div className="mt-3 flex flex-col gap-1">
            {["What", "your", "pet", "will", "get"].map((word, i) => (
              <motion.span
                key={word}
                className="text-3xl font-light tracking-[0.05em] sm:text-4xl"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] } } }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <motion.div
              key={b.kanji}
              className="flex gap-5 rounded-xl bg-white p-6 transition-all duration-500 hover:shadow-md"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="text-3xl text-[#C1272D]/30">{b.kanji}</span>
              <div>
                <h3 className="font-bold">{b.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
