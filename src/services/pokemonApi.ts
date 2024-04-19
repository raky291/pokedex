import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { NamedAPIResourceList, Pokemon, PokemonClient } from "pokenode-ts";

const api = new PokemonClient();

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getPokemonList: builder.query<NamedAPIResourceList, void>({
      queryFn: async () => {
        try {
          const data = await api.listPokemons();
          return { data };
        } catch (error) {
          return { error };
        }
      },
    }),
    getPokemon: builder.query<Pokemon, string>({
      queryFn: async (name) => {
        try {
          const data = await api.getPokemonByName(name);
          return { data };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonQuery } = pokemonApi;
