"use client";

import { useRef, useCallback, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { stories } from "../data";

function StoryCard({ story, index }: { story: (typeof stories)[0]; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springMx = useSpring(mx, { stiffness: 60, damping: 20 });
  const springMy = useSpring(my, { stiffness: 60, damping: 20 });
  const rotateY = useTransform(springMx, [0, 1], [5, -5]);
  const rotateX = useTransform(springMy, [0, 1], [-2, 2]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const r = cardRef.current.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
    },
    [mx, my]
  );

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my]);

  return (
    <Link
      ref={cardRef}
      key={story.slug}
      href={`/hospitality/story/${story.slug}`}
      className="group flex-shrink-0 w-[70vw] max-w-[340px] no-underline"
      style={{ scrollSnapAlign: "start", perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: 0.08 * index,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        }}
        animate={{ y: hovered ? -4 : 0 }}
        style={{
          rotateY,
          rotateX,
          boxShadow: hovered
            ? "0 20px 40px rgba(0,0,0,0.12)"
            : "0 2px 6px rgba(0,0,0,0.04)",
          transition: "box-shadow 0.5s ease",
        }}
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={story.cardImage}
            alt={story.title}
            className="h-full w-full object-cover"
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="absolute inset-0 bg-black/0"
            animate={{ backgroundColor: hovered ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0)" }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="mt-4">
          <span className="text-[10px] tracking-[0.15em] text-[var(--color-accent-dark)]">
            {story.label}
          </span>
          <h3 className="mt-1 font-heading text-lg leading-tight text-[#1A1A18]">
            {story.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {story.description.slice(0, 130)}...
          </p>
          <motion.span
            className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-[var(--color-accent-dark)]"
            animate={{ gap: hovered ? "12px" : "8px" }}
            transition={{ duration: 0.3 }}
          >
            READ MORE
            <span className="text-[10px]">→</span>
          </motion.span>
        </div>
      </motion.div>
    </Link>
  );
}

export function HospitalityStories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const storyList = stories;

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <span className="text-xs tracking-[0.2em] text-[var(--color-accent-dark)]">
            STORIES
          </span>
          <h2 className="mt-4 font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-4xl">
            From the Journal
          </h2>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 -mx-[var(--container-padding)] px-[var(--container-padding)] scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {storyList.map((story, i) => (
            <StoryCard key={story.slug} story={story} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
