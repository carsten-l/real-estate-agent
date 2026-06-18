import type { Agent } from "@/lib/types";
import { fetcher } from "@/lib/fetcher";
import { cacheLife } from "next/cache";

export async function getFeaturedAgents(): Promise<Agent[]> {
  "use cache";
  cacheLife("max")
  
  return fetcher<Agent[]>(`/agents?_limit=3`);
}

export async function getAllAgents(): Promise<Agent[]> {
  "use cache";
  cacheLife("max")
  
  return fetcher<Agent[]>(`/agents`);
}

export async function getSingleAgent(id: string): Promise<Agent> {
  return fetcher<Agent>(`/agents/${id}`);
} 
