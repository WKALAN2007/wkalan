import { ManifestoHero } from "@/03_Engineering_System/site/sections/ManifestoHero";
import { TheOrigin } from "@/03_Engineering_System/site/sections/TheOrigin";
import { TheProcess } from "@/03_Engineering_System/site/sections/TheProcess";
import { SelectedStories } from "@/03_Engineering_System/site/sections/SelectedStories";
import { TheInvitation } from "@/03_Engineering_System/site/sections/TheInvitation";

/**
 * WKALAN Homepage — Digital Identity Studio
 *
 * Section flow:
 * ManifestoHero  — "品味人生，雕刻身份" (brand statement)
 * TheOrigin      — The Camino story (why this exists)
 * TheProcess     — Savor → Understand → Carve → Reveal
 * SelectedStories — People we've worked with, framed as lives savored
 * TheInvitation   — Pricing tiers + CTA
 */
export default function Home() {
  return (
    <main>
      <ManifestoHero />
      <TheOrigin />
      <TheProcess />
      <SelectedStories />
      <TheInvitation />
    </main>
  );
}
