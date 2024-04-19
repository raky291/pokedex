import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { PokemonClient } from "pokenode-ts";

type TArgs = (api: PokemonClient) => Promise<unknown>;

export function pokemonBaseQuery(): BaseQueryFn<TArgs> {
  return async function (callback) {
    const api = new PokemonClient();
    try {
      const data = await callback(api);
      return { data };
    } catch (error) {
      return { error };
    }
  };
}
