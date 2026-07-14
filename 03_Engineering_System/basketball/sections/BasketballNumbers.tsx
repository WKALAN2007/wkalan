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
      <span className="text-xs tracking-[0.2em] text-[#666666]">{label}</span>
    </div>
  );
}

export function BasketballNumbers() {
  return (
    <section id="numbers" className="bg-[#0a0a0a] py-24 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 flex flex-col items-center gap-3 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="text-xs font-medium uppercase tracking-[0.25em] text-[#c9a84c]"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            The Numbers
          </motion.span>
          <motion.div
            className="h-[1px] w-12 bg-[#c9a84c]/40"
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            style={{ transformOrigin: "center" }}
          />
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
