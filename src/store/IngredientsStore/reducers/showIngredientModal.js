export const showIngredientModal = (state, action) => {
  return {
    ingredientsList: state.ingredientsList,
    ingredientToShow: action.payload,
    modalIsShown: true,
  };
};
