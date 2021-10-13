export const hideIngredientModal = (state, action) => {
  return {
    ...state,
    ingredientForModalId: null,
  };
};
