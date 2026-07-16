import { notFound } from "next/navigation";
import { offers } from "@/03_Engineering_System/hospitality/data";
import { DetailPage } from "@/03_Engineering_System/hospitality/pages/DetailPage";

export async function generateStaticParams() {
  return offers.map((o) => ({ slug: o.slug }));
}

export default async function OfferDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offer = offers.find((o) => o.slug === slug);
  if (!offer) notFound();

  return (
    <DetailPage
      heroImage={offer.heroImage}
      title={offer.title}
      label="OFFERS"
      description={offer.description}
      gallery={offer.gallery}
      backHref="/hospitality"
      backLabel="OFFERS"
    />
  );
}
