import { notFound, redirect } from 'next/navigation'
import {z} from 'zod'
import { NetworkError, ApiError, ValidationError } from './errors'
const baseUrl: string ="https://dinmaegler.onrender.com"

export async function fetcher<T>(url: string, schema?: z.ZodType<T> ): Promise<T> {
    let res;
    try {
        res = await fetch(url.startsWith("http") ? url : baseUrl + url)
    } catch (error: Error | unknown) {
        throw new NetworkError(error instanceof Error ? error.message : "An unknown error occurred")
    }
    // FEJLHÅNDTER

    if (res.status === 404) { notFound() }
    if (res.status === 401) redirect("/admin") // alternativt unauthorized() - husk at "slå til"
    
    if (!res.ok) throw new ApiError(res.status)
   const json = await res.json()

   // validere data
   if (schema) {
    console.log("Schema detected")
    const parsed = schema.safeParse(json)
    if (!parsed.success) {
        throw new ValidationError()
    }
    return parsed.data
   }
   console.log("No schema detected")
   return json;
   
}