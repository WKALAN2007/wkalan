"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const numbers = [
  { value: 500, suffix: "+", label: "作品" },
  { value: 1030.5, suffix: "万", label: "最高单条播放", isDecimal: true },
  { value: 30, suffix: "万+", label: "B站粉丝" },
  { value: 9000, suffix: "万+", label: "预估总播放" },
];

function AnimatedNumber({
  target,
  suffix,
  isDecimal,
  label,
}: {
  target: number;
  suffix: string;
  isDecimal?: boolean;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [started, target]);

  const display = isDecimal ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="text-4xl font-bold text-[#c9a84c] sm:text-5xl md:text-6xl">
        {display}
        {suffix}
      </span>
      <span className="text-xs tracking-[0.2em] text-white/20">{label}</span>
    </div>
  );
}

export function BasketballNumbers() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#0a0a0a] px-8">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center gap-16">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <motion.span
            className="text-xs tracking-[0.25em] text-[#c9a84c]/40"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            第六章 · 数字
          </motion.span>
          <motion.div
            className="h-[1px] w-12 bg-[#c9a84c]/20"
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          />
          <motion.p
            className="max-w-sm text-sm leading-relaxed text-white/25"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            数字不能定义他。但它们说明了一些事情。
          </motion.p>
        </motion.div>

        {/* Numbers Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-16">
          {numbers.map((n) => (
            <AnimatedNumber
              key={n.label}
              target={n.value}
              suffix={n.suffix}
              isDecimal={n.isDecimal}
              label={n.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
