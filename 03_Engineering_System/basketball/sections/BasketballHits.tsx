"use client";

import { motion } from "framer-motion";

const hits = [
  {
    title: "Kobe Bryant — Mamba Out",
    views: "1030.5万",
    desc: "用 Kobe 原声讲述曼巴精神。每一帧都承载着一个时代的告别。",
    year: "2020",
  },
  {
    title: "LeBron James — The Promise",
    views: "680.2万",
    desc: "从阿克伦到国王的承诺之路。一个少年对一座城的誓言。",
    year: "2021",
  },
  {
    title: "Stephen Curry — 改变篮球的人",
    views: "550.8万",
    desc: "三分线外重新定义比赛。小球时代的开启者。",
    year: "2022",
  },
  {
    title: "Kevin Durant — 选择与证明",
    views: "420.3万",
    desc: "从质疑到回应的旅程。最难的路，也是最真实的路。",
    year: "2021",
  },
  {
    title: "Derrick Rose — 风中玫瑰",
    views: "380.1万",
    desc: "跌倒、站起来、再绽放。篮球史上最动人的回归故事之一。",
    year: "2023",
  },
  {
    title: "Giannis — 希腊怪物进化史",
    views: "295.6万",
    desc: "从街头到 MVP 的蜕变。一个移民家庭的美国梦。",
    year: "2023",
  },
];

export function BasketballHits() {
  return (
    <section className="bg-[#0a0a0a] py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        {/* Section header */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="text-xs tracking-[0.2em] text-[#c9a84c]/50"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            第五章 · 代表作
          </motion.span>
          <motion.p
            className="mt-6 font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-white/80 sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
            }}
          >
            不是播放量。
            <br />
            是那些让人起鸡皮疙瘩的瞬间。
          </motion.p>
        </motion.div>

        {/* Featured Works — alternating layout */}
        <div className="flex flex-col gap-0">
          {hits.map((hit, i) => (
            <motion.a
              key={hit.title}
              href="https://space.bilibili.com/108062400"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 border-b border-white/[0.06] py-8 transition-all duration-500 hover:border-[#c9a84c]/20 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.08 * i,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              <div className="flex items-start gap-6 sm:items-center">
                <span className="mt-0.5 font-heading text-xl text-white/15 sm:mt-0 sm:text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-white/85 transition-colors duration-500 group-hover:text-[#c9a84c] sm:text-lg">
                    {hit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/35">
                    {hit.desc}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 pl-12 sm:pl-0">
                <span className="text-xs tracking-[0.08em] text-white/20">{hit.year}</span>
                <span className="text-sm font-bold text-[#c9a84c]/70 transition-colors group-hover:text-[#c9a84c]">
                  {hit.views}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <a
            href="https://space.bilibili.com/108062400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#c9a84c]/30 px-10 py-4 text-sm tracking-[0.15em] text-[#c9a84c] transition-all hover:border-[#c9a84c] hover:bg-[#c9a84c]/10"
          >
            在 B 站 查 看 全 部 500+ 作 品 &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
