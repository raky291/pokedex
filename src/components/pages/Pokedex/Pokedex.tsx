import { Typography } from "@mui/material";
import PokemonList from "../../organisms/PokemonList/PokemonList";

export default function Pokedex() {
  return (
    <>
      <Typography component="h1" variant="h3" gutterBottom>
        Pokédex
      </Typography>
      <PokemonList />
    </>
  );
}
