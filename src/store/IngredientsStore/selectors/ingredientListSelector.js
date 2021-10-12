export const selectIngredientList = (state) => {
  if (state.ingredients.ingredientsList.length === 0) {
    return null;
  } else {
    return state.ingredients.ingredientsList;
  }
};
