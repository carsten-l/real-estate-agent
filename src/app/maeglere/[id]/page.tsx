import AgentCard from "@/components/AgentCard";
import { getSingleAgent } from "@/dal/agents";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const featuredAgent = await getSingleAgent(id);

  return (
    <section className="bg-white px-3 py-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-[3fr_1fr] gap-6">
          <div>
            <AgentCard
              data={featuredAgent}
              horizontal={true}
              includeLink={false}
              includeAbout={true}
            />
          </div>
          <section className="bg-primary text-white p-6 text-center self-start">
            <h2 className="text-2xl text-balance font-bold mb-4 ">
              DinMægler formidler lokalområdet
            </h2>
            <p className="mb-6">Salg eller leje </p>
            <p>
              Kontakt os på <br />
              tlf +45 7070 4000
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
