export const cartDataSelector = (state) => {
  return state.cart;
};

export const totalCaloriesSelector = (state) => {
  let totalCalories = 0;
  if (state.ingredients.ingredientsList.length > 0) {
    state.cart.items.forEach((item) => {
      const ingredient = state.ingredients.ingredientsList.find(
        (ingredient) => ingredient.id === item.id
      );
      totalCalories = totalCalories + ingredient["calories"] * item.count;
    });
  }
  return totalCalories;
};

export const totalPriceSelector = (state) => {
  let totalPrice = 0;

  if (state.ingredients.ingredientsList.length > 0) {
    state.cart.items.forEach((item) => {
      const ingredient = state.ingredients.ingredientsList.find(
        (ingredient) => ingredient.id === item.id
      );
      totalPrice = totalPrice + ingredient["price"] * item.count;
    });
  }
  return totalPrice;
};
