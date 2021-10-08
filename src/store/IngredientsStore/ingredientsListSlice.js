import { createSlice } from "@reduxjs/toolkit";
import { fullfillIngredientList } from "./reducers/fullfillIngredientList";
import { showIngredientModal } from "./reducers/showIngredientModal";
import { hideIngredientModal } from "./reducers/hideIngredientModal";

export const initialIngredientsState = {
  ingredientsList: [],
  ingredientToShow: {
    calories: 0,
    description: "",
    id: "",
    image: "",
    name: "",
    price: 0,
  },
  modalIsShown: false,
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: initialIngredientsState,
  reducers: {
    fullfillIngredientList,
    showIngredientModal,
    hideIngredientModal,
  },
});

export default ingredientsSlice;

///

/* название,цена, картинка, описание, количество ккал 
 создать json file с данными

 */
