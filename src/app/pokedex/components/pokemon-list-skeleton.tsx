import { Unstable_Grid2 as Grid } from "@mui/material";
import PokemonCardSkeleton from "./pokemon-card-skeleton";

export default function PokemonListSkeleton() {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: 20 }).map((_, index) => (
        <Grid key={index} xs={12} sm={6} md={4} lg={3}>
          <PokemonCardSkeleton />
        </Grid>
      ))}
    </Grid>
  );
}
