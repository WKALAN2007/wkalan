import { SmoothScroll } from "@/03_Engineering_System/site/layout/SmoothScroll";
import { BasketballHeader } from "@/03_Engineering_System/basketball/layout/BasketballHeader";
import { BasketballFooter } from "@/03_Engineering_System/basketball/layout/BasketballFooter";

export default function BasketballLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SmoothScroll />
      <BasketballHeader />
      {children}
      <BasketballFooter />
    </>
  );
}
