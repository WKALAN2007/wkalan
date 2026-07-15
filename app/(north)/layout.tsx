import { SmoothScroll } from "@/03_Engineering_System/site/layout/SmoothScroll";
import { NorthHeader } from "@/03_Engineering_System/north/layout/NorthHeader";
import { NorthFooter } from "@/03_Engineering_System/north/layout/NorthFooter";
import { CookieBanner } from "@/03_Engineering_System/north/layout/CookieBanner";
import { BackToHome } from "@/03_Engineering_System/north/layout/BackToHome";

export default function NorthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SmoothScroll />
      <NorthHeader />
      {children}
      <NorthFooter />
      <CookieBanner />
      <BackToHome />
    </>
  );
}
