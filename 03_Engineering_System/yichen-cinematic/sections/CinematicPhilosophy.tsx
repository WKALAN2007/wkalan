"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const beliefs = [
  "The best stories are not the most dramatic. They are the most honest.",
  "Views measure attention. Comments measure connection. I make videos for the second one.",
  "Every city is a library of untold stories. You just have to walk slowly enough to read them.",
  "The internet was supposed to make us closer. I'm trying to figure out if it actually does.",
  "If my videos make one person feel less alone, that is a successful career.",
];

export function CinematicPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[350vh] bg-[#0A0A0A]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center px-6">
        <div className="flex max-w-[800px] flex-col gap-24">
          <motion.span
            className="text-xs tracking-[0.25em] text-white/15"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            CHAPTER 05 · WHAT I BELIEVE
          </motion.span>

          {beliefs.map((belief, i) => {
            const beliefProgress = useTransform(
              scrollYProgress,
              [i * 0.16 + 0.04, i * 0.16 + 0.16],
              [0, 1],
            );

            return (
              <motion.p
                key={belief}
                className="font-heading text-2xl leading-relaxed tracking-[-0.01em] text-white/70 sm:text-4xl"
                style={{
                  opacity: beliefProgress,
                  y: useTransform(beliefProgress, [0, 1], [40, 0]),
                  filter: useTransform(
                    beliefProgress,
                    [0, 0.5, 1],
                    ["blur(12px)", "blur(4px)", "blur(0px)"],
                  ),
                }}
              >
                {belief}
              </motion.p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
