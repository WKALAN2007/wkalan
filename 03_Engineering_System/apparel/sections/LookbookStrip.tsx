"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const looks = [
  { src: "/apparel/lookbook/lb-1.jpg", alt: "Editorial look 1" },
  { src: "/apparel/lookbook/lb-2.jpg", alt: "Editorial look 2" },
  { src: "/apparel/lookbook/lb-3.jpg", alt: "Editorial look 3" },
  { src: "/apparel/lookbook/lb-4.jpg", alt: "Editorial look 4" },
  { src: "/apparel/lookbook/lb-5.jpg", alt: "Editorial look 5" },
  { src: "/apparel/lookbook/lb-6.jpg", alt: "Editorial look 6" },
];

export function LookbookStrip() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section ref={ref} className="overflow-hidden bg-[#F3F2EF] py-28 sm:py-36">
      {/* Section label */}
      <motion.div
        className="mx-auto max-w-[1400px] px-6 sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span
          className="text-xs font-medium uppercase tracking-[0.2em] text-[#B8B0A0]"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.7 } },
          }}
        >
          The Edit
        </motion.span>
        <motion.p
          className="mt-6 font-heading text-3xl leading-[1.2] text-[#1E1E1C] sm:text-4xl"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
          }}
        >
          Spring Lookbook
        </motion.p>
      </motion.div>

      {/* Horizontal scroll strip */}
      <motion.div className="mt-16 flex gap-5 px-6 sm:px-8" style={{ x, width: "max-content" }}>
        {looks.map((look, i) => (
          <motion.div
            key={i}
            className="relative h-[500px] w-[350px] flex-shrink-0 overflow-hidden sm:h-[600px] sm:w-[450px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={look.src}
              alt={look.alt}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
