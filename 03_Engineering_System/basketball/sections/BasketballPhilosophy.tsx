"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "作品" },
  { value: "30万+", label: "粉丝" },
  { value: "9000万+", label: "预估播放" },
];

export function BasketballPhilosophy() {
  return (
    <section id="philosophy" className="bg-[#0a0a0a] py-24 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <motion.div
          className="mx-auto max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Section Label */}
          <motion.span
            className="text-xs font-medium uppercase tracking-[0.25em] text-[#c9a84c]"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            The Philosophy
          </motion.span>

          {/* Gold underline */}
          <motion.div
            className="mt-3 h-[1px] w-12 bg-[#c9a84c]/40"
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            style={{ transformOrigin: "left" }}
          />

          {/* Quote */}
          <motion.blockquote
            className="mt-8 text-2xl leading-relaxed text-white sm:text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            &ldquo;不做快餐式剪辑&rdquo;
          </motion.blockquote>

          {/* Body */}
          <motion.p
            className="mt-6 text-base leading-relaxed text-[#888888] sm:text-lg"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            篮球的魅力从来不只是输赢。球员说过的话、流过的泪、眼里的光——
            这些才是真正的剧本。他的混剪不做花哨炫技，而是让画面和台词自己说话，
            让观众在每一帧里，感受到那些曾经起鸡皮疙瘩的瞬间。
          </motion.p>

          {/* Stats Strip */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-10 border-t border-[#c9a84c]/10 pt-12 sm:gap-20"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.8, delay: 0.6 },
              },
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-[#c9a84c] sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs tracking-[0.2em] text-[#666666]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
