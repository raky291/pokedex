import { ApiResponse } from "./types";

const baseUrl = "https://beta.pokeapi.co/graphql/v1beta";

async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  return await response.json();
}

function createQuery(limit: string, offset: string): string {
  return `
    query getPokemonList {
      pokemon_v2_pokemon(limit: ${limit}, offset: ${offset}) {
        id
        name
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            id
            name
          }
        }
        pokemon_v2_pokemonsprites {
          sprites(path: "other.official-artwork")
        }
      }
    }
  `;
}

export async function getPokemonList(
  limit: string = "20",
  offset: string = "0",
) {
  const query = createQuery(limit, offset);

  const { data } = await fetcher<ApiResponse>(baseUrl, {
    method: "POST",
    body: JSON.stringify({ query }),
  });

  return data.pokemon_v2_pokemon;
}
