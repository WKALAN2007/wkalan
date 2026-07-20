"use client";

import { motion } from "framer-motion";

/**
 * Contact — CTA. Email link. Simple.
 */
export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-neutral-900 text-white">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          className="flex flex-col items-center gap-6"
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
            联系
          </motion.span>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-[-0.02em]"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
            }}
          >
            {/* ══ UPDATE: contact headline ══ */}
            聊聊。
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed text-neutral-400"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
            }}
          >
            {/* ══ UPDATE: contact description ══ */}
            一小时对话。了解你是谁。然后帮你做一个围绕你的网站。
          </motion.p>

          <motion.a
            href="mailto:hello@client.com"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-200"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
            }}
          >
            {/* ══ UPDATE: email ══ */}
            hello@client.com →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
