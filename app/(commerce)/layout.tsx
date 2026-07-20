import { SmoothScroll } from "@/03_Engineering_System/commerce/layout/SmoothScroll";
import { CommerceHeader } from "@/03_Engineering_System/commerce/layout/CommerceHeader";
import { CommerceFooter } from "@/03_Engineering_System/commerce/layout/CommerceFooter";
import { PageLoader } from "@/03_Engineering_System/commerce/layout/PageLoader";
import { NoiseOverlay } from "@/02_Design_System/components/NoiseOverlay";
import { ScrollProgress } from "@/02_Design_System/components/ScrollProgress";
import { CartProvider } from "@/03_Engineering_System/commerce/components/CartContext";
import { CartDrawer } from "@/03_Engineering_System/commerce/components/CartDrawer";
import { SampleNav } from "@/03_Engineering_System/site/layout/SampleNav";

export default function CommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <PageLoader />
      <SmoothScroll />
      <ScrollProgress />
      <NoiseOverlay />
      <CommerceHeader />
      <div className="pb-16">{children}</div>
      <SampleNav current="/commerce" />
      <CommerceFooter />
      <CartDrawer />
    </CartProvider>
  );
}
