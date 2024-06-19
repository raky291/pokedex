import { PaletteMode, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export function getTheme(mode: PaletteMode) {
  return mode === "dark" ? darkTheme : lightTheme;
}
