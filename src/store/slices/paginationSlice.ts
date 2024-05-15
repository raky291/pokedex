//offset?: number | undefined, limit?: number | undefined
//src\store\slices\paginationSlice.ts

import { createSlice } from "@reduxjs/toolkit";

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
  }),
  selectors: {
    selectPagination: (pagination) => pagination,
  },
});

export const { previousPage, nextPage } = paginationSlice.actions;

export const { selectPagination } = paginationSlice.selectors;
