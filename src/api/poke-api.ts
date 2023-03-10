import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INamedAPIResourceList } from "./types";

export const pokeApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (build) => ({
    getPokemonList: build.query<INamedAPIResourceList, void>({
      query: () => "pokemon",
    }),
  }),
});

export const { useGetPokemonListQuery } = pokeApi;
