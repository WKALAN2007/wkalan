import { FashionHero } from "@/03_Engineering_System/fashion/sections/FashionHero";
import { FashionCategoryGrid } from "@/03_Engineering_System/fashion/sections/FashionCategoryGrid";
import { FashionManifesto } from "@/03_Engineering_System/fashion/sections/FashionManifesto";
import { FashionLookbook } from "@/03_Engineering_System/fashion/sections/FashionLookbook";
import { FashionNewsletter } from "@/03_Engineering_System/fashion/sections/FashionNewsletter";

export default function FashionPage() {
  return (
    <main>
      <FashionHero />
      <FashionCategoryGrid />
      <FashionManifesto />
      <FashionLookbook />
      <FashionNewsletter />
    </main>
  );
}
