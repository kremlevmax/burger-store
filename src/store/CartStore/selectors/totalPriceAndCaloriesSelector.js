export const totalPriceAndCaloriesSelector = (state) => {
  let totalCalories = 0;
  let totalPrice = 0;
  if (state.ingredients.ingredientsList.length > 0) {
    state.cart.items.forEach((item) => {
      const ingredient = state.ingredients.ingredientsList.find(
        (ingredient) => ingredient.id === item.id
      );
      totalCalories = ingredient
        ? totalCalories + ingredient["calories"] * item.count
        : 0;
      totalPrice = ingredient
        ? totalPrice + ingredient["price"] * item.count
        : 0;
    });
  }
  return { totalPrice, totalCalories };
};
