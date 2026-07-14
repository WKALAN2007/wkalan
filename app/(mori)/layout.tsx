import { SmoothScroll } from "@/03_Engineering_System/site/layout/SmoothScroll";
import { MoriHeader } from "@/03_Engineering_System/mori/layout/MoriHeader";
import { MoriFooter } from "@/03_Engineering_System/mori/layout/MoriFooter";
import { IntroTransition } from "@/02_Design_System/components/IntroTransition";

export default function MoriLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <IntroTransition />
      <SmoothScroll />
      <MoriHeader />
      {children}
      <MoriFooter />
    </>
  );
}
