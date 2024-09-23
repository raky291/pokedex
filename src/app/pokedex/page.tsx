import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "../lib/get-query-client";
import PokemonListQuery from "./components/pokemon-list-query";
import { SearchParams } from "./lib/types";
import { getPokemonList } from "./services/pokemon-api";

export default async function Pokedex({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { limit, offset } = searchParams;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["pokemonList", limit, offset],
    queryFn: () => getPokemonList(limit, offset),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PokemonListQuery />
    </HydrationBoundary>
  );
}
