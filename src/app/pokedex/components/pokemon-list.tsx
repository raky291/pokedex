import { Unstable_Grid2 as Grid } from "@mui/material";
import { Suspense } from "react";
import { NamedAPIResourceList } from "../services/types";
import PokemonCard from "./pokemon-card";
import PokemonCardSkeleton from "./pokemon-card-skeleton";

export default function PokemonList({ data }: { data: NamedAPIResourceList }) {
  return (
    <Grid container spacing={2}>
      {data.results.map((resource, index) => (
        <Grid key={index} xs={12} sm={6} md={4} lg={3}>
          <Suspense key={resource.name} fallback={<PokemonCardSkeleton />}>
            <PokemonCard
              name={resource.name}
              sizes={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            />
          </Suspense>
        </Grid>
      ))}
    </Grid>
  );
}
