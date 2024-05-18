interface PokemonTypeProps {
  name: string;
}

export default function PokemonType({ name }: PokemonTypeProps) {
  return <span>{name}</span>;
}
