"use client";

import { motion } from "framer-motion";

const stories = [
  {
    name: "小白剪了個球",
    who: "Bilibili 创作者 · 30万+ 粉丝",
    description: "一个做了五年篮球视频的人。粉丝看他的内容——但没人知道他的故事。我们品味了他的17岁、他的第一颗球、他膝盖上的那道疤。然后把他的故事变成了一个空间。",
    href: "/basketball",
    label: "创作者数字身份",
  },
  {
    name: "NKSEN",
    who: "时装设计师 · SS26 Collection",
    description: "一个用衣服说话的人。安静、克制、对细节偏执。我们花了三周听她讲布料的来历，然后雕刻出一个和她作品一样安静的数字空间。",
    href: "/fashion",
    label: "设计师数字身份",
  },
];

export function SelectedStories() {
  return (
    <section id="stories" className="bg-[var(--wk-bg)] py-[var(--space-section)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        {/* Header */}
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
            精选故事
          </motion.span>
          <motion.h2
            className="font-heading text-[var(--text-h2)] leading-[var(--leading-tight)] tracking-[-0.02em] text-[var(--wk-text-primary)]"
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
                浏览网站 <span>&rarr;</span>
              </span>
            </motion.a>
          ))}
        </div>

        {/* Bottom */}
        <motion.p
          className="mt-16 text-center text-sm text-[var(--wk-text-tertiary)]"
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
