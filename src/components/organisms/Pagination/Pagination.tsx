import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
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
import { pad } from "../../../utils/pad";

export default function Pagination() {
  const dispatch = useAppDispatch();
  const { offset, limit } = useAppSelector(selectPagination);
  const { data } = useGetPokemonListQuery({ offset, limit });

  // const x = data?.previous == null;
  // const y = data?.next == null;

  const a = (event: SelectChangeEvent<number>) => {
    dispatch(setLimit(event.target.value as number));
  };

  const b = () => {
    dispatch(previousPage());
  };

  const c = () => {
    dispatch(nextPage());
  };

  // return (
  //   <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
  //     <Box sx={{ display: "flex", alignItems: "center" }}>
  //       <Typography></Typography>
  //       <Select variant="standard" value={limit} onChange={handleChange}>
  //         <MenuItem value={20}>20</MenuItem>
  //         <MenuItem value={60}>60</MenuItem>
  //         <MenuItem value={100}>100</MenuItem>
  //       </Select>
  //     </Box>
  //     <Box sx={{ display: "flex", alignItems: "center" }}>
  //       <Typography>
  //
  //       </Typography>
  //       <Box>
  //         <IconButton onClick={handlePreviousClick} disabled={x}>
  //           <KeyboardArrowLeft />
  //         </IconButton>
  //         <IconButton onClick={handleNextClick} disabled={y}>
  //           <KeyboardArrowRight />
  //         </IconButton>
  //       </Box>
  //     </Box>
  //   </Toolbar>
  // );

  return (
    <Toolbar disableGutters>
      <Typography>Items per page</Typography>
      <Select size="small" value={limit}>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={60}>60</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
      <Typography>
        N.º {pad(offset + 1)} – {pad(offset + limit)}
      </Typography>
      <Button
        variant="outlined"
        color="inherit"
        startIcon={<KeyboardArrowLeft />}
      >
        Back
      </Button>
      <Button
        variant="outlined"
        color="inherit"
        endIcon={<KeyboardArrowRight />}
      >
        Next
      </Button>
    </Toolbar>
  );
}
