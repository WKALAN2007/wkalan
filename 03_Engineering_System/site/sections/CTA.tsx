"use client";

import { motion } from "framer-motion";
import { Container } from "@/02_Design_System/components/Container";
import { Button } from "@/02_Design_System/components/Button";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-primary py-[var(--space-section)]">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <Container className="relative flex flex-col items-center text-center">
        <motion.div
          className="flex max-w-2xl flex-col items-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.span
            className="text-sm font-medium tracking-[var(--tracking-wide)] text-white/40"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            开始
          </motion.span>

          <motion.h2
            className="font-heading text-[var(--text-section-heading)] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-white"
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            你的故事
            <br />
            值得一个地方安放。
          </motion.h2>

          <motion.div
            className="h-[1px] w-12 bg-white/15"
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            style={{ originX: 0.5 }}
          />

          <motion.p
            className="max-w-md text-lg leading-[var(--leading-relaxed)] text-white/50"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            不是模板。不是一个 link-in-bio。是一个围绕真实的你而设计的数字身份。
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <Button
              href="mailto:hello@wkalan.com"
              variant="secondary"
              size="lg"
            >
              开始你的旅程
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-white/25"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.8 },
              },
            }}
          >
            hello@wkalan.com
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
