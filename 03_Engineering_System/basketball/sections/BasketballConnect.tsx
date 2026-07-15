"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const inviteHeadline = "一起做一个好作品。".split("");

const contacts = [
  {
    label: "Bilibili",
    value: "@小白剪了個球",
    href: "https://space.bilibili.com/108062400",
    note: "30万+ 粉丝",
  },
  {
    label: "微信",
    value: "baiyunfan7",
    href: "#",
    note: "注明来意",
  },
  {
    label: "QQ 群",
    value: "1023342855",
    href: "#",
    note: "免费看 NBA",
  },
];

export function BasketballConnect() {
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
        className="absolute inset-0 bg-[#0a0a0a]"
        style={{ opacity: bgOpacity }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 text-center">
        {/* Chapter label */}
        <motion.span
          className="text-xs tracking-[0.2em] text-[#c9a84c]/40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.7 } },
          }}
        >
          第七章 · 联系
        </motion.span>

        {/* Character-by-character headline */}
        <h2 className="font-heading text-3xl tracking-[-0.01em] text-white/80 sm:text-5xl md:text-6xl">
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
            {inviteHeadline.map((char, i) => (
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
          className="max-w-sm text-base leading-relaxed text-white/25 sm:text-lg"
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
          如果你有故事，<br />
          值得被看见——<br />
          我想剪。
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
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
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center gap-1 border border-white/[0.06] bg-white/[0.02] px-8 py-5 text-center transition-all duration-500 hover:border-[#c9a84c]/20 hover:bg-white/[0.04]"
            >
              <span className="text-[10px] tracking-[0.2em] text-white/20">
                {c.label}
              </span>
              <span className="text-sm font-medium text-white/60 transition-colors group-hover:text-[#c9a84c]">
                {c.value}
              </span>
              <span className="text-[11px] text-white/15">{c.note}</span>
            </a>
          ))}
        </motion.div>

        {/* Closing quote */}
        <motion.p
          className="mt-8 max-w-md font-heading text-lg italic leading-relaxed tracking-[-0.01em] text-[#c9a84c]/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          &ldquo;每一刀，都有情绪。&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
