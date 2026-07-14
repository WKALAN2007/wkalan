import { BasketballHero } from "@/03_Engineering_System/basketball/sections/BasketballHero";
import { BasketballPhilosophy } from "@/03_Engineering_System/basketball/sections/BasketballPhilosophy";
import { BasketballJourney } from "@/03_Engineering_System/basketball/sections/BasketballJourney";
import { BasketballCraft } from "@/03_Engineering_System/basketball/sections/BasketballCraft";
import { BasketballHits } from "@/03_Engineering_System/basketball/sections/BasketballHits";
import { BasketballNumbers } from "@/03_Engineering_System/basketball/sections/BasketballNumbers";
import { BasketballConnect } from "@/03_Engineering_System/basketball/sections/BasketballConnect";

export default function BasketballPage() {
  return (
    <main>
      <BasketballHero />
      <BasketballPhilosophy />
      <BasketballJourney />
      <BasketballCraft />
      <BasketballHits />
      <BasketballNumbers />
      <BasketballConnect />
    </main>
  );
}
