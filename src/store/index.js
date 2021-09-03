import { configureStore } from "@reduxjs/toolkit";
import ingredientsSlice from "./ingredients/ingredients";

const store = configureStore({
  reducer: { ingredients: ingredientsSlice.reducer },
});

export default store;
