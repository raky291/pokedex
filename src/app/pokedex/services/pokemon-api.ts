import { withQuery } from "@/app/lib/with-query";
import { NamedAPIResourceList, Pokemon } from "./types";

const baseUrl = "https://pokeapi.co/api/v2/";

async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  return await response.json();
}

async function getResourceList(limit?: string, offset?: string) {
  const url = withQuery({ limit, offset }, `${baseUrl}pokemon`);
  return await fetcher<NamedAPIResourceList>(url);
}

async function getPokemonByName(name: string) {
  return await fetcher<Pokemon>(`${baseUrl}pokemon/${name}`);
}

export async function getPokemonList(limit?: string, offset?: string) {
  const resourceList = await getResourceList(limit, offset);
  const pokemonNames = resourceList.results.map((resource) => resource.name);
  const pokemonPromises = pokemonNames.map((name) => getPokemonByName(name));
  return await Promise.all(pokemonPromises);
}
