import { createApi } from "@reduxjs/toolkit/query/react";
import { NamedAPIResourceList, Pokemon } from "pokenode-ts";
import { pokemonBaseQuery } from "./pokemonBaseQuery";

export const pokemonApiSlice = createApi({
  reducerPath: "pokemonApi",
  baseQuery: pokemonBaseQuery(),
  endpoints: (build) => ({
    getPokemonList: build.query<
      NamedAPIResourceList,
      { offset?: number; limit?: number }
    >({
      query:
        ({ offset, limit }) =>
        async (api) =>
          await api.listPokemons(offset, limit),
    }),
    getPokemon: build.query<Pokemon, string>({
      query: (name) => async (api) => await api.getPokemonByName(name),
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonQuery } = pokemonApiSlice;
