"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const titleWords = ["Let's", "tell", "another", "story."];

export function CinematicInvitation() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A] px-6"
    >
      {/* Background gradient that follows scroll */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#0A0A0A] to-[#0A0A0A]"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]),
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-12 text-center">
        <motion.span
          className="text-xs tracking-[0.25em] text-white/15"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.15], [0, 1]),
          }}
        >
          CHAPTER 06
        </motion.span>

        {/* Word-by-word title reveal */}
        <h2 className="font-heading text-4xl tracking-[-0.01em] text-white/85 sm:text-6xl md:text-8xl">
          {titleWords.map((word, i) => {
            const wordProgress = useTransform(
              scrollYProgress,
              [0.05 + i * 0.08, 0.15 + i * 0.08],
              [0, 1],
            );
            return (
              <motion.span
                key={word + i}
                className="inline-block"
                style={{
                  opacity: wordProgress,
                  y: useTransform(wordProgress, [0, 1], [60, 0]),
                  filter: useTransform(
                    wordProgress,
                    [0, 0.6, 1],
                    ["blur(16px)", "blur(4px)", "blur(0px)"],
                  ),
                  marginRight: i < titleWords.length - 1 ? "0.3em" : 0,
                }}
              >
                {word}
              </motion.span>
            );
          })}
        </h2>

        {/* Description */}
        <motion.p
          className="max-w-sm text-base leading-relaxed text-white/30 sm:text-lg"
          style={{
            opacity: useTransform(scrollYProgress, [0.25, 0.4], [0, 1]),
            y: useTransform(scrollYProgress, [0.25, 0.4], [32, 0]),
          }}
        >
          如果你有一個故事，值得被記住——
          <br />
          我想聽。
        </motion.p>

        {/* Email */}
        <motion.div
          className="flex flex-col items-center gap-2"
          style={{
            opacity: useTransform(scrollYProgress, [0.35, 0.5], [0, 1]),
            y: useTransform(scrollYProgress, [0.35, 0.5], [24, 0]),
          }}
        >
          <a
            href="mailto:hello@linyichen.com"
            className="text-sm tracking-[0.1em] text-[#4A6FA5] underline underline-offset-4 transition-colors hover:text-white/70"
          >
            hello@linyichen.com
          </a>
          <span className="text-xs text-white/15">
            林奕辰 · Bilibili · @奕辰說
          </span>
        </motion.div>

        {/* Closing */}
        <motion.p
          className="mt-8 font-heading text-lg italic tracking-[-0.01em] text-white/15"
          style={{
            opacity: useTransform(scrollYProgress, [0.45, 0.6], [0, 1]),
          }}
        >
          &ldquo;Every ordinary life deserves to be remembered.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
