import { Agent } from "@/lib/types";

export async function getFeaturedAgents(): Promise<Agent[]> {
  const response = await fetch(
    "http://dinmaegler.onrender.com/agents?_limit=3",
  );
  if (!response.ok)
    throw new Error(`Failed to load data: ${response.statusText}`);
  return await response.json();
}

export async function getAllAgents(): Promise<Agent[]> {
  const response = await fetch("http://dinmaegler.onrender.com/agents", {
    next: { revalidate: 60 * 60 * 24 * 30 },
  });
  if (!response.ok)
    throw new Error(`Failed to load data: ${response.statusText}`);
  return await response.json();
}

export async function getSingleAgent(id: string): Promise<Agent> {
  const response = await fetch(`http://dinmaegler.onrender.com/agents/${id}`, {
    next: {
      revalidate: 60 * 60 * 24 * 30,
      tags: [`agent-${id}`],
    },
  });
  if (!response.ok)
    throw new Error(`Failed to load data: ${response.statusText}`);
  return response.json();
}
