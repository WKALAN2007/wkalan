import { notFound } from "next/navigation";
import { properties } from "@/03_Engineering_System/hospitality/data";
import { DetailPage } from "@/03_Engineering_System/hospitality/pages/DetailPage";

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) notFound();

  return (
    <DetailPage
      heroImage={property.heroImage}
      title={property.name}
      subtitle={property.location}
      label="AURELIA PROPERTIES"
      description={property.description}
      gallery={property.gallery}
      meta={[
        { label: "ROOMS", value: String(property.rooms) },
        { label: "RESTAURANTS", value: String(property.restaurants) },
        { label: "LOCATION", value: property.location },
      ]}
      highlights={property.highlights}
      backHref="/hospitality"
      backLabel="PROPERTIES"
    />
  );
}
