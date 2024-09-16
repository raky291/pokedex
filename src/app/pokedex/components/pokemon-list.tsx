import { Unstable_Grid2 as Grid } from "@mui/material";
import { SearchParams } from "../lib/types";
import { getPokemonByName, getPokemonList } from "../services/pokemon-api";
import PokemonCard from "./pokemon-card";

export default async function PokemonList({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { limit, offset } = searchParams;
  const resourceList = await getPokemonList(limit, offset);
  const pokemonList = await Promise.all(
    resourceList.results.map((resource) => getPokemonByName(resource.name)),
  );
  return (
    <Grid container spacing={2}>
      {pokemonList.map((pokemon, index) => (
        <Grid key={index} xs={12} sm={6} md={4} lg={3}>
          <PokemonCard data={pokemon} sizes={{ xs: 12, sm: 6, md: 4, lg: 3 }} />
        </Grid>
      ))}
    </Grid>
  );
}
