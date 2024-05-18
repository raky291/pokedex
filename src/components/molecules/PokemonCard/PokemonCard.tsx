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
    <div className="card shadow-sm">
      <img
        className="card-img-top bg-dark-subtle"
        src={data.sprites.other?.["official-artwork"].front_default!}
        alt={data.name}
      />
      <div className="card-body">
        <div className="small text-secondary-emphasis">N.º {pad(data.id)}</div>
        <div className="fs-3 mb-2 text-capitalize">{data.name}</div>
        <div className="d-flex gap-2">
          {data.types.map(({ type }, index) => (
            <PokemonType key={index} name={type.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
