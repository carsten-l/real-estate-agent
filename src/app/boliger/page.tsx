import PropertyCard from "@/components/PropertyCard";
import { HeadlineRibbon } from "@/components/HeadlineRibbon";
import { getAllHomes } from "@/dal/homes";

export default async function HomesPage() {
  const homes = await getAllHomes();

  return (
    <>
      <HeadlineRibbon headline="Boliger til salg" />
      <section className="px-3 py-24">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            {homes.map((home) => (
              <PropertyCard data={home} key={home.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
