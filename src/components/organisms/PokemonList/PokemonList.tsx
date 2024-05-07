import { useGetPokemonListQuery } from "../../../services/pokemonApi";
import Loading from "../../atoms/Loading/Loading";
import PokemonCard from "../../molecules/PokemonCard/PokemonCard";

export default function PokemonList() {
  const { isLoading, data } = useGetPokemonListQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="grid gap-3">
      {data.results.map((resource, index) => (
        <div key={index} className="g-col-12 g-col-sm-6 g-col-md-4 g-col-lg-3">
          <PokemonCard name={resource.name} />
        </div>
      ))}
    </div>
  );
}
