import classNames from "classnames/bind";
import { useGetPokemonQuery } from "../../../services/pokemon-api";
import Card from "../../atoms/Card/Card";
import Loading from "../../atoms/Loading/Loading";
import PokemonType from "../../atoms/PokemonType/PokemonType";
import styles from "./PokemonCard.module.scss";

const cx = classNames.bind(styles);

interface PokemonCardProps {
  name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
  const { isLoading, data } = useGetPokemonQuery(name);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  return (
    <Card>
      <div className={cx("pokemon-card")}>
        <div className={cx("pokemon-card__header")}>
          <div className={cx("pokemon-card__id")}>No. {data.id}</div>
          <div className={cx("pokemon-card__name")}>{data.name}</div>
        </div>
        <div className={cx("pokemon-card__sprites")}>
          <img
            className={cx("pokemon-card__image")}
            src={data.sprites.front_default!}
            alt={data.name}
          />
        </div>
        <div className={cx("pokemon-card__types")}>
          <div className={cx("pokemon-card__title")}>Type</div>
          <div className={cx("pokemon-card__value")}>
            {data.types.map(({ type }, index) => (
              <PokemonType key={index} type={type.name} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
