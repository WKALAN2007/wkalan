import { notFound } from "next/navigation";
import { experiences } from "@/03_Engineering_System/hospitality/data";
import { DetailPage } from "@/03_Engineering_System/hospitality/pages/DetailPage";

export async function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = experiences.find((e) => e.slug === slug);
  if (!experience) notFound();

  return (
    <DetailPage
      heroImage={experience.heroImage}
      title={experience.name}
      label="EXPERIENCES"
      description={experience.description}
      gallery={experience.gallery}
      meta={[{ label: "DURATION", value: experience.duration }]}
      backHref="/hospitality"
      backLabel="EXPERIENCES"
    />
  );
}
