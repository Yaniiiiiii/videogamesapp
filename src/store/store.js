import { configureStore } from "@reduxjs/toolkit";
import { gamesReducer } from "../reducer/reducerGames";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
});

// export const rootStore = typeof store;
// export const rootState = store.getState;
