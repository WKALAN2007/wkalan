import { notFound } from "next/navigation";
import { restaurants } from "@/03_Engineering_System/hospitality/data";
import { DetailPage } from "@/03_Engineering_System/hospitality/pages/DetailPage";

export async function generateStaticParams() {
  return restaurants.map((r) => ({ slug: r.slug }));
}

export default async function DiningDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const restaurant = restaurants.find((r) => r.slug === slug);
  if (!restaurant) notFound();

  return (
    <DetailPage
      heroImage={restaurant.heroImage}
      title={restaurant.name}
      subtitle={restaurant.cuisine}
      label="DINING"
      description={restaurant.description}
      gallery={restaurant.gallery}
      meta={[
        { label: "CUISINE", value: restaurant.cuisine },
        { label: "HOURS", value: restaurant.hours },
        { label: "DRESS CODE", value: restaurant.dress },
      ]}
      backHref="/hospitality"
      backLabel="DINING"
    />
  );
}
