import { configureStore } from "@reduxjs/toolkit";
import ingredientsListSlice from "./IngredientsStore/ingredientsListSlice";
import cartSlice from "./CartStore/cartSlice";

const store = configureStore({
  reducer: {
    ingredients: ingredientsListSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
