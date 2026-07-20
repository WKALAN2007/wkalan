"use client";

import { motion } from "framer-motion";

/**
 * About — who they are. 3-5 paragraphs. Photo optional.
 */
export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-neutral-50">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          className="flex flex-col gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            关于我
          </motion.span>

          {/* ══ UPDATE: about paragraphs ══ */}
          <motion.div
            className="flex flex-col gap-6 text-lg leading-relaxed text-neutral-700"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
            }}
          >
            <p>
              在这里写第一段。你是谁。你做什么。你为什么做这件事。
            </p>
            <p>
              第二段。你的经历。你的转折点。是什么让你成为现在的你。
            </p>
            <p>
              第三段。你在乎什么。你相信什么。你想被怎样了解。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
