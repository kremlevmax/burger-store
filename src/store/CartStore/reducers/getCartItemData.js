// import { useSelector } from "react-redux";
// import { selectIngredientList } from "../../IngredientsStore/selectors/ingredientListSelector";

// export const getCartItemData = (state, action) => {
//   const ingredientsList = useSelector(selectIngredientList);

//   let cartItemData = {};
//   console.log(JSON.parse(JSON.stringify(ingredientsList)));

//   state.cart.items.forEach((item) => {
//     const ingredient = state.ingredients.ingredientsList.find(
//       (ingredient) => ingredient.id === item.id
//     );
//     cartItemData = { name: ingredient.name, image: ingredient.image };
//   });
//   return cartItemData;
// };
