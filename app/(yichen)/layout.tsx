import { SmoothScroll } from "@/03_Engineering_System/site/layout/SmoothScroll";
import { YichenHeader } from "@/03_Engineering_System/yichen/layout/YichenHeader";
import { YichenFooter } from "@/03_Engineering_System/yichen/layout/YichenFooter";

export default function YichenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SmoothScroll />
      <YichenHeader />
      {children}
      <YichenFooter />
    </>
  );
}
