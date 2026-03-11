import PropertyDetailClient from "@/components/PropertyDetailClient";
import { getSingleHome } from "@/dal/homes";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const featuredHome = await getSingleHome(id);
  const maptoken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;

  return (
    <PropertyDetailClient featuredHome={featuredHome} maptoken={maptoken} />
  );
}
