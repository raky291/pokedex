import { useGetPokemonListQuery } from "../../api/poke-api";
import { Error, Loading } from "../../components";
import { PokeCard } from "../poke-card/poke-card";

export function PokeList() {
  const { isError, isLoading, isSuccess, data } = useGetPokemonListQuery();

  return (
    <div className={"poke-list"}>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loading />
      ) : isSuccess ? (
        data.results.map((resource, index) => (
          <PokeCard key={index} resource={resource} />
        ))
      ) : null}
    </div>
  );
}
