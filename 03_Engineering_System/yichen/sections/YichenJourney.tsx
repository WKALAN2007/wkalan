"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Chapter {
  label: string;
  title: string;
  body: string;
  image?: "portrait" | "landscape" | "detail";
  imageSrc?: string;
  imageFocus?: "left" | "right" | "center";
  imagePosition?: "left" | "right" | "full" | "none";
  dark?: boolean;
}

const chapters: Chapter[] = [
  {
    label: "1998 · Zhejiang",
    title: "Grandmother's Corner Shop",
    body: "Lin Yichen was born to an ordinary family in Zhejiang. His father was a bus driver, his mother a nurse. His parents worked long hours. The place he spent most of his childhood was his grandmother's corner shop. After school each day, he sat at the doorway, watching neighbors chat. Some shared good news, others complained about life, some just sat quietly. That was when he first realized: every person's life is worth being heard.",
    image: "portrait",
    imageSrc: "/yichen-grandmother.jpg",
    imagePosition: "right",
  },
  {
    label: "2004 · Hangzhou",
    title: "The Quiet Observer",
    body: "In high school, Lin Yichen was neither the top student nor the class president. He was ordinary. But he had one habit that set him apart: he observed. He noticed who always ate alone, who had grown quiet lately, who was quietly working hard. Classmates thought he was shy. He was simply more attentive than everyone else — attentive to the things people were too busy to notice.",
    image: "detail",
    imageSrc: "/yichen-observer.jpg",
    imagePosition: "left",
  },
  {
    label: "2009 · Shanghai",
    title: "Learning to Tell Stories",
    body: "He studied journalism at university. He learned about framing, narrative, the power of a good question. His professors praised his technical skills. But something felt off. The stories taught in class were about important people doing important things. What he remembered were the stories from the corner shop — ordinary people, living ordinary lives, full of extraordinary moments no one recorded.",
    image: "landscape",
    imageSrc: "/yichen-landscape.jpg",
    imagePosition: "full",
  },
  {
    label: "2014 · Shanghai",
    title: "Chasing the Algorithm",
    body: "After graduation, he joined a new media company. Every day: chasing trending topics, optimizing for clicks, writing sensational headlines. A year later, his videos had millions of views. But he had never felt so lost. The more people watched, the less he understood why he was making any of it.",
    image: "landscape",
    imageSrc: "/yichen-algorithm.jpg",
    imagePosition: "full",
  },
  {
    label: "2015 · Zhejiang",
    title: "Grandmother's Words",
    body: 'He went home. Sat in his old spot at the corner shop doorway. His grandmother looked at him — really looked — and said: "Not everything that matters makes the trending list." He quit the following week. Began making the videos he actually believed in.',
    image: "portrait",
    imageSrc: "/yichen-grandma-words.jpg",
    imagePosition: "right",
    imageFocus: "right",
  },
  {
    label: "Present · Hangzhou",
    title: "A Different Kind of Creator",
    body: "Now he makes videos about cities and the people who shape them. About architecture and memory. About how technology changes the way we see each other. About the history living in old streets and small shops. He releases twenty videos a year. Each one takes months. Each one is an attempt to practice what his grandmother taught him: pay attention to what the algorithm overlooks.",
    image: "landscape",
    imageSrc: "/yichen-landscape.jpg",
    imagePosition: "left",
  },
];

