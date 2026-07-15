"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const qualities = [
  { icon: "🐟", label: "天然", en: "Natural" },
  { icon: "🇯🇵", label: "愛媛産", en: "From Ehime" },
  { icon: "👨‍👩‍👧‍👦", label: "家族経営", en: "Family-run" },
  { icon: "⏳", label: "110年", en: "Since 1910" },
];

export function UmiStory() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Quality icons grid */}
          <div className="grid grid-cols-2 gap-4">
            {qualities.map((q, i) => (
              <motion.div
                key={q.label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-[#FFF8F0] p-8 text-center transition-all duration-500 hover:bg-[#FFF3E5]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.7,
                      delay: 0.1 * i,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <span className="text-3xl">{q.icon}</span>
                <span className="text-lg font-medium text-[#1A1A18]">{q.label}</span>
                <span className="text-xs tracking-[0.1em] text-[#8C7B6B]">{q.en}</span>
              </motion.div>
            ))}
          </div>

          {/* Right: Story text */}
          <div className="flex flex-col justify-center gap-8">
            <motion.div
              className="flex flex-col gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                className="text-xs tracking-[0.2em] text-[#C1272D]/60"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.7 } },
                }}
              >
                第二章 · 物語
              </motion.span>

              <motion.div
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                }}
              >
                {["110 years", "crafting", "premium fish"].map((word, i) => (
                  <motion.span
                    key={word}
                    className="mr-[0.3em] inline-block"
                    variants={{
                      hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                  >
                    <span className="font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-4xl">
                      {word}
                    </span>
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                className="h-[1px] w-10 bg-[#C1272D]/15"
                variants={{
                  hidden: { scaleX: 0 },
                  visible: {
                    scaleX: 1,
                    transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              />

              <motion.p
                className="text-sm leading-relaxed text-[#6B6B68] sm:text-base"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                In a small coastal town in Ehime Prefecture, the Yamamoto family has been
                drying bonito flakes the same way for over a century. No shortcuts. No
                machines replacing hands. Just the sea breeze, the morning sun, and four
                generations of knowing exactly when the fish is ready. We bring that
                tradition to your pet&apos;s bowl — pure, natural, and made with the same
                care you&apos;d want for your own family.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
