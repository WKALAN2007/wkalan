"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const highlights = [
  { stat: 10000, suffix: "+", label: "Families preserving memories across 40 countries" },
  { stat: 2.5, suffix: "M", label: "Voice recordings captured and archived forever", isFloat: true },
  { stat: 100, suffix: "%", label: "Data stored in open formats, readable for a century" },
  { stat: 2025, suffix: "", label: "Founded with a belief: technology should protect human stories" },
];

// Duplicate for infinite carousel loop
const LOOP_HIGHLIGHTS = [...highlights, ...highlights, ...highlights, ...highlights];

function CountUp({ target, suffix, isFloat }: { target: number; suffix: string; isFloat?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out
            if (isFloat) {
              setCount(Number((target * eased).toFixed(1)));
            } else {
              setCount(Math.floor(target * eased));
            }
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, isFloat]);

  return (
    <span ref={ref} className="font-heading text-4xl tracking-[-0.02em] text-gray-900 sm:text-5xl">
      {isFloat ? count.toFixed(1) : count.toLocaleString()}{suffix}
    </span>
  );
}

export function NorthWhy() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("north-carousel")) return;
    const s = document.createElement("style");
    s.id = "north-carousel";
    s.textContent = `
      @keyframes north-carousel-scroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }`;
    document.head.appendChild(s);
  }, []);

  return (
    <section className="bg-white py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.p
          className="mb-16 text-center font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-gray-800 sm:text-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          2025 Highlights
        </motion.p>

        {/* Auto-scrolling carousel */}
        <div className="relative">
          <div
            className="absolute inset-y-0 left-0 z-10 w-12"
            style={{ background: "linear-gradient(90deg, white, transparent)" }}
          />
          <div
            className="absolute inset-y-0 right-0 z-10 w-12"
            style={{ background: "linear-gradient(270deg, white, transparent)" }}
          />
          <div
            ref={trackRef}
            className="flex gap-6"
            style={{
              width: "max-content",
              animation: "north-carousel-scroll 30s linear infinite",
            }}
          >
            {LOOP_HIGHLIGHTS.map((h, i) => (
              <div
                key={`${h.label}-${i}`}
                className="group relative w-[280px] shrink-0 overflow-hidden border border-gray-200 p-8 sm:w-[300px]"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <CountUp target={h.stat} suffix={h.suffix} isFloat={h.isFloat} />
                <div className="mt-4 h-[1px] w-8 bg-gray-200" />
                <p className="mt-4 text-sm leading-relaxed text-gray-500">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
