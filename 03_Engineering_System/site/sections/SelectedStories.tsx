"use client";

import { motion } from "framer-motion";

const stories = [
  {
    name: "小白剪了個球",
    who: "Bilibili 创作者 · 30万+ 粉丝",
    description: "做了五年篮球视频。需要一个观众能真正了解他的地方。我们做了一个围绕他的网站——快，干净，从一次对话开始。",
    href: "/basketball",
    label: "创作者网站",
  },
  {
    name: "NKSEN",
    who: "时装设计师 · SS26",
    description: "安静、克制的设计师。需要一个和她作品一样干净的地方。一周，一个围绕她的网站。",
    href: "/fashion",
    label: "设计师网站",
  },
];

export function SelectedStories() {
  return (
    <section id="stories" className="bg-[var(--wk-bg)] py-[var(--space-section)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.div
          className="mb-16 flex flex-col items-center gap-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--wk-text-tertiary)]"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            做过的事
          </motion.span>
          <motion.h2
            className="font-heading text-[var(--text-h2)] leading-[var(--leading-tight)] tracking-[-0.02em] text-[var(--wk-text-primary)]"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            围绕他们而建的网站。
          </motion.h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2">
          {stories.map((story, i) => (
            <motion.a
              key={story.name}
              href={story.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-[var(--wk-border)] bg-[var(--wk-surface)] p-8 transition-all duration-500 hover:border-[var(--wk-accent)]/30 hover:shadow-[var(--shadow-lg)]"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.15 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--wk-accent)]">
                {story.label}
              </span>
              <h3 className="mt-4 font-heading text-2xl text-[var(--wk-text-primary)] transition-colors group-hover:text-[var(--wk-accent)]">
                {story.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--wk-text-tertiary)]">{story.who}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--wk-text-secondary)]">
                {story.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.15em] text-[var(--wk-accent)] transition-all group-hover:gap-2">
                看网站 <span>&rarr;</span>
              </span>
            </motion.a>
          ))}
        </div>

        <motion.p
          className="mt-16 text-center text-sm text-[var(--wk-text-tertiary)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          每个人都不一样。每个网站也不一样。
        </motion.p>
      </div>
    </section>
  );
}
