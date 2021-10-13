export const showIngredientModal = (state, action) => {
  return {
    ...state,
    ingredientForModalId: action.payload.id,
  };
};
