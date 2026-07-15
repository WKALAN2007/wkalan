"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const beliefs = [
  "The best stories are the most true.",
  "Views measure attention. Comments measure connection.",
  "Every city is an archive of untold stories.",
];

export function YichenProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[350vh] bg-[#FAFAF8]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#F5F2EC] via-[#FAFAF8] to-[#F5F2EC]"
          style={{ y: bgY }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[800px] px-6 sm:px-8">
          <motion.span
            className="text-xs tracking-[0.2em] text-[#B8B0A0]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Chapter 05 · What I Believe
          </motion.span>

          <div className="mt-24 flex flex-col gap-20 sm:gap-24">
            {beliefs.map((belief, i) => {
              const beliefProgress = useTransform(
                scrollYProgress,
                [i * 0.28 + 0.04, i * 0.28 + 0.22],
                [0, 1],
              );

              return (
                <motion.p
                  key={belief}
                  className="font-heading text-3xl leading-[1.1] tracking-[-0.02em] text-[#1E1E1C] sm:text-5xl"
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
      </div>
    </section>
  );
}
