import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./actions/addItemToCart";
import { deleteItemFromCart } from "./actions/deleteItemFromCart";

const data = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialCartState = {
  items: data.items || [],
  totalPrice: data.totalPrice || 0,
  totalCalories: data.totalCalories || 0,
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
