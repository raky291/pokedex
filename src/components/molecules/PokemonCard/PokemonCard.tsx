import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useGetPokemonQuery } from "../../../services/pokemonApiSlice";
import { pad } from "../../../utils/pad";
import PokemonType from "../../atoms/PokemonType/PokemonType";

interface PokemonCardProps {
  name: string;
}

export default function PokemonCard({ name }: PokemonCardProps) {
  const { data } = useGetPokemonQuery(name);

  if (!data) {
    return null;
  }

  return (
    <Card>
      <CardMedia
        component="img"
        image={data.sprites.other?.["official-artwork"].front_default!}
        title={data.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          N.º {pad(data.id)}
        </Typography>
        <Typography
          component="p"
          variant="h5"
          textTransform="capitalize"
          gutterBottom
        >
          {data.name}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
          {data.types.map(({ type }, index) => (
            <PokemonType key={index} name={type.name} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
