export const hideIngredientModal = (state, action) => {
  return {
    ingredientsList: state.ingredientsList,
    ingredientToShow: null,
    modalIsShown: false,
  };
};
