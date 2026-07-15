"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const headlineWords = "Tell me one more story.".split(" ");

export function YichenInvitation() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.97, 1, 1, 0.97]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        className="absolute inset-0 bg-[#FAFAF8]"
        style={{ opacity: bgOpacity }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-10 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
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
          CHAPTER 07
        </motion.span>

        <h2 className="font-heading text-3xl tracking-[-0.01em] text-[#1E1E1C] sm:text-5xl md:text-6xl">
          <motion.span
            className="inline-flex flex-wrap justify-center gap-x-[0.3em]"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.2 },
              },
            }}
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={word + i}
                className="inline-block"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 32,
                    filter: "blur(6px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        </h2>

        <motion.p
          className="max-w-sm text-base leading-relaxed text-[#8C8880] sm:text-lg"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                delay: 0.9,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
        >
          If you have a story worth remembering —
          <br />I want to hear it.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-2"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 1, delay: 1.3 },
            },
          }}
        >
          <a
            href="mailto:hello@linyichen.com"
            className="text-sm tracking-[0.08em] text-[#2C3E6B] underline underline-offset-4 transition-colors hover:text-[#1E1E1C]"
          >
            hello@linyichen.com
          </a>
          <span className="text-xs text-[#C4BFB5]">
            Lin Yichen · Bilibili · @yichen
          </span>
        </motion.div>

        <motion.p
          className="mt-8 max-w-md font-heading text-lg italic leading-relaxed tracking-[-0.01em] text-[#B8B0A0]"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.2, delay: 1.6, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          &ldquo;Every ordinary life
          <br />
          deserves to be remembered.&rdquo;
        </motion.p>
      </motion.div>
    </section>
  );
}
