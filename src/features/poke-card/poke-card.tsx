import { useGetPokemonQuery } from "../../api/poke-api";
import { INamedAPIResource } from "../../api/types";
import { ErrorMessage, LoadingSpinner } from "../../components";
import "./poke-card.scss";

interface IPokeCardProps {
  resource: INamedAPIResource;
}

export function PokeCard(props: IPokeCardProps) {
  const { name } = props.resource;
  const { isError, isLoading, isSuccess, data } = useGetPokemonQuery(name);

  return (
    <div className={"poke-card"}>
      {isError ? (
        <ErrorMessage message={"Error"} />
      ) : isLoading ? (
        <LoadingSpinner />
      ) : isSuccess ? (
        <>
          <div className={"header"}>
            <div className={"name"}>{data.name}</div>
            <div className={"number"}>#{data.id}</div>
          </div>
          <div className={"body"}>
            <div className={"types"}>
              {data.types.map(({ type }, index) => (
                <span key={index} className={"type"}>
                  {type.name}
                </span>
              ))}
            </div>
            <div className={"image"}>
              <img src={data.sprites.front_default!} alt={data.name} />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
