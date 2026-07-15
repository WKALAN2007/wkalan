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
            第四章 · 技藝
          </motion.span>
          <motion.p
            className="mt-6 font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-white/80 sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
            }}
          >
            不只是剪接。
            <br />
            是理解比赛的方式。
          </motion.p>
        </motion.div>

        {/* 6 Cards Grid */}
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, i) => (
            <motion.div
              key={item.title}
              className="group flex flex-col gap-4 border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#c9a84c]/20 hover:bg-white/[0.05] sm:p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.7,
                    delay: 0.08 * i,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              <span className="text-[10px] tracking-[0.2em] text-[#c9a84c]/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold text-white/85 transition-colors duration-500 group-hover:text-[#c9a84c]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/35 transition-colors duration-500 group-hover:text-white/50">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
