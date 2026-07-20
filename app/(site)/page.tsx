import { Hero } from "@/03_Engineering_System/site/sections/Hero";
import { Work } from "@/03_Engineering_System/site/sections/Work";
import { Approach } from "@/03_Engineering_System/site/sections/Approach";
import { Contact } from "@/03_Engineering_System/site/sections/Contact";

/**
 * WKALAN Homepage — 2026 rebuild
 *
 * Hero → Work → Approach → Contact
 *
 * Council-driven redesign:
 * - Jobs: Cut from 4 sections to 4 cleaner ones. No case study in hero.
 * - Vignelli: Brand semantics — "be taken seriously online."
 * - Ive: Every pixel is evidence. No decoration.
 * - Fukasawa: Natural discovery flow, not a push.
 * - Buffett: No pricing on homepage. Work justifies value.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Approach />
      <Contact />
    </main>
  );
}
