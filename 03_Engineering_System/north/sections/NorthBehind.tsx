"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const scenes = [
  {
    src: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80",
    label: "Innovation and Experimentation",
    note: "The first whiteboard session. Three people. Six hours. We drew the entire architecture on one wall.",
  },
  {
    src: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&q=80",
    label: "Design Review",
    note: "Weekly critique. No egos. Just the work. The best ideas survive. The weak ones don't.",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    label: "Late Night Build",
    note: "2 AM. Coffee number four. The night we solved the hundred-year storage problem.",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    label: "User Research",
    note: "Our fifth family interview. She cried when she heard her grandmother's voice for the first time in a decade.",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    label: "Prototype Testing",
    note: "Early prototype. It barely worked. But it worked enough to prove we were building something that mattered.",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    label: "The Team",
    note: "Eighteen people who left comfortable jobs because they believed in something bigger than comfort.",
  },
];

export function NorthBehind() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.div className="mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.span
            className="text-xs tracking-[0.25em] text-gray-400"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7 } } }}
          >
            SD IN ACTION
          </motion.span>
          <motion.p
            className="mt-6 font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-gray-800 sm:text-4xl"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } } }}
          >
            Behind the Build
          </motion.p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {scenes.map((scene, i) => (
            <motion.div
              key={scene.note}
              className="group relative aspect-[4/3] cursor-default overflow-hidden bg-white"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.7, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <img
                src={scene.src}
                alt={scene.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-white/30 via-white/5 to-transparent p-5 transition-opacity duration-500 ${
                  hoveredIndex === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-sm leading-relaxed text-gray-800">{scene.note}</p>
              </div>
              <div
                className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/20 to-transparent p-4 pt-12 transition-opacity duration-500 ${
                  hoveredIndex === i ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="text-xs text-gray-600">{scene.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
