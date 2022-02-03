import { initialCartState } from "../cartSlice";

export const getCartItemsData = (state = initialCartState, action) => {
  const ingredients = [];

  if (state.ingredients.ingredientsList.length === 0) {
    return null;
  }
  state.cart.items.map((item) => {
    const ingredientData = state.ingredients.ingredientsList.find(
      (ingredient) => ingredient.id === item.id
    );
    return ingredients.push({ ...ingredientData, count: item.count });
  });

  return ingredients;
};
