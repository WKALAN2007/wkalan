"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Chapter {
  label: string;
  title: string;
  body: string;
}

const chapters: Chapter[] = [
  {
    label: "2019 · 起点",
    title: "始于热爱",
    body: "第一次尝试剪辑 NBA 集锦。一帧一帧抠画面对节奏，从零开始摸索剪辑软件。那时的设备很简单，但激情很纯粹。每一个转场、每一段配乐，都是在黑暗中摸索出来的。",
  },
  {
    label: "2020 · 突破",
    title: "第一支爆款",
    body: "一支混剪被推上首页。评论区里有人说「看哭了」，有人说「这才是篮球该有的样子」。那一刻他意识到：观众记住的不是技术，是情绪。技术只是工具，共鸣才是目的。",
  },
  {
    label: "2021 · 蜕变",
    title: "找到风格",
    body: "放弃纯炫技路线。开始用球员原声台词构建叙事，将混剪变成微型纪录片。不再追求转场的华丽，而是让每一帧画面都为台词服务，让每一个节奏都服务于情绪递进。",
  },
  {
    label: "2022 · 成型",
    title: "台词向混剪成型",
    body: "\"每一刀都有情绪\"成为他的标签。画面为台词服务，节奏为情绪服务。这一年，他的作品开始被更多圈层看到——不只是篮球迷，连不看篮球的人都被打动。",
  },
  {
    label: "2023 · 积累",
    title: "30万粉丝",
    body: "从零到30万。500+部作品。B站 Lv.6 账号。最高单条播放突破千万。但他最骄傲的不是这些数字——是每次打开私信，看到有人写「谢谢你让我爱上篮球」。",
  },
  {
    label: "2024 · 当下",
    title: "不止于剪辑",
    body: "1030.5万最高播放。9000万+预估总播放。不做快餐式剪辑。每一支混剪都是一次认真的诉说——关于球员，关于比赛，关于那些让人起鸡皮疙瘩的瞬间。",
  },
];

function JourneyChapter({ chapter, index }: { chapter: Chapter; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center 40%"],
  });

  const titleBlur = useTransform(scrollYProgress, [0, 0.4, 1], ["blur(8px)", "blur(2px)", "blur(0px)"]);
  const titleY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const bodyY = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const bodyOpacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);
  const labelY = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const dividerScale = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="my-16 sm:my-24">
      <div className={`grid gap-8 lg:grid-cols-2 lg:gap-16 ${isEven ? "" : ""}`}>
        {/* Content side — alternates */}
        <div className={`flex flex-col justify-center gap-5 ${isEven ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}>
          <motion.span
            className="text-xs tracking-[0.2em] text-[#c9a84c]/50"
            style={{ y: labelY, opacity: scrollYProgress }}
          >
            {chapter.label}
          </motion.span>
          <motion.h3
            className="font-heading text-2xl tracking-[-0.01em] text-white/85 sm:text-3xl"
            style={{ y: titleY, opacity: scrollYProgress, filter: titleBlur }}
          >
            {chapter.title}
          </motion.h3>
          <motion.div
            className="h-[1px] w-10 bg-[#c9a84c]/20"
            style={{ scaleX: dividerScale }}
          />
          <motion.p
            className="max-w-[480px] text-sm leading-relaxed text-white/40 sm:text-base"
            style={{ y: bodyY, opacity: bodyOpacity }}
          >
            {chapter.body}
          </motion.p>
        </div>

        {/* Image placeholder side — alternates */}
        <div className={`flex items-center justify-center ${isEven ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}>
          <motion.div
            className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#111]"
            style={{
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.02]),
              opacity: useTransform(scrollYProgress, [0, 0.3], [0.6, 1]),
            }}
          >
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-heading text-5xl text-[#c9a84c]/15 sm:text-7xl">
                {chapter.label.slice(0, 4)}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function BasketballJourney() {
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
            第三章 · 旅程
          </motion.span>
          <motion.p
            className="mt-6 font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-white/80 sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
            }}
          >
            不是时间轴。
            <br />
            只是塑造他的那些章节。
          </motion.p>
        </motion.div>

        {/* Chapters */}
        {chapters.map((chapter, i) => (
          <JourneyChapter key={chapter.label} chapter={chapter} index={i} />
        ))}
      </div>
    </section>
  );
}
