import { withQuery } from "@/app/lib/with-query";
import { NamedAPIResourceList, Pokemon } from "./types";

const baseUrl = "https://pokeapi.co/api/v2/";

async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  return await response.json();
}

export async function getPokemonList(limit?: string, offset?: string) {
  const url = withQuery(`${baseUrl}pokemon`, { limit, offset });
  return await fetcher<NamedAPIResourceList>(url);
}

export async function getPokemonByName(name: string) {
  return await fetcher<Pokemon>(`${baseUrl}pokemon/${name}`);
}
