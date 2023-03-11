import { PokeList } from "../poke-list/poke-list";
import "./pokedex.scss";

export function Pokedex() {
  return (
    <div className={"pokedex"}>
      <div className={"title"}>Pokedex</div>
      <PokeList />
    </div>
  );
}
