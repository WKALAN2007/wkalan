"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/02_Design_System/components/Container";

export function Belief() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-[var(--space-section)] bg-surface"
    >
      <div className="pointer-events-none absolute -bottom-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />

      <Container className="relative flex flex-col items-center text-center">
        <motion.div
          className="flex max-w-3xl flex-col items-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
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
            我们的信念
          </motion.span>

          <motion.h2
            className="font-heading text-[var(--text-section-heading)] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-primary"
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            每个人都值得
            <br />
            被了解。
          </motion.h2>

          <motion.div
            className="h-[1px] w-16 bg-border"
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            style={{ originX: 0.5 }}
          />

          <motion.div
            className="flex flex-col gap-3"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <p className="text-lg leading-[var(--leading-relaxed)] text-text-secondary">
              每一个视频背后，是一个有故事的人。
            </p>
            <p className="text-lg leading-[var(--leading-relaxed)] text-text-secondary">
              每一篇帖子背后，是一个有价值观的人。
            </p>
            <p className="text-lg leading-[var(--leading-relaxed)] text-text-secondary">
              每一个频道背后，是一个值得被认识的人。
            </p>
          </motion.div>

          <motion.p
            className="max-w-md text-sm leading-[var(--leading-relaxed)] text-text-tertiary"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            好的设计从不随机。每一个间距、每一个字、每一个画面，都是为了呈现那个人——而不是为了装饰页面。
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
