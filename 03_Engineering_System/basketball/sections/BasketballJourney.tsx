"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2019",
    title: "始于热爱",
    desc: "第一次尝试剪辑 NBA 集锦。一帧一帧抠画面对节奏，从零开始摸索剪辑软件。",
    side: "right" as const,
  },
  {
    year: "2020",
    title: "第一支爆款",
    desc: "一支混剪被推上首页。意识到：观众记住的不是技术，是情绪。",
    side: "left" as const,
  },
  {
    year: "2021",
    title: "找到风格",
    desc: "放弃纯炫技路线。开始用球员原声台词构建叙事，将混剪变成微型纪录片。",
    side: "right" as const,
  },
  {
    year: "2022",
    title: "台词向混剪成型",
    desc: "\"每一刀都有情绪\"成为标签。画面为台词服务，节奏为情绪服务。",
    side: "left" as const,
  },
  {
    year: "2023",
    title: "30万粉丝",
    desc: "从零到30万。500+部作品。B站 Lv.6 账号。最高单条播放突破千万。",
    side: "right" as const,
  },
  {
    year: "2024",
    title: "不止于剪辑",
    desc: "1030.5万最高播放。9000万+预估总播放。不做快餐式剪辑。",
    side: "left" as const,
  },
];

export function BasketballJourney() {
  return (
    <section id="journey" className="bg-[#111111] py-24 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
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
            The Journey
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

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-[#c9a84c]/20" />

          {/* Entries */}
          <div className="flex flex-col gap-16">
            {timeline.map((entry, i) => (
              <motion.div
                key={entry.year}
                className={`relative flex items-center ${
                  entry.side === "left"
                    ? "flex-row"
                    : "flex-row-reverse"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Content */}
                <motion.div
                  className={`w-[calc(50%-2rem)] ${
                    entry.side === "left" ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: entry.side === "left" ? -40 : 40,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.8,
                        delay: 0.12 * i,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                >
                  <span className="text-sm italic text-[#c9a84c]">{entry.year}</span>
                  <h3 className="mt-1 text-lg font-bold text-white">{entry.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#888888]">
                    {entry.desc}
                  </p>
                </motion.div>

                {/* Center Dot */}
                <motion.div
                  className="absolute left-1/2 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-[#c9a84c]"
                  variants={{
                    hidden: { scale: 0 },
                    visible: {
                      scale: 1,
                      transition: {
                        duration: 0.4,
                        delay: 0.12 * i + 0.2,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                />

                {/* Empty spacer for the other side */}
                <div className="w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
