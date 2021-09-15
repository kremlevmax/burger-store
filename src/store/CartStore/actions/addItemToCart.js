export const addItemToCart = (state, action) => {
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
};
