"use client";

import { motion } from "framer-motion";

const quoteChars = "不做快餐式剪辑".split("");

const stats = [
  { value: "500+", label: "作品" },
  { value: "30万+", label: "粉丝" },
  { value: "9000万+", label: "预估播放" },
];

export function BasketballPhilosophy() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] px-8">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center gap-10 text-center">
        {/* Chapter label */}
        <motion.span
          className="text-xs tracking-[0.25em] text-[#c9a84c]/40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.7 } },
          }}
        >
          第二章 · 哲学
        </motion.span>

        {/* Character-by-character reveal */}
        <p className="font-heading text-3xl leading-relaxed tracking-[-0.01em] text-white/80 sm:text-4xl md:text-5xl">
          <motion.span
            className="inline-flex flex-wrap justify-center gap-x-[0.35em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
            }}
          >
            {quoteChars.map((char, i) => (
              <motion.span
                key={char + i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </p>

        {/* Divider */}
        <motion.div
          className="h-[1px] w-16 bg-[#c9a84c]/25"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        />

        {/* Body */}
        <motion.p
          className="max-w-sm text-sm leading-relaxed text-white/35"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          篮球的魅力从来不只是输赢。球员说过的话、流过的泪、眼里的光——
          这些才是真正的剧本。他的混剪不做花哨炫技，而是让画面和台词自己说话，
          让观众在每一帧里，感受到那些曾经起鸡皮疙瘩的瞬间。
        </motion.p>

        {/* Stats Strip */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-10 border-t border-[#c9a84c]/10 pt-12 sm:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.8, delay: 1.2 },
            },
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold text-[#c9a84c] sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs tracking-[0.2em] text-white/20">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
