import { createSlice } from "@reduxjs/toolkit";

const initialIngredientsState = { ingredientsList: [] };

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: initialIngredientsState,
  reducers: {},
});

export default ingredientsSlice;

///

/* название,цена, картинка, описание, количество ккал 
 создать json file с данными

 */
