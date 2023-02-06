import { configureStore } from "@reduxjs/toolkit";
import { gamesReducer } from "../reducer/reducerGames";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
});

// export type rootStore= typeof store;
// export type rootState = ReturnType<typeof store.getState>
