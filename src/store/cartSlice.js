import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalPrice: 0, totalCalories: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

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
    },
  },
});
