"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/02_Design_System/components/Container";

const stats = [
  {
    label: "播放量",
    description: "一个数字。不是一个人格。",
    line2: "内容变成了指标——而不是了解一个人的窗口。",
  },
  {
    label: "粉丝数",
    description: "一个计数。不是一个故事。",
    line2: "观众在增长。但真正了解一个人，需要的不只是点一下关注。",
  },
  {
    label: "内容",
    description: "一个信息流。不是一个活人。",
    line2: "每一个封面背后，都是一个曾经笑过、挣扎过、梦想过的人。",
  },
];

export function Problem() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="py-[var(--space-section)]">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-32">
          <motion.div
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              className="text-sm font-medium tracking-[var(--tracking-wide)] text-text-secondary"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              问题
            </motion.span>

            <motion.h2
              className="font-heading text-[var(--text-section-heading)] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-primary"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              被认识的
              <br />
              只有内容，不是人。
            </motion.h2>

            <motion.p
              className="max-w-md text-lg leading-[var(--leading-relaxed)] text-text-secondary"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              创作者花了几千个小时建立自己的观众群。但大多数人记住的，只是视频、帖子和数字——从来不是画面背后那个活生生的人。
            </motion.p>

            <motion.div
              className="mt-4 hidden h-24 w-[1px] bg-border lg:block"
              style={{ scaleY: lineScale, originY: 0 }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-10 pt-0 lg:pt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.18 },
              },
            }}
          >
            {stats.map((item) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="group border-l-2 border-border pl-8 transition-colors duration-500 hover:border-primary/30"
              >
                <span className="text-sm font-medium tracking-[var(--tracking-wide)] text-text-tertiary transition-colors duration-500 group-hover:text-primary/60">
                  {item.label}
                </span>
                <p className="mt-3 text-xl leading-[var(--leading-snug)] text-primary">
                  {item.description}
                </p>
                <p className="mt-2 text-sm leading-[var(--leading-relaxed)] text-text-tertiary">
                  {item.line2}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
