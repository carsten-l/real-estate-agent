import AgentCard from "@/components/AgentCard";
import { HeadlineRibbon } from "@/components/HeadlineRibbon";
import { getAllAgents } from "@/dal/agents";

export default async function AgentsPage() {
  const agents = await getAllAgents();

  return (
    <>
      <HeadlineRibbon headline="Medarbejdere i Roskilde" />
      <section className="px-3 py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12 text-center">
          <div className="grid md:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <AgentCard data={agent} key={agent.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
