import { initialIngredientsState } from "../ingredientsListSlice";

export const fullfillIngredientList = (
  state = initialIngredientsState,
  action
) => {
  return {
    ...state,
    ingredientsList: action.payload,
  };
};
