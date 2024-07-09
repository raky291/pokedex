"use client";
import { typeColor } from "@/app/pokedex/lib/type-color";
import { styled } from "@mui/material/styles";

const Wrapper = styled("span")<{
  backgroundColor: string;
}>(({ theme, ...props }) => ({
  backgroundColor: props.backgroundColor,
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
  display: "inline-flex",
  justifyContent: "center",
  padding: theme.spacing(0.5),
  textTransform: "capitalize",
  width: 90,
}));

export default function PokemonType({
  name,
}: Readonly<{
  name: string;
}>) {
  return <Wrapper backgroundColor={typeColor(name)}>{name}</Wrapper>;
}
