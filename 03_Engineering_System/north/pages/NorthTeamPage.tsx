"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const team = [
  { name: "David Kim", role: "Founder", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", quote: "My father has Alzheimer's. I started North because I refuse to accept that the people we love can simply disappear from memory." },
  { name: "Sarah Okafor", role: "Co-founder & Design", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80", quote: "I spent eight years designing cloud storage interfaces. They treated your photos like inventory. I wanted to design something that treats memories the way people actually experience them." },
  { name: "Marcus Chen", role: "Engineering", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80", quote: "I used to build recommendation algorithms. I left because I was getting very good at making people stay on their phones longer. At North, I build technology that helps people put their phones down." },
  { name: "Amara Nwosu", role: "Research", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80", quote: "I have a PhD in archival science. I believe every family's story is historically important. The way a grandmother makes dumplings deserves the same care as a presidential library." },
  { name: "James Lindström", role: "Infrastructure", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80", quote: "I build systems designed to outlast us. It's a different kind of engineering — you're optimizing for permanence, not speed." },
  { name: "Yuki Tanaka", role: "Community", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80", quote: "Before North, I was a hospice nurse. I watched families scramble to capture stories before it was too late. I joined because I never want another family to feel like they ran out of time." },
];

export function NorthTeamPage() {
  return (
    <main className="bg-white">
      {/* Back button */}
      <div className="fixed left-8 top-24 z-40">
        <Link
          href="/north"
          className="flex items-center gap-2 text-xs tracking-[0.08em] text-[var(--color-text-tertiary)] no-underline transition-colors hover:text-[var(--color-accent)]"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 3L5 8l5 5" />
          </svg>
          Back
        </Link>
      </div>
      <section className="flex min-h-[50vh] items-center px-8 pt-32 sm:px-16">
        <div className="mx-auto max-w-[var(--container-narrow)]">
          <motion.span className="text-xs tracking-[0.25em] text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>TEAM</motion.span>
          <motion.h1 className="mt-8 font-heading text-4xl leading-[1.1] tracking-[-0.01em] text-gray-900 sm:text-5xl md:text-6xl" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
            Eighteen people who<br />believe memories matter.
          </motion.h1>
          <motion.p className="mt-6 max-w-lg text-base leading-relaxed text-gray-500" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            No open office. No ping pong table. Just a quiet space where serious people do work they believe in.
          </motion.p>
        </div>
      </section>

      <section className="px-8 py-20 sm:px-16 sm:py-28">
        <div className="mx-auto grid max-w-[var(--container-max)] gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((p, i) => (
            <motion.div key={p.name} className="flex flex-col gap-5" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] } } }}>
              <div className="aspect-[3/4] overflow-hidden bg-white">
                <img src={p.photo} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" loading="lazy" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-gray-800">{p.name}</span>
                  <span className="text-xs text-gray-400">{p.role}</span>
                </div>
                <div className="h-[1px] w-6 bg-[var(--color-accent)]/30" />
                <p className="text-sm leading-relaxed italic text-gray-500">&ldquo;{p.quote}&rdquo;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white px-8 py-28 sm:px-16 sm:py-36">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.p className="font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-gray-800 sm:text-4xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}>
            This is how we work.
          </motion.p>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&q=80", label: "Weekly design critique. No egos. Just the work." },
              { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", label: "Team lunch. The best ideas happen away from screens." },
              { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", label: "Late night. Coffee. The build never really stops." },
            ].map((photo, i) => (
              <motion.div key={photo.label} className="group relative aspect-[4/3] overflow-hidden bg-white" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] } } }}>
                <img src={photo.src} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/25 to-transparent p-4 pt-16">
                  <span className="text-xs text-gray-700">{photo.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
