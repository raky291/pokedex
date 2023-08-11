import { useGetPokemonListQuery } from "../../../api/poke-api";
import { Alert } from "../../atoms/Alert";
import { Spinner } from "../../atoms/Spinner";
import { PokeCard } from "../../molecules/PokemonCard";
import "./styles.scss";

export function PokeList() {
  const { isError, isLoading, isSuccess, data } = useGetPokemonListQuery();

  return (
    <div className={"poke-list"}>
      {isError ? (
        <Alert message={"Error"} />
      ) : isLoading ? (
        <Spinner />
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
