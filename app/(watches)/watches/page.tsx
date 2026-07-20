import { HeroSection } from "@/03_Engineering_System/watches/sections/HeroSection";
import { ArchiveSection } from "@/03_Engineering_System/watches/sections/ArchiveSection";
import { AboutSection } from "@/03_Engineering_System/watches/sections/AboutSection";
import { GallerySection } from "@/03_Engineering_System/watches/sections/GallerySection";
import { JournalSection } from "@/03_Engineering_System/watches/sections/JournalSection";
import { CuratorSection } from "@/03_Engineering_System/watches/sections/CuratorSection";

export default function WatchesPage() {
  return (
    <main>
      {/* 01. Hero — Full-bleed archival photograph with Cinzel headline */}
      <HeroSection />

      {/* 02. The Archive — Museum-grade catalog of graded timepieces */}
      <ArchiveSection />

      {/* 03. About the Archive — Editorial narrative with Playfair Display */}
      <AboutSection />

      {/* 04. Gallery — Archival photographs */}
      <GallerySection />

      {/* 05. The Journal — Notes from the Atelier */}
      <JournalSection />

      {/* 06. The Curator — Submit a timepiece */}
      <CuratorSection />
    </main>
  );
}
