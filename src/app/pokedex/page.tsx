import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "../lib/get-query-client";
import PokemonList from "./components/pokemon-list";
import { getPokemonList } from "./services/pokemon-api";

export default async function Pokedex() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["pokemonList"],
    queryFn: () => getPokemonList(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PokemonList />
    </HydrationBoundary>
  );
}
