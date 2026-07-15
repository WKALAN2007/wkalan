import "@/02_Design_System/lumen-theme.css";
import { SmoothScroll } from "@/03_Engineering_System/site/layout/SmoothScroll";
import { LumenHeader } from "@/03_Engineering_System/lumen/layout/LumenHeader";
import { LumenFooter } from "@/03_Engineering_System/lumen/layout/LumenFooter";
import { LumenCursor } from "@/03_Engineering_System/lumen/layout/LumenCursor";
import { LumenPreloader } from "@/03_Engineering_System/lumen/layout/LumenPreloader";
import { LumenDecor } from "@/03_Engineering_System/lumen/layout/LumenDecor";
import { BackToHome } from "@/03_Engineering_System/lumen/layout/BackToHome";

export default function LumenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LumenPreloader />
      <LumenDecor />
      <SmoothScroll />
      <LumenCursor />
      <LumenHeader />
      {children}
      <LumenFooter />
      <BackToHome />
    </>  );
}
