import produce from "immer";

export const fullfillIngredientList = (state, action) => {
  const ingredientList = produce(state, (draft) => {
    draft.ingredientsList = action.payload;
  });

  return ingredientList;
  //state.ingredientsList = action.payload;
};
