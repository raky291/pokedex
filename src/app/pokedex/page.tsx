import { Suspense } from "react";
import { withQuery } from "../lib/with-query";
import Pagination from "./components/pagination";
import PokemonList from "./components/pokemon-list";
import PokemonListSkeleton from "./components/pokemon-list-skeleton";
import { SearchParams } from "./lib/types";

export default async function Pokedex({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <>
      <Pagination searchParams={searchParams} />
      <Suspense
        key={withQuery(searchParams)}
        fallback={<PokemonListSkeleton />}
      >
        <PokemonList searchParams={searchParams} />
      </Suspense>
    </>
  );
}
