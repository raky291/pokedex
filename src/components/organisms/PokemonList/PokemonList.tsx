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
    <div className="row">
      {data.results.map((resource, index) => (
        <div className="col-6 mb-3" key={index}>
          <PokemonCard name={resource.name} />
        </div>
      ))}
    </div>
  );
}
