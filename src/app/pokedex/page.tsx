import { Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
import Pagination from "./components/pagination";
import PokemonList from "./components/pokemon-list";
import { getPokemonList } from "./services/pokemon-api";

type SearchParams = { limit?: string; offset?: string };

export default async function Pokedex({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { limit, offset } = searchParams;
  const data = await getPokemonList(limit, offset);
  const t = await getTranslations("pokedex.page");
  return (
    <>
      <Typography component="h1" variant="h3" gutterBottom>
        {t("heading")}
      </Typography>
      <Pagination data={data} />
      <PokemonList data={data} />
    </>
  );
}
