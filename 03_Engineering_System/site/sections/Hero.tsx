"use client";

import { motion } from "framer-motion";
import { Container } from "@/02_Design_System/components/Container";

/**
 * Clean hero — one sentence. No scroll tricks. Just message + action.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[90svh] items-center" id="top">
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />

      <Container className="flex flex-col items-center gap-8 py-[var(--space-5xl)] text-center">
        <motion.div
          className="flex flex-col items-center gap-6 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-sm font-medium tracking-[var(--tracking-wide)] text-text-secondary">
            数字身份工作室
          </span>

          <h1 className="font-heading text-[var(--text-hero)] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-primary">
            品味人生，
            <br />
            雕刻身份。
          </h1>

          <p className="max-w-md text-lg leading-[var(--leading-relaxed)] text-text-secondary">
            不是做网站。不是做品牌。是建造一个数字空间——让陌生人走进去，离开时感觉自己认识了一个人。
          </p>
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border px-6 py-3 text-sm font-medium text-primary transition-all hover:border-primary hover:bg-surface"
          >
            看作品 ↓
          </a>
          <a
            href="mailto:hello@wkalan.com"
            className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-accent/40 px-6 py-3 text-sm font-medium text-accent transition-all hover:border-accent hover:bg-accent/10"
          >
            预约对话 →
          </a>
        </motion.div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
