"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface BehindScene {
  src: string;
  date: string;
  location: string;
  note: string;
}

const scenes: BehindScene[] = [
  {
    src: "https://images.unsplash.com/photo-1758520145147-c30bc656f314?w=1200&q=80",
    date: "2024.11.23",
    location: "Hangzhou · Home Studio",
    note: "3 AM. Lost track of time editing. Dad's tea on the desk, long gone cold. Couldn't bring myself to pour it out.",
  },
  {
    src: "https://images.unsplash.com/photo-1782355570263-8f0c465b1505?w=1200&q=80",
    date: "2024.10.15",
    location: "Guizhou · Village Guesthouse",
    note: "Day six of filming. Didn't shoot much today, but I met an incredible old man. He spent thirty years growing a single ginkgo tree.",
  },
  {
    src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80",
    date: "2024.09.08",
    location: "Shanghai · Late Night Edit",
    note: "Thirteen versions of this video. Went back to the first one. Sometimes the initial instinct is the right one.",
  },
  {
    src: "https://images.unsplash.com/photo-1769532890957-f4384215681d?w=1200&q=80",
    date: "2024.08.20",
    location: "Hangzhou · West Lake",
    note: "Went to West Lake at 5 AM. Not to film. Just needed to walk alone. Brought the camera. Didn't take a single shot.",
  },
  {
    src: "https://images.unsplash.com/photo-1601737487795-dab272f52420?w=1200&q=80",
    date: "2024.07.12",
    location: "Hangzhou · Home Studio",
    note: "Sorting through footage. Found clips from last year. Some people are no longer here. Some shops have closed. Glad I recorded them.",
  },
  {
    src: "https://images.unsplash.com/photo-1777472501568-1982114111a2?w=1200&q=80",
    date: "2024.06.03",
    location: "Nanjing · On the Road",
    note: "Met a stranger on the high-speed train today. Talked for four hours. Exchanged WeChat when we got off. This is the life I love.",
  },
];

export function YichenBehind() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F5F2EC] py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="text-xs tracking-[0.2em] text-[#B8B0A0]"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.7 },
              },
            }}
          >
            Chapter 06 · Behind the Lens
          </motion.span>
          <motion.p
            className="mt-6 font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-[#1E1E1C] sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.1 },
              },
            }}
          >
            This is the part
            <br />
            you don&apos;t see in the videos.
          </motion.p>
          <motion.p
            className="mt-4 max-w-md text-sm leading-relaxed text-[#8C8880]"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.7, delay: 0.2 },
              },
            }}
          >
            Hover over each photo to see the date, location, and what he wrote in his notebook that day.
          </motion.p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {scenes.map((scene, i) => (
            <motion.div
              key={scene.note}
              className="group relative aspect-[4/3] cursor-default overflow-hidden bg-[#E8E4DC]"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    delay: 0.08 * i,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              <img
                src={scene.src}
                alt={scene.location}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />

              <div
                className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#1E1E1C]/90 via-[#1E1E1C]/20 to-transparent p-5 transition-opacity duration-500 ${
                  hoveredIndex === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3 text-[10px] tracking-[0.1em] text-white/50">
                    <span>{scene.date}</span>
                    <span className="text-white/20">·</span>
                    <span>{scene.location}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/80">
                    {scene.note}
                  </p>
                </div>
              </div>

              <div
                className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 pt-12 transition-opacity duration-500 ${
                  hoveredIndex === i ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="text-xs text-white/70">{scene.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
