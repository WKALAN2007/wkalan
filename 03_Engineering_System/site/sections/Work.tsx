"use client";

import { motion } from "framer-motion";
import { Container } from "@/02_Design_System/components/Container";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "WKALAN",
    role: "创始人个人网站 · 大学生 · 朝圣者",
    description:
      "一个走过圣地亚哥之路的年轻人，想让世界看到他不仅仅是一个学生。这个网站就是他的数字身份——安静、真实、不设防。",
    direction: "内省的 · 温暖的 · 少年感",
    url: "https://wkalan2007.github.io/wkalanpersonalwebsite/#library",
  },
  {
    name: "小白剪了個球",
    role: "Bilibili 创作者",
    description:
      "WKALAN 的第一位客户。从内容创作者到被记住的人——我们为他设计了一个让观众能真正了解他的空间。",
    direction: "真实的 · 有态度的 · 少年气",
    url: "https://wkalan2007.github.io/ifyoulovebasketball",
  },
];

export function Work() {
  return (
    <section id="work" className="py-[var(--space-section)] bg-surface">
      <Container>
        {/* Section header */}
        <motion.div
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            className="text-sm font-medium uppercase tracking-[var(--tracking-wide)] text-text-secondary"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            作品
          </motion.span>
          <motion.h2
            className="font-heading text-[var(--text-section-heading)] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-primary"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            我们塑造的
            <br />
            数字身份。
          </motion.h2>
          <motion.p
            className="max-w-lg text-lg leading-[var(--leading-relaxed)] text-text-secondary"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            每一个项目都是一次合作，不是一个订单。以下是我们帮助呈现的人。
          </motion.p>
        </motion.div>

        {/* Project list */}
        <div className="mt-20 flex flex-col divide-y divide-border">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className="group flex flex-col gap-8 py-12 transition-all duration-500 sm:flex-row sm:items-start sm:justify-between sm:gap-16"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.12 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Name + Role */}
              <div className="flex flex-col gap-1 sm:w-1/3">
                <h3 className="font-heading text-3xl leading-[var(--leading-snug)] text-primary transition-colors duration-500 group-hover:text-accent">
                  {project.name}
                </h3>
                <span className="text-sm text-text-secondary">
                  {project.role}
                </span>
              </div>

              {/* Description + Direction */}
              <div className="flex flex-col gap-4 sm:w-1/3">
                <p className="text-base leading-[var(--leading-relaxed)] text-text-secondary">
                  {project.description}
                </p>
                <span className="text-xs font-medium tracking-[var(--tracking-wide)] text-text-tertiary">
                  {project.direction}
                </span>
              </div>

              {/* Arrow indicator */}
              <div className="flex items-center sm:w-auto sm:pt-1">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-text-tertiary transition-all duration-500 hover:border-primary hover:bg-primary hover:text-white"
                  aria-label={`访问 ${project.name}`}
                >
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="mt-16 text-center text-sm text-text-tertiary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          更多作品即将到来。每一个，都是一个真实的人。
        </motion.p>
      </Container>
    </section>
  );
}
