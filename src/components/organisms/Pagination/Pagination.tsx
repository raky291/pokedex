import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Button,
  Unstable_Grid2 as Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useGetPokemonListQuery } from "../../../services/pokemonApiSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  nextPage,
  previousPage,
  selectPagination,
  setLimit,
} from "../../../store/slices/paginationSlice";
import { isNil } from "../../../utils/isNil";
import { pad } from "../../../utils/pad";

export default function Pagination() {
  const dispatch = useAppDispatch();
  const { offset, limit } = useAppSelector(selectPagination);
  const { data } = useGetPokemonListQuery({ offset, limit });

  const isPreviousPageDisabled = isNil(data?.previous);
  const isNextPageDisabled = isNil(data?.next);

  const handleLimitChange = (event: SelectChangeEvent<number>) => {
    dispatch(setLimit(event.target.value as number));
  };

  const handlePreviousPageClick = () => {
    dispatch(previousPage());
  };

  const handleNextPageClick = () => {
    dispatch(nextPage());
  };

  return (
    <Grid container spacing={2}>
      <Grid xs="auto" display="flex" alignItems="center">
        <Typography>Items per page</Typography>
        <Select
          size="small"
          value={limit}
          onChange={handleLimitChange}
          sx={{ ml: 1 }}
        >
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </Grid>
      <Grid
        xs
        sm="auto"
        smOffset="auto"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Typography>
          N.º {pad(offset + 1)} – N.º {pad(offset + limit)}
        </Typography>
      </Grid>
      <Grid xs={12} sm="auto" display="flex" alignItems="center">
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<KeyboardArrowLeft />}
          onClick={handlePreviousPageClick}
          disabled={isPreviousPageDisabled}
          sx={{ flex: "auto" }}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          endIcon={<KeyboardArrowRight />}
          onClick={handleNextPageClick}
          disabled={isNextPageDisabled}
          sx={{ flex: "auto", ml: 1 }}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}
