export const ingredientForModalSelector = (state) => {
  return {
    ingredientToShow: state.ingredients.ingredientsList.find(
      (item) => item.id === state.ingredients.ingredientForModalId
    ),
  };
};
