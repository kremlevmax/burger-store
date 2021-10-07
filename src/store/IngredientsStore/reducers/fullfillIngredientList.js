import { initialIngredientsState } from "../ingredientsListSlice";

export const fullfillIngredientList = (
  state = initialIngredientsState,
  action
) => {
  return {
    ingredientsList: action.payload,
    ingredientToShow: null,
    modalIsShown: false,
  };
};
