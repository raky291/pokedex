import { Stack, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
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
  const t = await getTranslations("pokedex.page");
  return (
    <Stack spacing={2} useFlexGap>
      <Typography component="h1" variant="h3">
        {t("heading")}
      </Typography>
      <Pagination searchParams={searchParams} />
      <Suspense
        key={withQuery(searchParams)}
        fallback={<PokemonListSkeleton />}
      >
        <PokemonList searchParams={searchParams} />
      </Suspense>
    </Stack>
  );
}
