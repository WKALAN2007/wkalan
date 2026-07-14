"use client";

import { motion } from "framer-motion";

const beats = [
  {
    text: "17岁那年，800公里。圣地亚哥朝圣之路。",
  },
  {
    text: "在那条路上，我遇到来自世界各地的人。德国银行家，妻子去世后开始徒步。日本女孩，辞了工作，想在30岁前看一眼大西洋。巴西父亲，带着儿子的照片走完全程。",
  },
  {
    text: "我突然明白：每个人的一生都是独一无二的雕刻。只是大多数人，从来没有机会展示它。",
  },
];

export function TheOrigin() {
  return (
    <section id="origin" className="bg-[#0F0F0D] py-[var(--space-section-lg)]">
      <div className="mx-auto max-w-[var(--container-narrow)] px-[var(--container-padding)]">
        <motion.div
          className="flex flex-col items-center gap-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          {/* Label */}
          <motion.span
            className="text-xs font-medium uppercase tracking-[0.25em] text-[#C9A84C]"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            The Origin
          </motion.span>

          {/* Gold line */}
          <motion.div
            className="h-[1px] w-12 bg-[#C9A84C]/40"
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] } },
            }}
            style={{ transformOrigin: "center" }}
          />

          {/* Story beats */}
          <div className="flex flex-col gap-12">
            {beats.map((beat, i) => (
              <motion.p
                key={i}
                className="text-lg leading-relaxed text-white/70 sm:text-xl"
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.9,
                      delay: 0.3 + 0.25 * i,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                {beat.text}
              </motion.p>
            ))}
          </div>

          {/* Thesis */}
          <motion.div
            className="flex flex-col items-center gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1, delay: 1.2 } },
            }}
          >
            <div className="h-[1px] w-16 bg-[#C9A84C]/50" />
            <p className="font-heading text-3xl tracking-[0.05em] text-[#C9A84C] sm:text-4xl">
              品味人生，雕刻身份。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
