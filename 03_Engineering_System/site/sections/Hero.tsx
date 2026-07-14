"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/02_Design_System/components/Container";
import { Button } from "@/02_Design_System/components/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 1.6 + 0.12 * i,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />

      <motion.div style={{ opacity, scale, y }} className="w-full">
        <Container className="flex flex-col items-start gap-10 py-[var(--space-5xl)]">
          <motion.div
            className="flex flex-col gap-6 max-w-4xl"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-4"
            >
              <span className="h-[1px] w-8 bg-border" />
              <span className="text-sm font-medium tracking-[var(--tracking-wide)] text-text-secondary">
                数字身份工作室
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading text-[var(--text-hero)] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-primary"
            >
              超越内容。
              <br />
              超越创作者。
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="max-w-xl text-lg md:text-[var(--text-subheading)] leading-[var(--leading-relaxed)] text-text-secondary"
            >
              我们设计数字体验，去呈现
              <br className="hidden sm:block" />
              每个创作者背后真实的人。
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
          >
            <Button href="#cta" size="lg">
              开始你的旅程
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            <motion.div
              className="h-8 w-[1px] bg-border overflow-hidden"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="h-full w-full bg-primary/40"
                animate={{ y: ["-100%", "100%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <span className="text-xs tracking-[var(--tracking-wide)] text-text-tertiary">
              向下滚动
            </span>
          </motion.div>
        </Container>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
