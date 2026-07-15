import { SmoothScroll } from "@/03_Engineering_System/site/layout/SmoothScroll";
import { Header } from "@/03_Engineering_System/site/layout/Header";
import { Footer } from "@/03_Engineering_System/site/layout/Footer";
import { PageLoader } from "@/03_Engineering_System/site/layout/PageLoader";
import { NoiseOverlay } from "@/02_Design_System/components/NoiseOverlay";
import { ScrollProgress } from "@/02_Design_System/components/ScrollProgress";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageLoader />
      <SmoothScroll />
      <ScrollProgress />
      <NoiseOverlay />
      <Header />
      {children}
      <Footer />
    </>
  );
}
