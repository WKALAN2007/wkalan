"use client";

import { motion } from "framer-motion";

const people = [
  { photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", name: "David Kim", role: "Founder & CEO" },
  { photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80", name: "Sarah Okafor", role: "Design" },
  { photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80", name: "Marcus Chen", role: "Engineering" },
  { photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80", name: "Amara Nwosu", role: "Research" },
  { photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80", name: "James Lindström", role: "Infrastructure" },
  { photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80", name: "Yuki Tanaka", role: "Community" },
];

export function NorthPeople() {
  return (
    <section className="bg-white py-28 sm:py-36">
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
          Our People
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p, i) => (
            <motion.div
              key={p.name}
              className="group flex flex-col gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-white">
                <img src={p.photo} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-800">{p.name}</span>
                <span className="text-xs tracking-[0.06em] text-gray-400">{p.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
