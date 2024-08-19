import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import PokemonList from "./components/pokemon-list";

type SearchParams = { limit?: string; offset?: string };

export default function Pokedex({
  searchParams,
}: Readonly<{
  searchParams: SearchParams;
}>) {
  const { limit, offset } = searchParams;
  const t = useTranslations("pokedex.page");
  return (
    <>
      <Typography component="h1" variant="h3" gutterBottom>
        {t("heading")}
      </Typography>
      <PokemonList limit={limit} offset={offset} />
    </>
  );
}
