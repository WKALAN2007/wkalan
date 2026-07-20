import { HeroSection } from "@/03_Engineering_System/commerce/sections/HeroSection";
import { NewArrivals } from "@/03_Engineering_System/commerce/sections/NewArrivals";
import { Categories } from "@/03_Engineering_System/commerce/sections/Categories";
import { FeaturedCollection } from "@/03_Engineering_System/commerce/sections/FeaturedCollection";
import { CampaignLookbook } from "@/03_Engineering_System/commerce/sections/CampaignLookbook";
import { ProductSpotlight } from "@/03_Engineering_System/commerce/sections/ProductSpotlight";
import { SubscriptionTiers } from "@/03_Engineering_System/commerce/sections/SubscriptionTiers";
import { Testimonials } from "@/03_Engineering_System/commerce/sections/Testimonials";
import { TrustBadges } from "@/03_Engineering_System/commerce/sections/TrustBadges";
import { BlogPreview } from "@/03_Engineering_System/commerce/sections/BlogPreview";
import { Newsletter } from "@/03_Engineering_System/commerce/sections/Newsletter";

export default function CommercePage() {
  return (
    <main>
      {/* 01. Hero */}
      <HeroSection />

      {/* 02. Best Sellers */}
      <NewArrivals />

      {/* 03. Categories */}
      <Categories />

      {/* 04. Why Verdant + Brand Philosophy */}
      <FeaturedCollection />

      {/* 05. From Source to Shelf */}
      <CampaignLookbook />

      {/* 06. Comparison Table */}
      <ProductSpotlight />

      {/* 07. Newsletter CTA */}
      <Newsletter />

      {/* 08. Subscription Tiers */}
      <SubscriptionTiers />

      {/* 09. Testimonials */}
      <Testimonials />

      {/* Trust Badges */}
      <TrustBadges />

      {/* 10. Blog Preview */}
      <BlogPreview />
    </main>
  );
}
