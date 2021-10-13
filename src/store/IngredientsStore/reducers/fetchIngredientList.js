import { ingredientsListActions } from "../actions/IngrefientsListActions";

export const fetchIngredientsList = () => {
  return async (dispatch) => {
    setTimeout(async () => {
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
    }, 100000);
  };
};
