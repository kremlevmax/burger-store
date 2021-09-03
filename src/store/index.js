import { configureStore } from "@reduxjs/toolkit";
import ingredientsListSlice from "./ingredientsListSlice";

const store = configureStore({
  reducer: { ingredients: ingredientsListSlice.reducer },
});

export default store;
