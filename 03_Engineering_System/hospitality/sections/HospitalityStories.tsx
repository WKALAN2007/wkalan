"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { stories } from "../data";

const storyList = stories;

export function HospitalityStories() {
  const scrollRef = useRef<HTMLDivElement>(null);

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

        {/* Horizontal scroll carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 -mx-[var(--container-padding)] px-[var(--container-padding)] scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {storyList.map((story, i) => (
            <Link
              key={story.slug}
              href={`/hospitality/story/${story.slug}`}
              className="group flex-shrink-0 w-[70vw] max-w-[340px] no-underline"
              style={{ scrollSnapAlign: "start" }}
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
                      delay: 0.08 * i,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={story.cardImage}
                    alt={story.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
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
                  <span className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-[var(--color-accent-dark)] transition-all group-hover:gap-3">
                    READ MORE
                    <span className="text-[10px]">→</span>
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
