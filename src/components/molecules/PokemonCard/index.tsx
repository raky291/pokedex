import { useGetPokemonQuery } from "../../../api/poke-api";
import { INamedAPIResource } from "../../../api/types";
import { Alert } from "../../atoms/Alert";
import { Spinner } from "../../atoms/Spinner";
import "./styles.scss";

interface IPokeCardProps {
  resource: INamedAPIResource;
}

export function PokeCard(props: IPokeCardProps) {
  const { name } = props.resource;
  const { isError, isLoading, isSuccess, data } = useGetPokemonQuery(name);

  return (
    <div className={"poke-card"}>
      {isError ? (
        <Alert message={"Error"} />
      ) : isLoading ? (
        <Spinner />
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
