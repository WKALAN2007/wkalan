import { ManifestoHero } from "@/03_Engineering_System/site/sections/ManifestoHero";
import { TheProcess } from "@/03_Engineering_System/site/sections/TheProcess";
import { SelectedStories } from "@/03_Engineering_System/site/sections/SelectedStories";
import { TheInvitation } from "@/03_Engineering_System/site/sections/TheInvitation";

/**
 * WKALAN Homepage
 *
 * Hero → Process → Stories → Pricing
 */
export default function Home() {
  return (
    <main>
      <ManifestoHero />
      <TheProcess />
      <SelectedStories />
      <TheInvitation />
    </main>
  );
}
