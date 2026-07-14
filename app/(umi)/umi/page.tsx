import { UmiHero } from "@/03_Engineering_System/umi/sections/UmiHero";
import { UmiStory } from "@/03_Engineering_System/umi/sections/UmiStory";
import { UmiBenefits } from "@/03_Engineering_System/umi/sections/UmiBenefits";
import { UmiProducts } from "@/03_Engineering_System/umi/sections/UmiProducts";
import { UmiUsage } from "@/03_Engineering_System/umi/sections/UmiUsage";
import { UmiLoyalty } from "@/03_Engineering_System/umi/sections/UmiLoyalty";

export default function UmiPage() {
  return (
    <main>
      <UmiHero />
      <UmiStory />
      <UmiBenefits />
      <UmiProducts />
      <UmiUsage />
      <UmiLoyalty />
    </main>
  );
}
