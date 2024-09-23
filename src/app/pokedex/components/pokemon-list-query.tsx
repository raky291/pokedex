"use client";
import { getQueryParams } from "@/app/lib/get-query-params";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { SearchParams } from "../lib/types";
import { getPokemonList } from "../services/pokemon-api";
import PokemonList from "./pokemon-list";

export default function PokemonListQuery() {
  const searchParams = useSearchParams();
  const { limit, offset } = getQueryParams<SearchParams>(searchParams);

  const { data } = useSuspenseQuery({
    queryKey: ["pokemonList", limit, offset],
    queryFn: () => getPokemonList(limit, offset),
  });

  return <PokemonList data={data} />;
}
