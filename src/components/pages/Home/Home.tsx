import { PokemonList } from "../../organisms/PokemonList/PokemonList";

export default function Home() {
  return (
    <>
      <h1 className="text-center">Pokédex</h1>
      {/* <div className="mx-auto" style={{ maxWidth: "700px" }}>
        <PokemonCard name={"charizard"} />
      </div> */}
      <PokemonList />
    </>
  );
}
