"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

const photographs = [
  {
    title: "The Earth Remembers",
    location: "Gifu, Japan",
    year: "2003",
    photo: "/mori-1.jpg",
    text: "Across from our house, Mr. Sato tended the same rice field for fifty years. Every spring he waded into the water barefoot — even at 78, even when his back ached, even when his children begged him to stop. I asked him once why he kept doing it. He looked at me like the question didn't make sense. 'The field doesn't know I'm old,' he said. I took this photograph on a morning when the mist hadn't yet lifted. He didn't notice me. He never did. To him, I was just the neighbor boy with a camera. To me, he was the first person who taught me what devotion looks like — not loud, not proud, just showing up, every day, before the sun.",
  },
  {
    title: "First Light, Empty Street",
    location: "Gifu, Japan",
    year: "2008",
    photo: "/mori-2.jpg",
    text: "In winter, the sun doesn't reach our valley until almost seven. I used to leave the house early just to walk the empty streets in the half-dark. Everything was still. The vending machines hummed. The snow absorbed every sound. It was in these hours that I learned to see — not to look for something dramatic, but to notice what was already there. The way frost outlined each roof tile. The way a single light in a window meant someone else was awake too. I took this photograph on the coldest morning of the year. No one on the street. Just the town, sleeping. This is where I'm from. This is what made me quiet.",
  },
  {
    title: "The Baker's Hands",
    location: "Kanazawa, Japan",
    year: "2018",
    photo: "/mori-3.jpg",
    text: "I walked past his shop at four in the morning. The light was on. Through the window, I saw him — flour up to his elbows, shaping dough with movements so practiced they looked like breathing. I knocked on the glass. He looked up, nodded, kept working. I stood in the corner of his kitchen for three hours. He never asked what I was doing. At seven, he handed me a loaf of bread. 'You must be hungry,' he said. 'Standing there all morning.' It was the best bread I have ever tasted. Not because of the recipe. Because I had watched everything that went into it. Silence. Patience. Hands that have done this ten thousand times and will do it ten thousand more.",
  },
  {
    title: "Between Two Worlds",
    location: "Kyoto, Japan",
    year: "2017",
    photo: "/mori-bts-1.jpg",
    text: "There is a moment when you walk through a torii gate — a single step between one world and another. I have photographed dozens of them. But this one, I waited until everyone else had passed. The gate is not the photograph. What matters is what you cannot see: the hundreds of gates before it, the hundreds after, and the silence that gathers between them. I stood there for an hour, watching people hurry through. Nobody stopped. Nobody looked up. Maybe that is why I took the photograph — to prove that someone did. That someone noticed the threshold between ordinary and sacred, and chose to stand in it.",
  },
  {
    title: "Matsuri",
    location: "Takayama, Japan",
    year: "2016",
    photo: "/mori-bts-2.jpg",
    text: "The Takayama festival has been held every year since the 1600s. The floats are three hundred years old. The men who pull them are the grandsons and great-grandsons of the men who pulled them before. I photographed this boy — maybe eleven years old — standing beside his father, holding a rope too big for his hands. He was not smiling. He was concentrating. Already learning that some things are bigger than you, older than you, and you carry them anyway. That is what tradition means. Not ceremony. Not costume. A boy holding a rope, becoming part of something that began long before he was born and will continue long after.",
  },
  {
    title: "The Weaver's Patience",
    location: "Nishijin, Kyoto",
    year: "2024",
    photo: "/mori-4.jpg",
    text: "She is 82. She has been weaving on the same wooden loom since she was 16. The loom was her mother's, and her grandmother's before that. The wood is worn smooth where three generations of hands have rested. She works in silence — no radio, no clock, just the rhythm of the shuttle passing back and forth, back and forth. I asked her how long it takes to finish one piece. She said, 'As long as it takes. The thread does not care about time.' I sat in the corner of her workshop for two days before I took this photograph. She never asked why I was there. When I finally pressed the shutter, she didn't look up. Her hands never paused. I think about that — how someone can be so present in what they do that the world outside simply stops existing. That is what I want my photographs to feel like.",
  },
  {
    title: "Iron Blossoms",
    location: "Tsubame-Sanjo, Japan",
    year: "2024",
    photo: "/mori-6.jpg",
    text: "They call them iron flowers — molten metal thrown into the cold night air, exploding into a thousand sparks. Each one a tiny star that lives for half a second and is gone. I had never seen anything like it. The heat on my face. The smell of burning iron. The way everyone gasped at the same moment — a collective intake of breath, as if beauty this brief and this dangerous demanded acknowledgment. I took one frame. The shutter speed was a guess. When I developed the negative, I stared at it for ten minutes. Some photographs are not about what you saw. They are about what you felt in the moment of seeing — and knowing it would never happen the same way again.",
  },
  {
    title: "Threads",
    location: "Kamakura, Japan",
    year: "2022",
    photo: "/mori-5.jpg",
    text: "My mother never stopped making things. When I was a child, she sewed all my clothes — not because we could not afford store-bought, but because she said store-bought did not have love in the stitches. I used to be embarrassed by it. Now I photograph women like her wherever I find them: mothers, grandmothers, women whose hands never stop moving. This woman lives three doors down from my apartment. She weaves every afternoon by the window. She told me her mother taught her, and her grandmother before that. 'Each thread holds a story,' she said. 'The fabric remembers everything.' I think that is why I photograph. Every frame is a thread. Every image remembers. Every person deserves to be held in something that will last.",
  },
];

