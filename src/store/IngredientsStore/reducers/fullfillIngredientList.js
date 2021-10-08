import { initialIngredientsState } from "../ingredientsListSlice";

export const fullfillIngredientList = (
  state = initialIngredientsState,
  action
) => {
  return {
    ingredientsList: action.payload,
    ingredientToShow: state.ingredientToShow,
    modalIsShown: false,
  };
};
