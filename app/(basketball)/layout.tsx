import { SmoothScroll } from "@/03_Engineering_System/site/layout/SmoothScroll";
import { LoadingScreen } from "@/03_Engineering_System/basketball/layout/LoadingScreen";
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
      <LoadingScreen />
      <BasketballHeader />
      {children}
      <BasketballFooter />
    </>
  );
}
