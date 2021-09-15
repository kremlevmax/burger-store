export const deleteItemFromCart = (state, action) => {
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
};
