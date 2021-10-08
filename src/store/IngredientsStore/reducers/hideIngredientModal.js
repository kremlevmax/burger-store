export const hideIngredientModal = (state, action) => {
  return {
    ingredientsList: state.ingredientsList,
    ingredientToShow: state.ingredientToShow,
    modalIsShown: false,
  };
};
