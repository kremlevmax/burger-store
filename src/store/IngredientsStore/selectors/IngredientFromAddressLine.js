export const IngredientFromAddressLine = (id) => (state) => {
  return {
    ingredientToShow: state.ingredients.ingredientsList.find(
      (item) => item.id === id
    ),
  };
};
