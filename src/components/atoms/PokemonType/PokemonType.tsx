import styles from "./PokemonType.module.scss";

interface PokemonTypeProps {
  type: string;
}

export default function PokemonType({ type }: PokemonTypeProps) {
  return (
    <span className={`badge ${styles[`pokemon-type-${type}`]}`}>{type}</span>
  );
}
