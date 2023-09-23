import { useGetPokemonListQuery } from "../../../api/poke-api";
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
    <>
      {data.results.map((resource, index) => (
        <PokemonCard key={index} name={resource.name} />
      ))}
    </>
  );
}
