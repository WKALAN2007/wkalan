"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Places",
    desc: "Every memory is tied to a place — a childhood home, a wedding venue, a quiet park bench. We preserve not just the moment, but where it happened.",
  },
  {
    title: "People",
    desc: "The faces that shaped your story. North identifies, organizes, and preserves every person who mattered — across every photograph, every recording, every memory.",
  },
  {
    title: "Partners",
    desc: "We work with families, archivists, and technologists who share our belief: that preserving human stories is the most important work technology can do.",
  },
  {
    title: "Performance",
    desc: "Open formats. Geographically distributed storage. Encryption by default. Technology built to outlast us — designed for the hundred-year guarantee.",
  },
];

export function NorthThinking() {
  return (
    <section className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.p
          className="mb-16 text-center font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-gray-800 sm:text-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          Our SD 2030 Strategy
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="group flex flex-col gap-4 border border-gray-200 p-8 transition-colors hover:border-gray-400"
              style={{ borderRadius: "var(--radius-lg)" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <h3 className="font-heading text-2xl tracking-[-0.01em] text-gray-800">
                {p.title}
              </h3>
              <div className="h-[1px] w-8 bg-gray-200" />
              <p className="text-sm leading-relaxed text-gray-500">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
