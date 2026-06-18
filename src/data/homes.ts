import { fetcher } from "@/lib/fetcher";
import type { Property } from "@/lib/types";
import { cacheLife } from "next/cache";

export async function getFeaturedHomes(): Promise<Property[]> {
  "use cache";
  cacheLife("max")
  
  return fetcher<Property[]>(`/homes?_limit=4`);
}

export async function getAllHomes(): Promise<Property[]> {
  "use cache";
  cacheLife("max")
  
  return fetcher<Property[]>(`/homes`);
}

export async function getSingleHome(id: string): Promise<Property> {
  return fetcher<Property>(`/homes/${id}`);
}

