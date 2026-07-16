import { ApparelHero } from "@/03_Engineering_System/apparel/sections/ApparelHero";
import { CategoryGrid } from "@/03_Engineering_System/apparel/sections/CategoryGrid";
import { FeaturedProducts } from "@/03_Engineering_System/apparel/sections/FeaturedProducts";
import { LookbookStrip } from "@/03_Engineering_System/apparel/sections/LookbookStrip";
import { BrandStory } from "@/03_Engineering_System/apparel/sections/BrandStory";
import { NewsletterCTA } from "@/03_Engineering_System/apparel/sections/NewsletterCTA";

export default function ApparelPage() {
  return (
    <main>
      <ApparelHero />
      <CategoryGrid />
      <FeaturedProducts />
      <LookbookStrip />
      <BrandStory />
      <NewsletterCTA />
    </main>
  );
}
