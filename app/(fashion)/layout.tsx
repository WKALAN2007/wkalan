import { SmoothScroll } from "@/03_Engineering_System/site/layout/SmoothScroll";
import { FashionHeader } from "@/03_Engineering_System/fashion/layout/FashionHeader";
import { FashionFooter } from "@/03_Engineering_System/fashion/layout/FashionFooter";

export default function FashionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SmoothScroll />
      <FashionHeader />
      {children}
      <FashionFooter />
    </>
  );
}
