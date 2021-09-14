import { createSlice } from "@reduxjs/toolkit";

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
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalPrice += newItem.price;
      state.totalCalories += newItem.calories;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          calories: newItem.calories,
          description: newItem.description,
          image: newItem.image,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    deleteFromCart(state, action) {
      const itemToDelete = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.totalCalories -= itemToDelete.calories;
      state.totalPrice -= itemToDelete.price;

      if (itemToDelete.quantity === 1) {
        state.items.filter((item) => item.id === itemToDelete.id);
      } else {
        itemToDelete.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
