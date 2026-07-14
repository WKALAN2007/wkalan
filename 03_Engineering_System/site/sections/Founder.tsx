"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/02_Design_System/components/Container";

const beliefs = [
  {
    label: "17岁那年",
    text: "一个人走完了圣地亚哥朝圣之路。那800公里教会我一件事：每个人的内心都有一个世界，只是大多数人从来没有机会展示它。",
  },
  {
    label: "为什么做 WKALAN",
    text: "我是一个大学生，也是一个有很多面的人。但网上没有人真正了解我——我的经历、我的想法、我走过的路。我开始想：那些创作者呢？他们被看到的是内容，不是人。",
  },
  {
    label: "我的标准",
    text: "AI 可以生成一百个网页。但它不会知道你17岁那年夏天发生了什么。好的设计从不随机。它来自倾听，来自理解，来自一个人愿意把真实的自己交给你。",
  },
];

export function Founder() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section id="founder" ref={ref} className="py-[var(--space-section)]">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-32">
          {/* Left: Statement */}
          <motion.div
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              className="text-sm font-medium uppercase tracking-[var(--tracking-wide)] text-text-secondary"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              创始人
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
              为什么会有
              <br />
              WKALAN。
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
              我是一名大学生。也是一个走过朝圣之路的人。我有很多面——但网上没有人真正知道。于是我想：还有多少创作者，他们被看到的只是内容，而不是自己。
            </motion.p>

            {/* Revealing vertical line */}
            <motion.div
              className="hidden h-32 w-[1px] overflow-hidden bg-border lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="h-full w-full bg-primary/30"
                style={{ height: lineHeight }}
              />
            </motion.div>
          </motion.div>

          {/* Right: Beliefs */}
          <motion.div
            className="flex flex-col gap-10 pt-0 lg:pt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {beliefs.map((item) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="group"
              >
                <span className="text-sm font-medium tracking-[var(--tracking-wide)] text-text-tertiary transition-colors duration-500 group-hover:text-primary/60">
                  {item.label}
                </span>
                <p className="mt-3 text-base leading-[var(--leading-relaxed)] text-text-secondary">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