function PlaceholderImage({
  type,
  src,
  alt,
  progress,
  focus = "center",
}: {
  type: "portrait" | "landscape" | "detail";
  src?: string;
  alt?: string;
  progress: any;
  focus?: "left" | "right" | "center";
}) {
  const aspect =
    type === "portrait" ? "aspect-[3/4]" : type === "detail" ? "aspect-[1/1]" : "aspect-[16/9]";

  const scale = useTransform(progress, [0, 0.5, 1], [0.94, 1, 1.02]);
  const opacity = useTransform(progress, [0, 0.3], [0.6, 1]);

  const objectPosition = focus === "right" ? "100% center" : focus === "left" ? "0% center" : "center center";

  if (src) {
    return (
      <motion.div
        className={`${aspect} w-full overflow-hidden bg-[#E8E4DC]`}
        style={{ scale, opacity }}
      >
        <img
          src={src}
          alt={alt ?? ""}
          className="h-full w-full object-cover"
          style={{ objectPosition }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`${aspect} w-full bg-gradient-to-br from-[#E8E4DC] to-[#F3F2EF] flex items-center justify-center`}
      style={{ scale, opacity }}
    >
      <span className="text-[10px] tracking-[0.15em] text-[#C4BFB5] uppercase">
        {type === "portrait" ? "Portrait" : type === "landscape" ? "Landscape" : "Detail"}
      </span>
    </motion.div>
  );
}

function JourneyChapter({ chapter, index }: { chapter: Chapter; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center 40%"],
  });

  const titleBlur = useTransform(scrollYProgress, [0, 0.4, 1], ["blur(8px)", "blur(2px)", "blur(0px)"]);
  const titleY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const bodyY = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const bodyOpacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);
  const labelY = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const dividerScale = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const isDark = chapter.dark;
  const isFull = chapter.imagePosition === "full" && chapter.image;
  const imageOnLeft = chapter.imagePosition === "left";
  const hasSideImage = (chapter.imagePosition === "left" || chapter.imagePosition === "right") && chapter.image;

  return (
    <div ref={ref} className="my-16 sm:my-24">
      {isDark && (
        <div className="bg-[#1E1E1C] px-8 py-20 sm:px-16 sm:py-28">
          <div className="mx-auto flex max-w-[680px] flex-col gap-6">
            <motion.span className="text-xs tracking-[0.2em] text-white/25" style={{ y: labelY, opacity: scrollYProgress }}>
              {chapter.label}
            </motion.span>
            <motion.h3
              className="font-heading text-2xl tracking-[-0.01em] text-white/85 sm:text-3xl"
              style={{ y: titleY, opacity: scrollYProgress, filter: titleBlur }}
            >
              {chapter.title}
            </motion.h3>
            <motion.p
              className="text-sm leading-relaxed text-white/45 sm:text-base"
              style={{ y: bodyY, opacity: bodyOpacity }}
            >
              {chapter.body}
            </motion.p>
          </div>
        </div>
      )}

      {isFull && (
        <div className="flex flex-col gap-8">
          <PlaceholderImage type={chapter.image!} src={chapter.imageSrc} alt={chapter.title} progress={scrollYProgress} focus={chapter.imageFocus} />
          <div className="mx-auto flex max-w-[680px] flex-col gap-4 px-4">
            <motion.span className="text-xs tracking-[0.2em] text-[#B8B0A0]" style={{ y: labelY, opacity: scrollYProgress }}>
              {chapter.label}
            </motion.span>
            <motion.h3
              className="font-heading text-2xl tracking-[-0.01em] text-[#1E1E1C] sm:text-3xl"
              style={{ y: titleY, opacity: scrollYProgress, filter: titleBlur }}
            >
              {chapter.title}
            </motion.h3>
            <motion.p
              className="text-sm leading-relaxed text-[#6B6B68] sm:text-base"
              style={{ y: bodyY, opacity: bodyOpacity }}
            >
              {chapter.body}
            </motion.p>
          </div>
        </div>
      )}

      {hasSideImage && (
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className={imageOnLeft ? "order-1" : "order-1 lg:order-2"}>
            <PlaceholderImage type={chapter.image!} src={chapter.imageSrc} alt={chapter.title} progress={scrollYProgress} focus={chapter.imageFocus} />
          </div>
          <div className={`flex flex-col justify-center gap-5 ${imageOnLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}>
            <motion.span className="text-xs tracking-[0.2em] text-[#B8B0A0]" style={{ y: labelY, opacity: scrollYProgress }}>
              {chapter.label}
            </motion.span>
            <motion.h3
              className="font-heading text-2xl tracking-[-0.01em] text-[#1E1E1C] sm:text-3xl"
              style={{ y: titleY, opacity: scrollYProgress, filter: titleBlur }}
            >
              {chapter.title}
            </motion.h3>
            <motion.div
              className="h-[1px] w-10 bg-[#E0DBD0]"
              style={{ scaleX: dividerScale }}
            />
            <motion.p
              className="max-w-[480px] text-sm leading-relaxed text-[#6B6B68] sm:text-base"
              style={{ y: bodyY, opacity: bodyOpacity }}
            >
              {chapter.body}
            </motion.p>
          </div>
        </div>
      )}
    </div>
  );
}

export function YichenJourney() {
  return (
    <section className="bg-[#FAFAF8] py-28 sm:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="text-xs tracking-[0.2em] text-[#B8B0A0]"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            Chapter 03 · The Journey
          </motion.span>
          <motion.p
            className="mt-6 font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-[#1E1E1C] sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
            }}
          >
            Not a timeline.
            <br />
            Just the chapters that shaped him.
          </motion.p>
        </motion.div>

        {chapters.map((chapter, i) => (
          <JourneyChapter key={chapter.label} chapter={chapter} index={i} />
        ))}
      </div>
    </section>
  );
}
