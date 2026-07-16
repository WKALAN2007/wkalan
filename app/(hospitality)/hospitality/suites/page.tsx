"use client";

import { useRef, useCallback, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

const suites = [
  {
    name: "The Caldera Suite",
    location: "Aurelia Santorini",
    image: "/hospitality/gallery/g-5.jpg",
    size: "85 m²",
    sleeps: "2 Guests",
    view: "Caldera & Volcano",
    description:
      "Carved into the volcanic cliff, this signature suite opens onto a private terrace that appears to float above the Aegean. A king bed dressed in Frette linens, a rain shower carved from local stone, and a plunge pool that catches the last light of the day.",
  },
  {
    name: "The Admiral Suite",
    location: "Aurelia Mykonos",
    image: "/hospitality/gallery/g-9.jpg",
    size: "110 m²",
    sleeps: "4 Guests",
    view: "Panoramic Sea",
    description:
      "Named for the sea captains who once charted these waters. Two bedrooms, a sprawling living space that opens to a wraparound terrace, and an infinity pool that blurs the boundary between sky and sea.",
  },
  {
    name: "The Limone Suite",
    location: "Aurelia Amalfi",
    image: "/hospitality/gallery/g-7.jpg",
    size: "72 m²",
    sleeps: "2 Guests",
    view: "Lemon Groves & Sea",
    description:
      "A lemon-scented sanctuary perched above the Tyrrhenian Sea. Hand-painted Vietri tiles, vaulted ceilings, and a private garden terrace where breakfast is served beneath a pergola of climbing jasmine.",
  },
  {
    name: "The Hammam Suite",
    location: "Aurelia Bodrum",
    image: "/hospitality/gallery/g-3.jpg",
    size: "95 m²",
    sleeps: "3 Guests",
    view: "Private Cove",
    description:
      "Our most indulgent retreat. A private hammam clad in Marmara marble, a courtyard with an ancient olive tree at its center, and a terrace that catches the Aegean breeze from dawn until the stars appear.",
  },
  {
    name: "The Penthouse",
    location: "Aurelia Santorini",
    image: "/hospitality/gallery/g-11.jpg",
    size: "140 m²",
    sleeps: "6 Guests",
    view: "360° Island Panorama",
    description:
      "The crown of the collection. Three bedrooms, a private chef's kitchen, and a rooftop pool with uninterrupted views across the entire Caldera. This is the suite for those who understand that space is the ultimate indulgence.",
  },
  {
    name: "The Garden Residence",
    location: "Aurelia Amalfi",
    image: "/hospitality/gallery/g-1.jpg",
    size: "120 m²",
    sleeps: "4 Guests",
    view: "Terraced Gardens",
    description:
      "Set within the palazzo's original gardens, this ground-floor residence unfolds across a series of rooms that open directly onto the lemon terraces. A private cooking school experience is included with every stay.",
  },
];

function SuiteCard({ suite, index }: { suite: (typeof suites)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springMx = useSpring(mx, { stiffness: 50, damping: 20 });
  const springMy = useSpring(my, { stiffness: 50, damping: 20 });
  const rotateY = useTransform(springMx, [0, 1], [4, -4]);
  const rotateX = useTransform(springMy, [0, 1], [-2, 2]);
  const imgScale = useTransform(springMx, [0, 1], [1, 1.06]);

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

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      className={`flex flex-col gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {/* Image */}
      <motion.div
        className="relative w-full lg:w-1/2 aspect-[4/3] overflow-hidden"
        style={{ rotateY, rotateX, borderRadius: "var(--radius-lg)" }}
      >
        <motion.img
          src={suite.image}
          alt={suite.name}
          className="h-full w-full object-cover"
          style={{ scale: imgScale }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: hovered
              ? "rgba(0,0,0,0.08)"
              : "rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            boxShadow: hovered
              ? "inset 0 0 0 1px rgba(201,168,76,0.25)"
              : "inset 0 0 0 0px rgba(201,168,76,0)",
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Content */}
      <div className="w-full lg:w-1/2 px-4 sm:px-0">
        <motion.span
          className="text-[10px] tracking-[0.2em] text-[var(--color-accent-dark)]"
          animate={{ opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.4 }}
        >
          {suite.location}
        </motion.span>
        <h3 className="mt-3 font-heading text-2xl tracking-[-0.01em] text-[#1A1A18] sm:text-3xl">
          {suite.name}
        </h3>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)]">
            <span className="block h-[1px] w-4 bg-[var(--color-accent-dark)]/30" />
            {suite.size}
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)]">
            <span className="block h-[1px] w-4 bg-[var(--color-accent-dark)]/30" />
            {suite.sleeps}
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)]">
            <span className="block h-[1px] w-4 bg-[var(--color-accent-dark)]/30" />
            {suite.view}
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
          {suite.description}
        </p>
        <motion.a
          href="/hospitality#booking"
          className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-[var(--color-accent-dark)] no-underline"
          animate={{ gap: hovered ? "12px" : "8px" }}
          transition={{ duration: 0.3 }}
        >
          INQUIRE ABOUT THIS SUITE
          <span className="text-[10px]">→</span>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function SuitesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.08]);

  return (
    <main>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#1C1C1A]"
      >
        <motion.div
          className="absolute inset-0"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <img
            src="/hospitality/featured.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col items-center gap-4 px-8 text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <motion.span
            className="text-xs tracking-[0.25em] text-[var(--color-accent-dark)]"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            THE SUITE COLLECTION
          </motion.span>

          <motion.h1
            className="font-heading text-3xl leading-[1.1] tracking-[-0.01em] text-white sm:text-5xl md:text-6xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            Space Is The Ultimate Luxury
          </motion.h1>

          <motion.p
            className="max-w-md text-sm leading-relaxed text-white/50"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            Each suite in our collection is a masterclass in understated elegance —
            designed for those who understand that true luxury is not about opulence,
            but about space, light, and the quiet confidence of a room that knows exactly what it is.
          </motion.p>

          <div className="mt-2 h-[1px] w-16 bg-white/30" />

          <Link
            href="/hospitality"
            className="mt-4 text-[10px] tracking-[0.15em] text-white/40 no-underline transition-colors hover:text-white/70"
          >
            ← BACK TO HOMEPAGE
          </Link>
        </motion.div>
      </section>

      {/* Suite cards */}
      <section className="bg-[#F9F7F4] py-28 sm:py-36">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <motion.div
            className="mb-20 text-center"
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
              SIX SIGNATURE SUITES
            </span>
            <h2 className="mt-4 font-heading text-3xl tracking-[-0.01em] text-[#1A1A18] sm:text-4xl">
              A Suite for Every Story
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-text-secondary)]">
              From Santorini to Bodrum, each suite reflects the character of its
              location while sharing a common thread — an unwavering commitment to
              quiet, confident luxury.
            </p>
          </motion.div>

          <div className="flex flex-col gap-20 sm:gap-28">
            {suites.map((suite, i) => (
              <SuiteCard key={suite.name} suite={suite} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1C1A] py-20 text-center">
        <motion.div
          className="mx-auto max-w-md px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
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
            BEGIN YOUR STAY
          </span>
          <h2 className="mt-4 font-heading text-2xl tracking-[-0.01em] text-white sm:text-3xl">
            Ready to experience the Suite Collection?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/40">
            Our reservations team will help you find the perfect suite for your journey.
          </p>
          <a
            href="/hospitality#booking"
            className="mt-6 inline-block border border-[var(--color-accent-dark)] px-8 py-3 text-xs tracking-[0.15em] text-[var(--color-accent-dark)] no-underline transition-colors hover:bg-[var(--color-accent-dark)] hover:text-white"
          >
            INQUIRE NOW
          </a>
        </motion.div>
      </section>
    </main>
  );
}
