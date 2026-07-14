"use client";

import { motion } from "framer-motion";

const stories = [
  {
    name: "Akira Mori",
    banner: "/mori-portrait.jpg",
    href: "/mori",
  },
  {
    name: "NKSEN",
    banner: "/fashion/hero.jpg",
    href: "/fashion",
  },
];

export function Chapter5Stories() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--space-section)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.div
          className="flex flex-col gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Label */}
          <motion.div
            className="flex items-center gap-3"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
              Chapter 4
            </span>
            <div className="h-[1px] w-8 bg-[var(--color-border)]" />
          </motion.div>

          <motion.h2
            className="font-heading text-3xl leading-tight text-[var(--color-text-primary)] sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            Stories We&apos;ve Crafted.
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {stories.map((story, i) => (
              <motion.a
                key={story.name}
                href={story.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden border border-[var(--color-border)] bg-[var(--color-background)] transition-all duration-500 hover:shadow-[var(--shadow-lg)]"
                variants={{
                  hidden: { opacity: 0, y: 32, scale: 0.97 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.7, delay: 0.3 + 0.15 * i, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                {/* Banner image — full width */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E4DC]">
                  <img
                    src={story.banner}
                    alt={story.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* subtle gradient at bottom for name overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Name overlaid at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-heading text-xl text-white/90 transition-colors group-hover:text-white sm:text-2xl">
                    {story.name}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
