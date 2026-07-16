import { SmoothScroll } from "@/03_Engineering_System/site/layout/SmoothScroll";
import { ApparelHeader } from "@/03_Engineering_System/apparel/layout/ApparelHeader";
import { ApparelFooter } from "@/03_Engineering_System/apparel/layout/ApparelFooter";
import { CartDrawer } from "@/03_Engineering_System/apparel/layout/CartDrawer";
import { CartProvider } from "@/context/CartContext";

export default function ApparelLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <SmoothScroll />
      <ApparelHeader />
      {children}
      <ApparelFooter />
      <CartDrawer />
    </CartProvider>
  );
}
