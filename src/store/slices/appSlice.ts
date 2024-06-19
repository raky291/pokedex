import { PaletteMode } from "@mui/material";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../../utils/localStorage";

interface AppState {
  mode: PaletteMode;
}

const initialState: AppState = {
  mode: getItem("mode") ?? "dark",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: (create) => ({
    setMode: create.reducer((state, action: PayloadAction<PaletteMode>) => {
      setItem("mode", action.payload);
      state.mode = action.payload;
    }),
  }),
  selectors: {
    selectMode: (app) => app.mode,
  },
});

export const { setMode } = appSlice.actions;

export const { selectMode } = appSlice.selectors;
