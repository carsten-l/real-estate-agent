import AgentCard from "@/components/AgentCard";
import Link from "next/link";
import { getFeaturedAgents } from "@/dal/agents";

export default async function FeaturedAgents() {
  const agents = await getFeaturedAgents();

  return (
    <section className="bg-white px-3 py-24">
      <div className="container mx-auto text-center px-4 md:px-12">
        <h2 className="text-4xl font-bold mb-4">
          Mød vores engagerede medarbejdere
        </h2>
        <p className="mb-6">
          Din Mægler er garant for altid veluddannet assistance i dit boligsalg.
          <br />
          Kontakt en af vores medarbejdere.{" "}
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <AgentCard data={agent} key={agent.id} />
          ))}
        </div>
        <Link
          href="/maeglere"
          className="bg-primary text-white py-2 px-6 mt-8 inline-block"
        >
          Se alle mæglere
        </Link>
      </div>
    </section>
  );
}
