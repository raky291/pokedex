"use client";
import { Unstable_Grid2 as Grid } from "@mui/material";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokemonList } from "../services/pokemon-api";
import PokemonCard from "./pokemon-card";

export default function PokemonList() {
  const { data } = useSuspenseQuery({
    queryKey: ["pokemonList"],
    queryFn: () => getPokemonList(),
  });

  return (
    <Grid container spacing={2}>
      {data.map((pokemon, index) => (
        <Grid key={index} xs={12} sm={6} md={4} lg={3}>
          <PokemonCard data={pokemon} sizes={{ xs: 12, sm: 6, md: 4, lg: 3 }} />
        </Grid>
      ))}
    </Grid>
  );
}
