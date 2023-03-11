import { useGetPokemonListQuery } from "../../api/poke-api";
import { ErrorMessage, LoadingSpinner } from "../../components";
import { PokeCard } from "../poke-card/poke-card";
import "./poke-list.scss";

export function PokeList() {
  const { isError, isLoading, isSuccess, data } = useGetPokemonListQuery();

  return (
    <div className={"poke-list"}>
      {isError ? (
        <ErrorMessage message={"Error"} />
      ) : isLoading ? (
        <LoadingSpinner />
      ) : isSuccess ? (
        data.results.map((resource, index) => (
          <div key={index} className={"poke-item"}>
            <PokeCard resource={resource} />
          </div>
        ))
      ) : null}
    </div>
  );
}
