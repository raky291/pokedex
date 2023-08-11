import { PokeList } from "../../organisms/PokemonList";
import "./styles.scss";

export function Pokedex() {
  return (
    <div className={"pokedex"}>
      <div className={"title"}>Pokedex</div>
      <PokeList />
    </div>
  );
}
