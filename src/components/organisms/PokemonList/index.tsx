export function PokeList() {
  // const { isError, isLoading, isSuccess, data } = useGetPokemonListQuery();

  return (
    <div className={"poke-list"}>
      {/* {isError ? (
        <Alert message={"Error"} />
      ) : isLoading ? (
        <Loading />
      ) : isSuccess ? (
        data.results.map((resource, index) => (
          <div key={index} className={"poke-item"}>
            <PokemonCard name={resource.name} />
          </div>
        ))
      ) : null} */}
    </div>
  );
}
