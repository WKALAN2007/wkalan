import { LumenOpening } from "@/03_Engineering_System/lumen/sections/LumenOpening";
import { LumenWhy } from "@/03_Engineering_System/lumen/sections/LumenWhy";
import { LumenProblem } from "@/03_Engineering_System/lumen/sections/LumenProblem";
import { LumenValues } from "@/03_Engineering_System/lumen/sections/LumenValues";
import { LumenProduct } from "@/03_Engineering_System/lumen/sections/LumenProduct";
import { LumenStats } from "@/03_Engineering_System/lumen/sections/LumenStats";
import { LumenStories } from "@/03_Engineering_System/lumen/sections/LumenStories";
import { LumenBehind } from "@/03_Engineering_System/lumen/sections/LumenBehind";
import { LumenPeople } from "@/03_Engineering_System/lumen/sections/LumenPeople";
import { LumenVision } from "@/03_Engineering_System/lumen/sections/LumenVision";
import { LumenCTA } from "@/03_Engineering_System/lumen/sections/LumenCTA";
import { LumenMarquee } from "@/03_Engineering_System/lumen/sections/LumenMarquee";
import { StickySection } from "@/03_Engineering_System/lumen/layout/StickySection";

type PageItem =
  | { type: "section"; component: React.ReactNode }
  | { type: "marquee"; component: React.ReactNode };

const items: PageItem[] = [
  { type: "section", component: <LumenOpening key="opening" /> },
  { type: "marquee", component: <LumenMarquee key="mq1" text="Capture · Understand · Connect · Create" /> },
  { type: "section", component: <LumenWhy key="why" /> },
  { type: "section", component: <LumenProblem key="problem" /> },
  { type: "section", component: <LumenValues key="values" /> },
  { type: "section", component: <LumenProduct key="product" /> },
  { type: "marquee", component: <LumenMarquee key="mq2" text="幫助每一個人 · 在資訊爆炸的時代 · 依然能夠清晰地思考" /> },
  { type: "section", component: <LumenStats key="stats" /> },
  { type: "section", component: <LumenStories key="stories" /> },
  { type: "section", component: <LumenBehind key="behind" /> },
  { type: "section", component: <LumenPeople key="people" /> },
  { type: "marquee", component: <LumenMarquee key="mq3" text="Clarity First · Human Before AI · Think Deeply · Build With Purpose" /> },
  { type: "section", component: <LumenVision key="vision" /> },
  { type: "section", component: <LumenCTA key="cta" /> },
];

export default function LumenPage() {
  const sectionCount = items.filter((it) => it.type === "section").length;
  let sectionIndex = 0;

  return (
    <main>
      {items.map((item, i) => {
        if (item.type === "marquee") {
          return <div key={i}>{item.component}</div>;
        }
        const idx = sectionIndex++;
        return (
          <StickySection key={i} index={idx} total={sectionCount}>
            {item.component}
          </StickySection>
        );
      })}
    </main>
  );
}
