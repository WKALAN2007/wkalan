"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const stories = [
  {
    name: "Akira Mori",
    video: "/website-preview.mov",
    href: "/mori",
  },
  {
    name: "NKSEN",
    video: "/website-preview.mov",
    href: "/fashion",
  },
];

function StoryCard({
  story,
  index,
}: {
  story: (typeof stories)[0];
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <motion.a
      key={story.name}
      href={story.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden border border-[var(--color-border)] bg-[#1A1A18]"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      variants={{
        hidden: { opacity: 0, y: 32, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, delay: 0.3 + 0.15 * index, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {/* Video — invisible until hover */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A18]">
        <video
          ref={videoRef}
          src={story.video}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Name — always visible at bottom */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 pt-16">
          <h3 className="font-heading text-xl text-white/80 transition-colors group-hover:text-white sm:text-2xl">
            {story.name}
          </h3>
        </div>
      </div>
    </motion.a>
  );
}

export function Chapter5Stories() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--space-section)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
        <motion.div
          className="flex flex-col gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Label */}
          <motion.div
            className="flex items-center gap-3"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
              Chapter 4
            </span>
            <div className="h-[1px] w-8 bg-[var(--color-border)]" />
          </motion.div>

          <motion.h2
            className="font-heading text-3xl leading-tight text-[var(--color-text-primary)] sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            Stories We&apos;ve Crafted.
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {stories.map((story, i) => (
              <StoryCard key={story.name} story={story} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
