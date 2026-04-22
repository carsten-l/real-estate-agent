import type { Property } from "@/lib/types";

const API_BASE_URL = "https://dinmaegler.onrender.com";
const REVALIDATE_30_DAYS = 60 * 60 * 24 * 30;

async function parseResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`Failed to load data: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export async function getFeaturedHomes(): Promise<Property[]> {
  const response = await fetch(`${API_BASE_URL}/homes?_limit=4`, {
    next: { revalidate: REVALIDATE_30_DAYS },
  });

  return parseResponse<Property[]>(response);
}

export async function getAllHomes(): Promise<Property[]> {
  const response = await fetch(`${API_BASE_URL}/homes`, {
    next: { revalidate: REVALIDATE_30_DAYS },
  });

  return parseResponse<Property[]>(response);
}

export async function getSingleHome(id: string): Promise<Property> {
  const response = await fetch(`${API_BASE_URL}/homes/${id}`, {
    next: {
      revalidate: REVALIDATE_30_DAYS,
      tags: [`home-${id}`],
    },
  });

  return parseResponse<Property>(response);
}
