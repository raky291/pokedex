import Image, { ImageSizes } from "@/app/components/ui/image";
import { getPokemonByName } from "@/app/pokedex/services/pokemon-api";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
import PokemonType from "./pokemon-type";

export default async function PokemonCard({
  name,
  sizes,
}: {
  name: string;
  sizes?: ImageSizes;
}) {
  const t = await getTranslations("pokedex.pokemonCard");
  const data = await getPokemonByName(name);
  return (
    <Card>
      <Image
        src={data.sprites.other["official-artwork"].front_default!}
        alt={data.name}
        width={475}
        height={475}
        sizes={sizes}
        responsive
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {t("number", { id: data.id })}
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
