import { getPokemonList } from "@/app/pokedex/services/pokemon-api";
import { Unstable_Grid2 as Grid } from "@mui/material";
import PokemonCard from "./pokemon-card";

export default async function PokemonList({
  limit,
  offset,
}: {
  limit?: string;
  offset?: string;
}) {
  const data = await getPokemonList(limit, offset);
  return (
    <Grid container spacing={2}>
      {data.results.map((resource, index) => (
        <Grid key={index} xs={12} sm={6} md={4} lg={3}>
          <PokemonCard
            name={resource.name}
            sizes={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
