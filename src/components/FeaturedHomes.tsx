import PropertyCard from "./PropertyCard";
import { getFeaturedHomes } from "@/dal/homes";

export default async function FeaturedHomes() {
  const featuredHomes = await getFeaturedHomes();

  return (
    <section className="px-3 py-24">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-center text-4xl font-bold mb-4">
          Udvalgte boliger
        </h2>
        <p className="text-center mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          Maiores aliquam, expedita, nisi soluta ea modi exercitationem nostrum
          autem aut eligendi cumque quis, eius molestiae odio.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredHomes.map((featuredHome) => (
            <PropertyCard data={featuredHome} key={featuredHome.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
