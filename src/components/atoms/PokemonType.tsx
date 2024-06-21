import { typeColor } from "@/utils/typeColor";
import { styled } from "@mui/material/styles";

interface PokemonTypeProps {
  name: string;
}

interface WrapperProps {
  backgroundColor?: string;
}

const Wrapper = styled("span")<WrapperProps>(({ theme, ...props }) => ({
  backgroundColor: props.backgroundColor,
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
  display: "inline-flex",
  justifyContent: "center",
  padding: theme.spacing(0.5),
  textTransform: "capitalize",
  width: 90,
}));

export default function PokemonType({ name }: PokemonTypeProps) {
  return <Wrapper backgroundColor={typeColor(name)}>{name}</Wrapper>;
}
