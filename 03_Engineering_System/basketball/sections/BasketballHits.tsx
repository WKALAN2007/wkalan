"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const hits = [
  {
    title: "Kobe Bryant — Mamba Out",
    views: "1030.5万",
    desc: "用 Kobe 原声讲述曼巴精神",
  },
  {
    title: "LeBron James — The Promise",
    views: "680.2万",
    desc: "从阿克伦到国王的承诺之路",
  },
  {
    title: "Stephen Curry — 改变篮球的人",
    views: "550.8万",
    desc: "三分线外重新定义比赛",
  },
  {
    title: "Kevin Durant — 选择与证明",
    views: "420.3万",
    desc: "从质疑到回应的旅程",
  },
  {
    title: "Derrick Rose — 风中玫瑰",
    views: "380.1万",
    desc: "跌倒、站起来、再绽放",
  },
  {
    title: "Giannis — 希腊怪物进化史",
    views: "295.6万",
    desc: "从街头到 MVP 的蜕变",
  },
];

export function BasketballHits() {
  return (
    <section id="hits" className="bg-[#111111] py-24 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 flex flex-col items-center gap-3 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
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
            The Hits
          </motion.span>
          <motion.div
            className="h-[1px] w-12 bg-[#c9a84c]/40"
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            style={{ transformOrigin: "center" }}
          />
        </motion.div>

        {/* Featured Works Grid */}
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hits.map((hit, i) => (
            <motion.a
              key={hit.title}
              href="https://space.bilibili.com/108062400"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 border border-[#1a1a1a] bg-[#0d0d0d] p-5 transition-all duration-500 hover:border-[#c9a84c]/40 sm:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.08 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-bold text-white transition-colors duration-500 group-hover:text-[#c9a84c]">
                  {hit.title}
                </h3>
                <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#555555] transition-colors group-hover:text-[#c9a84c]" />
              </div>
              <p className="text-xs leading-relaxed text-[#777777]">{hit.desc}</p>
              <span className="text-sm font-bold text-[#c9a84c]">{hit.views}</span>
            </motion.a>
          ))}
        </div>

        {/* View All on Bilibili */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="https://space.bilibili.com/108062400"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#c9a84c]/30 px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#c9a84c] transition-all hover:border-[#c9a84c] hover:bg-[#c9a84c]/10"
          >
            在B站查看全部 500+ 部作品 &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