const N = photographs.length;

function PhotographPanel({
  entry,
  index,
  progress,
}: {
  entry: (typeof photographs)[0];
  index: number;
  progress: any;
}) {
  const opacity = useTransform(progress, (v: number) => {
    const each = 1 / (N - 1);
    const start = (index - 0.5) * each;
    const end = (index + 0.3) * each;
    if (v < start) return 0;
    if (v > end) return 1;
    return (v - start) / (end - start);
  });

  const scale = useTransform(progress, (v: number) => {
    const each = 1 / (N - 1);
    const start = (index - 0.5) * each;
    const end = (index + 0.3) * each;
    if (v < start) return 0.94;
    if (v > end) return 1;
    return 0.94 + 0.06 * ((v - start) / (end - start));
  });

  return (
    <motion.div
      className="flex h-full w-screen shrink-0 items-center bg-[#1A1A18]"
      style={{ opacity, scale }}
    >
      <div className="grid h-full w-full lg:grid-cols-2">
        <div className="relative hidden lg:block">
          <img
            src={entry.photo}
            alt={entry.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="flex items-center px-8 py-12 sm:px-16">
          <div className="flex max-w-lg flex-col gap-5">
            {index === 0 && (
              <span className="text-xs tracking-[0.25em] text-white/20">
                CHAPTER 03 · FRAMES THAT STAY
              </span>
            )}
            <div className="flex flex-col gap-1">
              <span className="font-heading text-3xl tracking-[-0.02em] text-white sm:text-4xl">
                {entry.title}
              </span>
              <span className="text-xs tracking-[0.12em] text-white/25">
                {entry.location} · {entry.year}
              </span>
            </div>
            <div className="h-[1px] w-12 bg-white/20" />
            <p className="text-sm leading-relaxed text-white/50 sm:text-base">
              {entry.text}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const albumPhotos = [
  { src: "/mori-1.jpg", title: "The Earth Remembers", location: "Gifu", year: "2003" },
  { src: "/mori-2.jpg", title: "First Light", location: "Gifu", year: "2008" },
  { src: "/mori-3.jpg", title: "The Baker's Hands", location: "Kanazawa", year: "2018" },
  { src: "/mori-bts-1.jpg", title: "Between Two Worlds", location: "Kyoto", year: "2017" },
  { src: "/mori-bts-2.jpg", title: "Matsuri", location: "Takayama", year: "2016" },
  { src: "/mori-4.jpg", title: "The Weaver's Patience", location: "Nishijin, Kyoto", year: "2024" },
  { src: "/mori-6.jpg", title: "Iron Blossoms", location: "Tsubame-Sanjo", year: "2024" },
  { src: "/mori-5.jpg", title: "Threads", location: "Kamakura", year: "2022" },
  { src: "/mori-bts-3.jpg", title: "A Quiet Meal", location: "Kamakura", year: "2023" },
];

export default function MoriHome() {
  const heroRef = useRef<HTMLElement>(null);
  const chapter3SpacerRef = useRef<HTMLDivElement>(null);

  const chapter3Progress = useMotionValue(0);
  const [chapter3Active, setChapter3Active] = useState(false);
  const [portalReady, setPortalReady] = useState(false);

  // Chapter 4 lightbox
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev! + 1) % albumPhotos.length);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev! - 1 + albumPhotos.length) % albumPhotos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex]);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    const lenis = (window as any).__lenis;
    if (!lenis) return;

    const update = ({ scroll }: { scroll: number }) => {
      const el = chapter3SpacerRef.current;
      if (!el) return;

      const visualTop = el.getBoundingClientRect().top;
      const docTop = visualTop + scroll;
      const vh = window.innerHeight;
      const sectionH = el.offsetHeight;
      const range = sectionH - vh;

      const active = scroll >= docTop && scroll < docTop + range;
      setChapter3Active(active);

      if (range > 0) {
        const p = (scroll - docTop) / range;
        chapter3Progress.set(Math.max(0, Math.min(1, p)));
      } else {
        chapter3Progress.set(0);
      }
    };

    lenis.on("scroll", update);
    update({ scroll: lenis.scroll ?? 0 });

    return () => {
      lenis.off("scroll", update);
    };
  }, []);

  const translateX = useTransform(
    chapter3Progress,
    [0, 1],
    ["0%", `-${((N - 1) / N) * 100}%`],
  );

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);

  return (
    <main className="bg-[#FAFAF8]">
      {/* ── Chapter 1: Opening Scene ── */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        <div className="grid min-h-screen w-full lg:grid-cols-2">
          <motion.div
            className="flex items-center px-8 py-20 sm:px-16 lg:py-0"
            style={{ opacity: heroOpacity }}
          >
            <div className="flex max-w-md flex-col gap-6">
              <motion.p
                className="font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-[#1A1A18] sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                I don&apos;t take photos to capture a moment.
              </motion.p>
              <motion.p
                className="font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-[#8C8880] sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
              >
                I take photos so a person knows they mattered.
              </motion.p>
              <motion.p
                className="mt-4 text-xs tracking-[0.2em] text-[#C4BFB5]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3.0 }}
              >
                AKIRA MORI · DOCUMENTARY PHOTOGRAPHER
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/mori-portrait.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 right-8 z-10 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.0 }}
        >
          <motion.span
            className="text-[11px] tracking-[0.2em] text-white/25"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            SCROLL
          </motion.span>
        </motion.div>
      </section>

      {/* ── Chapter 2: The Pause ── */}
      <section className="flex min-h-screen items-center justify-center bg-[#1A1A18]">
        <div className="flex flex-col items-center gap-8 px-8 text-center">
          <span className="text-xs tracking-[0.25em] text-white/30">
            CHAPTER 02
          </span>
          <p className="font-heading text-3xl leading-relaxed tracking-[-0.01em] text-white/80 sm:text-4xl">
            People know my photos.
            <br />
            Very few know me.
          </p>
          <div className="h-[1px] w-12 bg-white/20" />
        </div>
      </section>

      {/* ── Chapter 3: Frames That Stay (scroll-thru spacer) ── */}
      <div
        ref={chapter3SpacerRef}
        className="relative bg-[#1A1A18]"
        style={{ height: `${(N - 1) * 120}vh` }}
      />

      {/* Portal: Chapter 3 photograph panels pinned to viewport */}
      {portalReady &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-[#1A1A18]"
            style={{
              opacity: chapter3Active ? 1 : 0,
              pointerEvents: chapter3Active ? "auto" : "none",
              transition: "opacity 0.5s ease",
            }}
          >
            <motion.div
              className="flex h-full"
              style={{
                translateX,
                width: `${N * 100}vw`,
              }}
            >
              {photographs.map((entry, i) => (
                <PhotographPanel
                  key={entry.title}
                  entry={entry}
                  index={i}
                  progress={chapter3Progress}
                />
              ))}
            </motion.div>
          </div>,
          document.body,
        )}

      {/* ── Chapter 4: The Archive ── */}
      <section className="bg-[#F5F2EC] py-28 sm:py-36">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <motion.span
            className="text-xs tracking-[0.2em] text-[#B8B0A0]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            CHAPTER 04 · THE ARCHIVE
          </motion.span>

          <motion.p
            className="mt-8 max-w-md text-sm leading-relaxed text-[#8C8880]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
            }}
          >
            A selection from the past two decades. Click any photograph to view it full size.
          </motion.p>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {albumPhotos.map((photo, i) => (
              <motion.button
                key={photo.title}
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden bg-[#E8E4DC] text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 0.6,
                      delay: 0.06 * i,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                {/* caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 pt-12">
                  <p className="text-xs font-medium text-white/90">{photo.title}</p>
                  <p className="mt-0.5 text-[10px] tracking-[0.06em] text-white/50">
                    {photo.location} · {photo.year}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portal: Lightbox */}
      {lightboxIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] flex flex-col bg-[#1A1A18]"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top bar */}
            <div className="flex h-14 shrink-0 items-center justify-between px-4 sm:px-6">
              <span className="text-xs tracking-[0.12em] text-white/25">
                {lightboxIndex + 1} / {albumPhotos.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/35 transition-colors hover:text-white/70"
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 5l10 10M15 5l-10 10" />
                </svg>
              </button>
            </div>

            {/* Photo area — takes all available space */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 sm:px-6">
              {/* Prev */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex - 1 + albumPhotos.length) % albumPhotos.length);
                }}
                className="absolute left-2 z-10 hidden h-14 w-14 items-center justify-center rounded-full text-white/20 transition-colors hover:text-white/60 sm:flex"
                aria-label="Previous"
              >
                <svg width="30" height="30" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M18 5L8 14l10 9" />
                </svg>
              </button>

              {/* Next */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % albumPhotos.length);
                }}
                className="absolute right-2 z-10 hidden h-14 w-14 items-center justify-center rounded-full text-white/20 transition-colors hover:text-white/60 sm:flex"
                aria-label="Next"
              >
                <svg width="30" height="30" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M10 5l10 9-10 9" />
                </svg>
              </button>

              {/* The photograph — fills available space, never cropped */}
              <motion.img
                key={lightboxIndex}
                src={albumPhotos[lightboxIndex].src}
                alt={albumPhotos[lightboxIndex].title}
                className="max-h-full max-w-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Bottom caption bar */}
            <div
              className="shrink-0 px-4 pb-8 pt-3 text-center sm:px-6 sm:pb-10"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm font-medium text-white/80">
                {albumPhotos[lightboxIndex].title}
              </p>
              <p className="mt-1 text-[11px] tracking-[0.08em] text-white/25">
                {albumPhotos[lightboxIndex].location} · {albumPhotos[lightboxIndex].year}
              </p>
            </div>
          </div>,
          document.body,
        )}

      {/* ── Chapter 5: How I Work ── */}
      <section className="bg-[#F5F2EC] py-28 sm:py-36">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <motion.span
            className="text-xs tracking-[0.2em] text-[#B8B0A0]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            CHAPTER 05 · HOW I WORK
          </motion.span>
          <motion.div
            className="mt-16 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {["Observe", "Listen", "Wait", "Create"].map((verb, i) => (
              <motion.div
                key={verb}
                className="flex gap-8 border-b border-[#E0DBD0] py-8 last:border-b-0"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      delay: 0.12 * i,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <span className="w-24 shrink-0 font-heading text-2xl text-[#1A1A18]">
                  {verb}
                </span>
                <p className="text-sm leading-relaxed text-[#6B6760]">
                  {[
                    "I spend a week with the person before I pick up the camera. No questions. No agenda. Just presence. I want them to forget I'm there. The best photographs happen when someone stops performing and simply exists in front of the lens.",
                    "Not to words — to silence. To what their hands do when they're thinking. To the way their shoulders drop when they forget I'm in the room. The most important things people tell you, they never say out loud.",
                    "The best frame always comes after you stop looking for it. I've waited four hours for the right light. I've waited three days for someone to stop being self-conscious. Patience isn't a virtue — it's the entire job.",
                    "One camera. One lens. Natural light. No assistant. I develop my own film in a rented darkroom in Kamakura. It takes days to get one print right. The chemical smell never leaves my hands. I wouldn't have it any other way.",
                  ][i]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Chapter 6: Behind the Lens ── */}
      <section className="bg-[#FAFAF8] py-28 sm:py-36">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <motion.span
            className="text-xs tracking-[0.2em] text-[#B8B0A0]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            CHAPTER 06 · BEHIND THE LENS
          </motion.span>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/mori-bts-ai-1.png", label: "Morning light. Kamakura, 6:17 AM." },
              { src: "/mori-bts-ai-2.png", label: "Waiting for the right moment. Always." },
              { src: "/mori-bts-ai-3.png", label: "Between frames. Chiang Mai, 2015." },
              { src: "/mori-bts-ai-4.png", label: "Late night in the darkroom. The only place I lose track of time." },
              { src: "/mori-bts-ai-5.png", label: "One camera. One lens. No crew." },
            ].map((scene, i) => (
              <motion.div
                key={scene.label}
                className="group relative aspect-[4/3] overflow-hidden bg-[#E8E4DC]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 0.7,
                      delay: 0.08 * i,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <img
                  src={scene.src}
                  alt={scene.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/5" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-10 text-xs text-white/80">
                  {scene.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chapter 7: The Truth ── */}
      <section className="flex min-h-[60vh] items-center justify-center bg-[#F5F2EC] px-6">
        <motion.p
          className="max-w-md text-center font-heading text-2xl leading-relaxed tracking-[-0.01em] text-[#6B6760] sm:text-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          If nobody looked at my photos,
          <br />I would still take them.
        </motion.p>
      </section>

      {/* ── Chapter 8: The Invitation ── */}
      <section className="flex min-h-[70vh] items-center justify-center bg-[#FAFAF8] px-6">
        <motion.div
          className="flex flex-col items-center gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            className="font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-5xl"
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            Tell me your story.
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed text-[#8C8880]"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            Let&apos;s create something
            <br />
            worth remembering.
          </motion.p>
          <motion.a
            href="mailto:hello@akiramori.com"
            className="text-sm tracking-[0.08em] text-[#8C8880] underline underline-offset-4 transition-colors hover:text-[#1A1A18]"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.8, delay: 0.5 },
              },
            }}
          >
            hello@akiramori.com
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
