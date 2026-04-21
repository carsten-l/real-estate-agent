import type { Agent } from "@/lib/types";

const API_BASE_URL = "https://dinmaegler.onrender.com";
const REVALIDATE_30_DAYS = 60 * 60 * 24 * 30;

async function parseResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`Failed to load data: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export async function getFeaturedAgents(): Promise<Agent[]> {
  const response = await fetch(`${API_BASE_URL}/agents?_limit=3`, {
    next: { revalidate: REVALIDATE_30_DAYS },
  });

  return parseResponse<Agent[]>(response);
}

export async function getAllAgents(): Promise<Agent[]> {
  const response = await fetch(`${API_BASE_URL}/agents`, {
    next: { revalidate: REVALIDATE_30_DAYS },
  });

  return parseResponse<Agent[]>(response);
}

export async function getSingleAgent(id: string): Promise<Agent> {
  const response = await fetch(`${API_BASE_URL}/agents/${id}`, {
    next: {
      revalidate: REVALIDATE_30_DAYS,
      tags: [`agent-${id}`],
    },
  });

  return parseResponse<Agent>(response);
}
