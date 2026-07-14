"use client";

import { motion } from "framer-motion";

const stories = [
  {
    name: "小白剪了個球",
    role: "Bilibili 创作者 · 30万+ 粉丝",
    description: "从内容创作者到被记住的人——我们为他设计了一个让观众能真正了解他的空间。",
    href: "/basketball",
    label: "Cinematic Identity",
  },
  {
    name: "NKSEN",
    role: "Fashion Brand · Spring Summer '26",
    description: "一个时装品牌的数字身份。编辑感、安静、让衣服自己说话。",
    href: "/fashion",
    label: "Editorial Identity",
  },
];

export function SelectedStories() {
  return (
    <section id="stories" className="bg-[var(--color-background)] py-[var(--space-section)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        {/* Header */}
        <motion.div
          className="mb-16 flex flex-col items-center gap-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            精选故事
          </motion.span>
          <motion.h2
            className="font-heading text-[var(--text-h2)] leading-[var(--leading-tight)] tracking-[-0.02em] text-[var(--color-text-primary)]"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            我们品味过的人生。
          </motion.h2>
        </motion.div>

        {/* Story Cards */}
        <div className="grid gap-8 sm:grid-cols-2">
          {stories.map((story, i) => (
            <motion.a
              key={story.name}
              href={story.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-all duration-500 hover:border-[var(--color-accent)]/30 hover:shadow-[var(--shadow-lg)]"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.15 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {story.label}
              </span>
              <h3 className="mt-4 font-heading text-2xl text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]">
                {story.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-tertiary)]">{story.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {story.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-accent)] transition-all group-hover:gap-2">
                浏览网站 <span>&rarr;</span>
              </span>
            </motion.a>
          ))}
        </div>

        {/* Bottom */}
        <motion.p
          className="mt-16 text-center text-sm text-[var(--color-text-tertiary)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          更多故事即将到来。每一个，都是一个真实的人。
        </motion.p>
      </div>
    </section>
  );
}
