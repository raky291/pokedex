import Image, { ImageSizes } from "@/app/components/ui/image";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { PokemonV2Pokemon } from "../services/types";
import PokemonType from "./pokemon-type";

export default function PokemonCard({
  data,
  sizes,
}: {
  data: PokemonV2Pokemon;
  sizes?: ImageSizes;
}) {
  const t = useTranslations("pokedex.pokemonCard");
  return (
    <Card>
      <Box sx={{ position: "relative", aspectRatio: "1 / 1" }}>
        <Image
          src={data.pokemon_v2_pokemonsprites[0].sprites.front_default}
          alt={data.name}
          fill
          sizes={sizes}
          quality={50}
        />
      </Box>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="body2" color="text.secondary">
            {t("number", { id: data.id })}
          </Typography>
          <Typography component="p" variant="h5" textTransform="capitalize">
            {data.name}
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {data.pokemon_v2_pokemontypes.map((type, index) => (
              <PokemonType key={index} name={type.pokemon_v2_type.name} />
            ))}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
