"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const line1 = "The internet remembers numbers.".split(" ");
const line2 = "I remember people.".split(" ");

export function YichenManifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.92]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-8"
    >
      <motion.div
        className="absolute inset-0 bg-[#1E1E1C]"
        style={{ opacity: bgOpacity }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 text-center">
        <motion.span
          className="text-xs tracking-[0.25em] text-white/25"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.7 },
            },
          }}
        >
          CHAPTER 02
        </motion.span>

        <p className="font-heading text-3xl leading-relaxed tracking-[-0.01em] text-white/80 sm:text-4xl md:text-5xl">
          <motion.span
            className="inline-flex flex-wrap justify-center gap-x-[0.35em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
            }}
          >
            {line1.map((word, i) => (
              <motion.span
                key={word + i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
          <br />
          <motion.span
            className="inline-flex flex-wrap justify-center gap-x-[0.35em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 1.0 },
              },
            }}
          >
            {line2.map((word, i) => (
              <motion.span
                key={word + i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        </p>

        <motion.div
          className="h-[1px] w-16 bg-white/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { scaleX: 0 },
            visible: {
              scaleX: 1,
              transition: { duration: 0.8, delay: 0.4 },
            },
          }}
        />

        <motion.p
          className="max-w-sm text-sm leading-relaxed text-white/35"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          The internet remembers numbers.
          <br />I remember people.
        </motion.p>
      </div>
    </section>
  );
}
