import { NamedAPIResourceList, Pokemon } from "./types";

const baseUrl = "https://pokeapi.co/api/v2/";

async function fetcher<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getPokemonList() {
  return await fetcher<NamedAPIResourceList>(`${baseUrl}pokemon`);
}

export async function getPokemonByName(name: string) {
  return await fetcher<Pokemon>(`${baseUrl}pokemon/${name}`);
}
