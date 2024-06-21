import Pagination from "@/components/organisms/Pagination";
import PokemonList from "@/components/organisms/PokemonList";
import { Box, Typography } from "@mui/material";

export default function Pokedex() {
  return (
    <>
      <Typography component="h1" variant="h3" gutterBottom>
        Pokédex
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Pagination />
      </Box>
      <Box sx={{ mb: 2 }}>
        <PokemonList />
      </Box>
    </>
  );
}
