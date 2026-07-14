import { SmoothScroll } from "@/03_Engineering_System/site/layout/SmoothScroll";
import { UmiHeader } from "@/03_Engineering_System/umi/layout/UmiHeader";
import { UmiFooter } from "@/03_Engineering_System/umi/layout/UmiFooter";

export default function UmiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <UmiHeader />
      {children}
      <UmiFooter />
    </>
  );
}
