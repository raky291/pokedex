import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import PokemonList from "./components/pokemon-list";

export default function Pokedex() {
  const t = useTranslations("pokedex.page");
  return (
    <>
      <Typography component="h1" variant="h3" gutterBottom>
        {t("heading")}
      </Typography>
      <PokemonList />
    </>
  );
}
