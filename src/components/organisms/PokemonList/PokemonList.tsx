import { useGetPokemonListQuery } from "../../../services/pokemonApi";
import Loading from "../../atoms/Loading/Loading";
import { PokemonCard } from "../../molecules/PokemonCard/PokemonCard";

export function PokemonList() {
  const { isLoading, data } = useGetPokemonListQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="row row-cols-4">
      {data.results.map((resource, index) => (
        <div key={index} className="col mb-3">
          <PokemonCard name={resource.name} />
        </div>
      ))}
    </div>
  );
}
