"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    verb: "Observe",
    zh: "觀察",
    body: "Before I turn on the camera, I spend days — sometimes weeks — just being there. No agenda. No shot list. I want to understand the rhythm of a place before I try to capture it. The best stories reveal themselves when you stop looking for them. So I sit. I watch. I take notes by hand, because typing creates distance. I wait until the place forgets I'm there. That's when the real filming begins.",
  },
  {
    verb: "Listen",
    zh: "傾聽",
    body: "Most interviews are interrogations disguised as conversations. I do the opposite. I bring a camera and no questions. I let people talk about whatever they want. The most important things people tell you, they usually don't plan to say. They come out in the silences between topics, in the way someone's voice changes when they talk about something they've never said out loud. My job is not to extract information. It's to create a space where someone feels safe enough to be honest.",
  },
  {
    verb: "Wait",
    zh: "等待",
    body: "I've waited four days for someone to stop being self-conscious in front of the lens. I've waited two weeks for the right weather to film a single street corner. I've waited months for a subject to trust me enough to share the story they really want to tell. Patience isn't a production technique. It's a form of respect. The video that takes two months to make doesn't feel like it took two months to watch. But every person who appears in it knows they weren't rushed. That matters more than efficiency.",
  },
  {
    verb: "Create",
    zh: "創作",
    body: "Editing is where the storytelling actually happens. I edit alone. Late at night, when the city outside is quiet. I don't use templates or presets. Every cut is a decision. Every transition is a choice about what the audience should feel next. I usually spend three times longer editing than filming. The goal is never to make something that looks impressive. The goal is to make something that feels true. If someone finishes one of my videos and sits quietly for a moment — that's the only metric I care about.",
  },
];

export function CinematicProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh] overflow-hidden bg-[#0A0A0A]"
    >
      {/* Sticky container */}
      <div className="sticky top-0 flex h-screen items-center">
        {/* Breathing background layer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A]"
          style={{ y: bgY }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 sm:px-8">
          <div className="mb-16">
            <span className="text-xs tracking-[0.25em] text-white/20">
              CHAPTER 04 · HOW I WORK
            </span>
            <h2 className="mt-6 font-heading text-4xl tracking-[-0.01em] text-white/80 sm:text-6xl">
              Four verbs.
              <br />
              <span className="text-white/25">That&apos;s the whole method.</span>
            </h2>
          </div>

          <div className="flex flex-col">
            {steps.map((step, i) => {
              const stepProgress = useTransform(
                scrollYProgress,
                [i * 0.2 + 0.05, i * 0.2 + 0.2],
                [0, 1],
              );

              return (
                <motion.div
                  key={step.verb}
                  className="flex flex-col gap-3 border-b border-white/[0.06] py-8 sm:flex-row sm:gap-12"
                  style={{ opacity: stepProgress }}
                >
                  <div className="flex w-32 shrink-0 flex-col gap-1 sm:w-40">
                    <motion.span
                      className="font-heading text-3xl text-white/85 sm:text-4xl"
                      style={{
                        y: useTransform(stepProgress, [0, 1], [24, 0]),
                        opacity: stepProgress,
                      }}
                    >
                      {step.verb}
                    </motion.span>
                    <span className="text-xs tracking-[0.1em] text-white/20">
                      {step.zh}
                    </span>
                  </div>
                  <motion.p
                    className="max-w-[520px] text-sm leading-relaxed text-white/30 sm:text-base"
                    style={{
                      y: useTransform(stepProgress, [0, 1], [16, 0]),
                      opacity: stepProgress,
                    }}
                  >
                    {step.body}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
