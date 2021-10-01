import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./actions/addItemToCart";
import { deleteItemFromCart } from "./actions/deleteItemFromCart";

const data = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialCartState = {
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
