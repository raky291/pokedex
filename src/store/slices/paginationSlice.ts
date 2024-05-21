import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PaginationState {
  offset: number;
  limit: number;
}

const initialState: PaginationState = {
  offset: 0,
  limit: 20,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: (create) => ({
    previousPage: create.reducer((state) => {
      state.offset -= state.limit;
    }),
    nextPage: create.reducer((state) => {
      state.offset += state.limit;
    }),
    setLimit: create.reducer((state, action: PayloadAction<number>) => {
      state.limit = action.payload;
      state.offset = initialState.offset;
    }),
  }),
  selectors: {
    selectPagination: (pagination) => pagination,
  },
});

export const { previousPage, nextPage, setLimit } = paginationSlice.actions;

export const { selectPagination } = paginationSlice.selectors;
