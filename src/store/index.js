import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "./ingredients/ingredients";

const store = configureStore({ ingredients: ingredientsSlice.reducer });

export const ingredientsActions = ingredientsSlice.actions;

export default store;
