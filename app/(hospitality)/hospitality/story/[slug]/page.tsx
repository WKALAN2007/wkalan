import { notFound } from "next/navigation";
import { stories } from "@/03_Engineering_System/hospitality/data";
import { DetailPage } from "@/03_Engineering_System/hospitality/pages/DetailPage";

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) notFound();

  return (
    <DetailPage
      heroImage={story.heroImage}
      title={story.title}
      label={story.label}
      description={story.description}
      gallery={story.gallery}
      meta={[
        { label: "DATE", value: story.date },
        { label: "AUTHOR", value: story.author },
      ]}
      backHref="/hospitality"
      backLabel="STORIES"
    />
  );
}
