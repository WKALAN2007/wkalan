"use client";

import { motion } from "framer-motion";

const strengths = [
  {
    title: "台词向混剪",
    desc: "用画面和台词构建叙事。球员原声是灵魂，每一帧都为那一句话而存在。",
  },
  {
    title: "快节奏叙事",
    desc: "深谙短视频节奏。不拖不慢，每一秒都服务于情绪递进和故事完整。",
  },
  {
    title: "深度篮球理解",
    desc: "500+部作品背后是多年的观赛与球员研究。知道什么值得被记住。",
  },
  {
    title: "爆款制造",
    desc: "最高单条1030.5万播放。从零到30万+粉丝，数据验证的内容品质。",
  },
  {
    title: "音乐编排",
    desc: "BGM是混剪的灵魂。每一支配乐都经过反复比对，与画面同频共振。",
  },
  {
    title: "持续高产",
    desc: "500+部作品，Lv.6 账号。保持高频更新，让粉丝永远有新内容可看。",
  },
];

export function BasketballCraft() {
  return (
    <section id="craft" className="bg-[#0a0a0a] py-24 sm:py-36">
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
            The Craft
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

        {/* 6 Cards Grid */}
        <div className="mx-auto grid max-w-5xl gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, i) => (
            <motion.div
              key={item.title}
              className="group border border-[#1a1a1a] bg-[#0d0d0d] p-6 transition-all duration-500 hover:border-[#c9a84c]/30 sm:p-8"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.08 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-base font-bold text-white transition-colors duration-500 group-hover:text-[#c9a84c] sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#777777] transition-colors duration-500 group-hover:text-[#999999]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
