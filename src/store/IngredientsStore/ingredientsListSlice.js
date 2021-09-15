import { createSlice } from "@reduxjs/toolkit";
import { fullfillIngredientList } from "./actions/fullfillIngredientList";

const initialIngredientsState = { ingredientsList: [] };

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: initialIngredientsState,
  reducers: { fullfillIngredientList },
});

export default ingredientsSlice;

///

/* название,цена, картинка, описание, количество ккал 
 создать json file с данными

 */
