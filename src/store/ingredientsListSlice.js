import { createSlice } from "@reduxjs/toolkit";

const initialIngredientsState = { ingredientsList: [] };

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: initialIngredientsState,
  reducers: {
    fullfillIngredientList(state, action) {
      state.ingredientsList = action.payload;
    },
  },
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
      return data;
    };

    try {
      const ingredientsListData = await fetchData();
      dispatch(
        ingredientsListActions.fullfillIngredientList(ingredientsListData)
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const ingredientsListActions = ingredientsSlice.actions;

export default ingredientsSlice;

///

/* название,цена, картинка, описание, количество ккал 
 создать json file с данными

 */
