import { createSlice } from "@reduxjs/toolkit";

const initialIngredientsState = { ingredientsList: [] };

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: initialIngredientsState,
  reducers: {},
});

export const fetchIngredientsList = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://burger-store-876ce-default-rtdb.firebaseio.com/ingredients.json"
      );

      if (!response.ok) {
        throw new Error("Couldn't get data from the server");
      }

      const data = await response.json();
      console.log(await data);

      return data;
    };

    try {
      const ingredientsListData = await fetchData();
    } catch (error) {
      console.log(error);
    }
  };
};

export const ingredientsActions = ingredientsSlice.actions;

export default ingredientsSlice;

///

/* название,цена, картинка, описание, количество ккал 
 создать json file с данными

 */
