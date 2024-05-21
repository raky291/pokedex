import { Unstable_Grid2 as Grid } from "@mui/material";
import { useGetPokemonListQuery } from "../../../services/pokemonApiSlice";
import { useAppSelector } from "../../../store/hooks";
import { selectPagination } from "../../../store/slices/paginationSlice";
import Loading from "../../atoms/Loading/Loading";
import PokemonCard from "../../molecules/PokemonCard/PokemonCard";

export default function PokemonList() {
  const { offset, limit } = useAppSelector(selectPagination);
  const { isFetching, data } = useGetPokemonListQuery({ offset, limit });

  if (isFetching) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      {data.results.map((resource, index) => (
        <Grid key={index} xs={12} sm={6} md={4} lg={3}>
          <PokemonCard name={resource.name} />
        </Grid>
      ))}
    </Grid>
  );
}
