import { Property } from "@/lib/types";

export async function getFeaturedHomes(): Promise<Property[]> {
  const response = await fetch(
    `https://dinmaegler.onrender.com/homes?_limit=4`,
  );
  if (!response.ok)
    throw new Error(`Failed to load data: ${response.statusText}`);
  return response.json();
}

export async function getAllHomes(): Promise<Property[]> {
  const response = await fetch(`https://dinmaegler.onrender.com/homes`, {
    next: { revalidate: 60 * 60 * 24 * 30 },
  });
  if (!response.ok)
    throw new Error(`Failed to load data: ${response.statusText}`);
  return response.json();
}

export async function getSingleHome(id: string): Promise<Property> {
  const response = await fetch(`https://dinmaegler.onrender.com/homes/${id}`, {
    next: {
      revalidate: 60 * 60 * 24 * 30,
      tags: [`homes-${id}`],
    },
  });
  if (!response.ok)
    throw new Error(`Failed to load data: ${response.statusText}`);
  return response.json();
}
