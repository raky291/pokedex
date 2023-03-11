import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INamedAPIResourceList, IPokemon } from "./types";

export const pokeApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (build) => ({
    getPokemonList: build.query<INamedAPIResourceList, void>({
      query: () => "pokemon",
    }),
    getPokemon: build.query<IPokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonQuery } = pokeApi;
