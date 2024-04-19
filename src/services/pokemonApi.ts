import { createApi } from "@reduxjs/toolkit/query/react";
import { NamedAPIResourceList, Pokemon } from "pokenode-ts";
import { pokemonBaseQuery } from "./pokemonBaseQuery";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: pokemonBaseQuery(),
  endpoints: (builder) => ({
    getPokemonList: builder.query<NamedAPIResourceList, void>({
      query: () => async (api) => await api.listPokemons(),
    }),
    getPokemon: builder.query<Pokemon, string>({
      query: (name) => async (api) => await api.getPokemonByName(name),
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonQuery } = pokemonApi;
