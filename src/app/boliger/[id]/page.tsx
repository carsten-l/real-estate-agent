import PropertyDetailClient from "@/components/PropertyDetailClient";
import { getSingleHome } from "@/dal/homes";

type PropertyDetailPageProps = Readonly<{
  params: Promise<{ id: string }>;
}>;

export default async function Page({ params }: PropertyDetailPageProps) {
  const { id } = await params;
  const property = await getSingleHome(id);
  const mapToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

  return (
    <PropertyDetailClient property={property} mapToken={mapToken} />
  );
}
