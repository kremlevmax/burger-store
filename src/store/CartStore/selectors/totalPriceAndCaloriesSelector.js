export const totalPriceAndCaloriesSelector = (state) => {
  let totalCalories = 0;
  let totalPrice = 0;
  if (state.ingredients.ingredientsList.length > 0) {
    state.cart.items.forEach((item) => {
      const ingredient = state.ingredients.ingredientsList.find(
        (ingredient) => ingredient.id === item.id
      );
      totalCalories = totalCalories + ingredient["calories"] * item.count;
      totalPrice = totalPrice + ingredient["price"] * item.count;
    });
  }
  return { totalPrice, totalCalories };
};
