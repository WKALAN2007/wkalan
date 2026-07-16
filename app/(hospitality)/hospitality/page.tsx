import { HospitalityHero } from "@/03_Engineering_System/hospitality/sections/HospitalityHero";
import { HospitalityAccommodations } from "@/03_Engineering_System/hospitality/sections/HospitalityAccommodations";
import { HospitalityFeatured } from "@/03_Engineering_System/hospitality/sections/HospitalityFeatured";
import { HospitalityAbout } from "@/03_Engineering_System/hospitality/sections/HospitalityAbout";
import { HospitalityExperiences } from "@/03_Engineering_System/hospitality/sections/HospitalityExperiences";
import { HospitalityStories } from "@/03_Engineering_System/hospitality/sections/HospitalityStories";
import { HospitalityOffers } from "@/03_Engineering_System/hospitality/sections/HospitalityOffers";
import { HospitalityDining } from "@/03_Engineering_System/hospitality/sections/HospitalityDining";
import { HospitalityGallery } from "@/03_Engineering_System/hospitality/sections/HospitalityGallery";
import { HospitalityNewsletter } from "@/03_Engineering_System/hospitality/sections/HospitalityNewsletter";

export default function HospitalityPage() {
  return (
    <main>
      <HospitalityHero />
      <HospitalityAccommodations />
      <HospitalityFeatured />
      <HospitalityAbout />
      <HospitalityExperiences />
      <HospitalityStories />
      <HospitalityOffers />
      <HospitalityDining />
      <HospitalityGallery />
      <HospitalityNewsletter />
    </main>
  );
}
