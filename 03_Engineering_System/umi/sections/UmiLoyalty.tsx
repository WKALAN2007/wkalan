"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const inviteChars = "给你的毛孩最好的。".split("");

const tiers = [
  {
    name: "Silver",
    color: "#C0C0C0",
    desc: "Free shipping on orders over ¥200. Early access to seasonal releases.",
  },
  {
    name: "Gold",
    color: "#C9A84C",
    desc: "10% off every order. Free sample with each delivery. Priority support.",
  },
  {
    name: "Platinum",
    color: "#4F6BFF",
    desc: "15% off every order. Custom delivery schedule. Exclusive limited editions.",
  },
];

export function UmiLoyalty() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.97, 1, 1, 0.97]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6"
    >
      {/* Breathing background */}
      <motion.div
        className="absolute inset-0 bg-white"
        style={{ opacity: bgOpacity }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 text-center">
        {/* Chapter label */}
        <motion.span
          className="text-xs tracking-[0.2em] text-[#C1272D]/60"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.7 } },
          }}
        >
          第六章 · 仲間
        </motion.span>

        {/* Character-by-character headline */}
        <h2 className="font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-5xl md:text-6xl">
          <motion.span
            className="inline-flex flex-wrap justify-center gap-x-[0.3em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
            }}
          >
            {inviteChars.map((char, i) => (
              <motion.span
                key={char + i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h2>

        {/* Description */}
        <motion.p
          className="max-w-sm text-base leading-relaxed text-[#8C7B6B] sm:text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          Join the Umi family and get rewarded
          <br />
          for every tail wag.
        </motion.p>

        {/* Tier cards */}
        <motion.div
          className="grid gap-4 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.8, delay: 1.3 },
            },
          }}
        >
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              className="group flex flex-col items-center gap-3 rounded-2xl bg-[#FFF8F0] px-8 py-8 text-center transition-all duration-500 hover:shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 1.3 + 0.1 * i,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              <span
                className="text-sm font-bold tracking-[0.15em]"
                style={{ color: t.color }}
              >
                {t.name}
              </span>
              <p className="text-xs leading-relaxed text-[#6B6B68]">{t.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#"
          className="mt-4 text-sm tracking-[0.08em] text-[#C1272D] underline underline-offset-4 transition-colors hover:text-[#E06920]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.8, delay: 1.8 },
            },
          }}
        >
          Learn more about rewards &rarr;
        </motion.a>

        {/* Closing quote */}
        <motion.p
          className="mt-8 max-w-md font-heading text-lg italic leading-relaxed tracking-[-0.01em] text-[#C1272D]/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 2.0, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          &ldquo;From the sea, with love.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
