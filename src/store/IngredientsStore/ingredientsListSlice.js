import { createSlice } from "@reduxjs/toolkit";
import { fullfillIngredientList } from "./reducers/fullfillIngredientList";

export const initialIngredientsState = {
  ingredientsList: [],
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: initialIngredientsState,
  reducers: {
    fullfillIngredientList,
  },
});

export default ingredientsSlice;

///

/* название,цена, картинка, описание, количество ккал 
 создать json file с данными

 */
