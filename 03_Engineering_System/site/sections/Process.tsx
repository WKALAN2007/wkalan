"use client";

import { motion } from "framer-motion";
import { Container } from "@/02_Design_System/components/Container";

const steps = [
  {
    number: "01",
    title: "倾听",
    description:
      "我们听。我们去发现内容背后的人——他们的经历、价值观，以及是什么让他们成为今天的自己。",
  },
  {
    number: "02",
    title: "定义",
    description:
      "我们找到那个让他们与众不同的身份。让他们无法被忘记的东西。",
  },
  {
    number: "03",
    title: "设计",
    description:
      "我们创造一个反映他们个性的数字体验。不是模板。是一个属于他们故事的地方。",
  },
  {
    number: "04",
    title: "呈现",
    description:
      "我们让世界发现屏幕背后的人。超越内容。超越创作者。",
  },
];

export function Process() {
  return (
    <section id="process" className="py-[var(--space-section)]">
      <Container>
        <motion.div
          className="flex flex-col gap-4"
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
            我们的流程
          </motion.span>
          <motion.h2
            className="font-heading text-[var(--text-section-heading)] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-primary"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            从内容创作者
            <br />
            到被记住的人。
          </motion.h2>
          <motion.p
            className="max-w-lg text-lg leading-[var(--leading-relaxed)] text-text-secondary"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            一个有思考的过程，去改变世界看你的方式。
          </motion.p>
        </motion.div>

        <div className="mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="group relative flex flex-col gap-5 rounded-[var(--radius-lg)] p-8 transition-all duration-500 hover:bg-surface"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.12 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="font-heading text-6xl tracking-[var(--tracking-tight)] text-border transition-colors duration-500 group-hover:text-accent/30">
                {step.number}
              </span>

              <div className="flex flex-col gap-2">
                <h3 className="text-[var(--text-h3)] leading-[var(--leading-snug)] text-primary">
                  {step.title}
                </h3>
                <p className="text-sm leading-[var(--leading-relaxed)] text-text-secondary">
                  {step.description}
                </p>
              </div>

              <div className="mt-auto h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-12" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
