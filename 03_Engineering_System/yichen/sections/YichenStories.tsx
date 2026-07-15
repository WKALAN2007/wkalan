"use client";

import { motion } from "framer-motion";

interface Story {
  title: string;
  subtitle: string;
  why: string;
  process: string;
  result: string;
  image: string;
  url: string;
  layout: "image-left" | "image-right" | "text-only";
}

const stories: Story[] = [
  {
    title: "The Last Bookstore on Hefang Street",
    subtitle: "Hangzhou · 2024 · 18 min",
    why: "I walked past that bookstore for ten years. One day the shutters were down. A sign said: 'Closing after 32 years.' I realized I had never once been inside. I wondered how many others, like me, always meant to go in but never did. I wanted to record what we lose when a neighborhood loses its oldest bookstore — not just the books, but the owner who remembered every customer's name.",
    process: "I spent three weeks with Mr. Zhou, the bookstore owner. At first he refused to be filmed. 'Who wants to watch an old man pack boxes?' he asked. I told him I wasn't there to film him packing. I was there to film him remembering. On the fourth day, he started telling me stories. About the student who came every Saturday for ten years. About the old couple who met at the bookstore in 1987. About the rainy day when everyone stayed for three hours, just reading. I turned off the camera and just listened. Filming began the following week.",
    result: "The video has been viewed 1.2 million times. But more importantly, people in Hangzhou started showing up. Not to buy books — there were none left. Just to say thank you. Mr. Zhou called me afterwards. He said: 'Now I know my life meant something.' That's why I make videos.",
    image: "/yichen-story-1.jpg",
    url: "/mori",
    layout: "image-right",
  },
  {
    title: "How a Village Learned to Remember, Digitally",
    subtitle: "Guizhou · 2023 · 24 min",
    why: "A friend told me about a village where the youngest person was 67. The young had all moved to cities. The village was dying — not just its buildings, but its stories. No one remembered the old songs, the recipes, the names of the mountains. I wanted to understand what happens when a place loses its memory. And whether technology could help preserve what was being forgotten.",
    process: "I lived in the village for six weeks. Taught the elders to use WeChat voice messages to record stories. Built a shared digital album so grandchildren in the city could see their grandparents' daily lives. This wasn't technology saving tradition — it was technology becoming a bridge between generations living in two different worlds. Some of the most precious moments never made it into the video. Too personal. Some things belong only to the village.",
    result: "The village now has a digital archive of over two hundred voice recordings. Three grandchildren came back to visit for the first time in years. I still get voice messages from Grandma Yang, telling me about her vegetable garden. By the numbers, this is one of my least-watched videos. It's my favorite.",
    image: "/yichen-story-2.jpg",
    url: "/basketball",
    layout: "image-left",
  },
  {
    title: "Night Bus No. 28: Six Stories from Midnight to Dawn",
    subtitle: "Hangzhou · 2024 · 14 min",
    why: "I couldn't sleep. Got on a random night bus. The driver looked at me — the only passenger — and said: 'You're new.' We talked until 4 AM. He knew every regular's stop, their names, what they did for work, whether they'd had a good day. I realized the most interesting person in any city is the one everyone overlooks. I wanted to make a video that felt like sitting on that bus.",
    process: "I rode Bus No. 28 every night for two weeks. Filmed only with available light — the bus's fluorescent tubes, street lamps, phone screen glow. No interviews. No voiceover until the very end. Just observation. The driver, Mr. Chen, became my collaborator. He'd tell me who might get on at each stop, what their story was. Most people never appeared on camera. This video is about the space between people — the silences, the glances, the small kindnesses that happen when no one is watching.",
    result: "The comment section was unlike anything I've seen on my channel. Thousands of people shared their own night bus stories. Bus drivers from other cities joined in. Someone wrote: 'I've ridden Bus 28 my whole life and never noticed any of this.' That comment means more to me than any view count ever could.",
    image: "https://images.unsplash.com/photo-1603370848391-6edf683ec831?w=1200&q=80",
    url: "/fashion",
    layout: "image-right",
  },
];

function StoryImagePlaceholder({ title, src, url }: { title: string; src?: string; url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#E8E4DC] to-[#F3F2EF]">
        <motion.div
          className="flex h-full w-full items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { scale: 1.06 },
            visible: {
              scale: 1,
              transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
        >
          {src ? (
            <img src={src} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          ) : (
            <div className="flex flex-col items-center gap-2 px-4 text-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                className="text-[#C4BFB5]/40"
              >
                <rect x="2" y="2" width="20" height="20" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span className="text-[10px] tracking-[0.12em] text-[#C4BFB5]">
                {title}
              </span>
            </div>
          )}
        </motion.div>
        {/* Hover overlay with CTA */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/30">
          <span className="text-sm tracking-[0.12em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            View Project →
          </span>
        </div>
      </div>
    </a>
  );
}

export function YichenStories() {
  return (
    <section className="bg-[#F5F2EC] py-28 sm:py-36">
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
              visible: {
                opacity: 1,
                transition: { duration: 0.7 },
              },
            }}
          >
            Chapter 04 · Selected Stories
          </motion.span>
          <motion.p
            className="mt-6 font-heading text-3xl leading-[1.2] tracking-[-0.01em] text-[#1E1E1C] sm:text-4xl"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.1 },
              },
            }}
          >
            Stories We&apos;ve Crafted.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-24 sm:gap-32">
          {stories.map((story, i) => (
            <motion.article
              key={story.title}
              className="flex flex-col gap-10 lg:gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div
                className="relative"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                <StoryImagePlaceholder title={story.title} src={story.image} url={story.url} />
              </motion.div>

              <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
                <motion.div
                  className="flex flex-col gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.7,
                        delay: 0.2,
                      },
                    },
                  }}
                >
                  <span className="text-[11px] tracking-[0.15em] text-[#A0A09C]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={story.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/title"
                  >
                    <h3 className="font-heading text-xl tracking-[-0.01em] text-[#1E1E1C] transition-colors duration-300 group-hover/title:text-[#2C3E6B] sm:text-2xl">
                      {story.title}
                    </h3>
                  </a>
                  <span className="text-xs tracking-[0.08em] text-[#B8B0A0]">
                    {story.subtitle}
                  </span>
                  <a
                    href={story.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-xs tracking-[0.1em] text-[#2C3E6B] underline underline-offset-4 transition-colors hover:text-[#1E1E1C]"
                  >
                    View full project →
                  </a>
                </motion.div>

                <motion.div
                  className="flex flex-col gap-10"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
                    },
                  }}
                >
                  <motion.div
                    className="flex flex-col gap-2"
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                  >
                    <span className="text-[10px] tracking-[0.15em] text-[#2C3E6B]/60">
                      Why I Made This
                    </span>
                    <p className="max-w-[580px] text-sm leading-relaxed text-[#6B6B68] sm:text-base">
                      {story.why}
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex flex-col gap-2"
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                  >
                    <span className="text-[10px] tracking-[0.15em] text-[#2C3E6B]/60">
                      The Process
                    </span>
                    <p className="max-w-[580px] text-sm leading-relaxed text-[#6B6B68] sm:text-base">
                      {story.process}
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex flex-col gap-2"
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                  >
                    <span className="text-[10px] tracking-[0.15em] text-[#2C3E6B]/60">
                      What I Learned
                    </span>
                    <p className="max-w-[580px] text-sm leading-relaxed text-[#6B6B68] sm:text-base">
                      {story.result}
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {i < stories.length - 1 && (
                <div className="h-[1px] w-full bg-[#E0DBD0]" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
