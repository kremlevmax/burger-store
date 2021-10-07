import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./reducers/addItemToCart";
import { deleteItemFromCart } from "./reducers/deleteItemFromCart";

const data = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export const initialCartState = {
  items: data.items || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart,
    deleteItemFromCart,
  },
});

export default cartSlice;
