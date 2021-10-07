export const ingredientForModalSelector = (state) => {
  return {
    modalIsShown: state.ingredients.modalIsShown,
    ingredientToShow: state.ingredients.ingredientToShow,
  };
};
