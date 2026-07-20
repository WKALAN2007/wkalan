"use client";

import { motion } from "framer-motion";

/**
 * Work — what they do. Cards with image + title + description.
 */
const works = [
  // ══ UPDATE: add client's work items ══
  {
    title: "项目一",
    description: "一句话描述这个项目。",
    image: "/work-1.jpg",
    href: "#",
  },
  {
    title: "项目二",
    description: "一句话描述这个项目。",
    image: "/work-2.jpg",
    href: "#",
  },
  {
    title: "项目三",
    description: "一句话描述这个项目。",
    image: "/work-3.jpg",
    href: "#",
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-16 flex flex-col items-center gap-4 text-center"
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
            作品 / 内容
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-[-0.02em]"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
            }}
          >
            我做的事。
          </motion.h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, i) => (
            <motion.a
              key={work.title}
              href={work.href}
              className="group block border border-neutral-200 bg-white p-6 transition-all duration-500 hover:border-neutral-400 hover:shadow-lg"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="aspect-video bg-neutral-100 mb-4 rounded" />
              <h3 className="text-xl font-semibold">{work.title}</h3>
              <p className="mt-2 text-sm text-neutral-500">{work.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.15em] transition-all group-hover:gap-2">
                查看 <span>→</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
