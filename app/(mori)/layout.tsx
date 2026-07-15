import { SmoothScroll } from "@/03_Engineering_System/site/layout/SmoothScroll";
import { MoriHeader } from "@/03_Engineering_System/mori/layout/MoriHeader";
import { MoriFooter } from "@/03_Engineering_System/mori/layout/MoriFooter";

export default function MoriLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <MoriHeader />
      {children}
      <MoriFooter />
    </>
  );
}
