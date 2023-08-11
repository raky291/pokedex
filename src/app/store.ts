import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { pokeApi } from "../api/poke-api";
import counterReducer from "../counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokeApi.reducerPath]: pokeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokeApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
