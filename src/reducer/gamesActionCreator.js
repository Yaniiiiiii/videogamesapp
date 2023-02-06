import { createAction } from "@reduxjs/toolkit";
import { gamesActionTypes } from "./gamesActionTypes";

export const loadAction = createAction(gamesActionTypes.load);
export const addAction = createAction(gamesActionTypes.add);
export const deleteAction = createAction(gamesActionTypes.delete);
export const updateAction = createAction(gamesActionTypes.update);
