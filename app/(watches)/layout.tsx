import type { Metadata } from "next";
import { SmoothScroll } from "@/03_Engineering_System/watches/layout/SmoothScroll";
import { WatchHeader } from "@/03_Engineering_System/watches/layout/WatchHeader";
import { WatchFooter } from "@/03_Engineering_System/watches/layout/WatchFooter";
import { CustomCursor } from "@/03_Engineering_System/watches/layout/CustomCursor";
import { MuseumLoader } from "@/03_Engineering_System/watches/components/MuseumLoader";
import { GoldParticles } from "@/03_Engineering_System/watches/components/GoldParticles";
import { SampleNav } from "@/03_Engineering_System/site/layout/SampleNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier Horlogère — Archive of Fine Timepieces",
  description:
    "A curated archive of exceptional Swiss timepieces. Each watch photographed, catalogued, and graded — from Class B to OMEGA. Preserving the art of haute horlogerie since 1887.",
};

export default function WatchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MuseumLoader />
      <SmoothScroll />
      <GoldParticles />
      <CustomCursor />
      <WatchHeader />
      <div className="pb-16">{children}</div>
      <SampleNav current="/watches" />
      <WatchFooter />
    </>
  );
}
