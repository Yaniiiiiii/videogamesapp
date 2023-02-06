import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./gamesActionCreator";

const initialState = [];

export const gamesReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadAction, (state, action) => action.payload);

  builder.addCase(ac.addAction, (state, action) => [
    ...state.push(action.payload),
  ]); //push

  builder.addCase(ac.deleteAction, (state, action) => [
    ...state.filter((game) => game.id !== action.payload.id),
  ]); // filter

  builder.addCase(ac.updateAction, (state, action) => [
    ...state.map((game) => game.id === action.payload.id),
  ]); //map
});
