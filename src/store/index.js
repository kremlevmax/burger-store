import { configureStore } from "@reduxjs/toolkit";
import ingredientsListSlice from "./ingredientsListSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    ingredients: ingredientsListSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
