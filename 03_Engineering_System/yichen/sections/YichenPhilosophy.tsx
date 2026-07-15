"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const beliefs = [
  {
    en: "The best stories are not the most dramatic. They are the most honest.",
    zh: "最好的故事不是最戲劇化的，而是最真實的。",
  },
  {
    en: "Views measure attention. Comments measure connection. I make videos for the second one.",
    zh: "播放量衡量的是注意力，留言衡量的是共鳴。我的每一支影片，都是為了後者。",
  },
  {
    en: "Every city is a library of untold stories. You just have to walk slowly enough to read them.",
    zh: "每一座城市都是一座收藏未說故事的地方。你只需要走得夠慢，就能讀懂。",
  },
  {
    en: "The internet was supposed to make us closer. I'm trying to figure out if it actually does.",
    zh: "網路本該讓人更靠近，我在做的，就是去驗證這個問題。",
  },
  {
    en: "If my videos make one person feel less alone, that is a successful career.",
    zh: "如果我的影片能讓一個人感覺不那麼孤單，這份工作就成功了。",
  },
];

export function YichenPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle background breathing
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.96, 1, 1, 0.96]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden px-6"
    >
      {/* Breathing background */}
      <motion.div
        className="absolute inset-0 bg-[#1E1E1C]"
        style={{ opacity: bgOpacity }}
      />

      <div className="relative z-10 mx-auto flex max-w-[680px] flex-col gap-20 py-24 sm:py-32">
        <motion.span
          className="text-xs tracking-[0.2em] text-white/25"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.7 },
            },
          }}
        >
          CHAPTER 07 · WHAT I BELIEVE
        </motion.span>

        {beliefs.map((belief, i) => (
          <motion.div
            key={belief.en}
            className="flex flex-col gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* English — blur+fade reveal */}
            <motion.p
              className="font-heading text-2xl leading-relaxed tracking-[-0.01em] text-white/80 sm:text-3xl"
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.9,
                    delay: 0.12 * i,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {belief.en}
            </motion.p>
            {/* Chinese — delayed with longer duration */}
            <motion.p
              className="text-sm leading-relaxed text-white/30"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.9,
                    delay: 0.12 * i + 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {belief.zh}
            </motion.p>
            {i < beliefs.length - 1 && (
              <motion.div
                className="mt-2 h-[1px] w-10 bg-white/10"
                variants={{
                  hidden: { scaleX: 0 },
                  visible: {
                    scaleX: 1,
                    transition: {
                      duration: 0.6,
                      delay: 0.2 * i + 0.4,
                    },
                  },
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
