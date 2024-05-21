import { Typography } from "@mui/material";
import Pagination from "../../organisms/Pagination/Pagination";
import PokemonList from "../../organisms/PokemonList/PokemonList";

export default function Pokedex() {
  return (
    <>
      <Typography component="h1" variant="h3" gutterBottom>
        Pokédex
      </Typography>
      <Pagination />
      <PokemonList />
    </>
  );
}
