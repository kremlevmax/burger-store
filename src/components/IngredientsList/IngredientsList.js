import { useSelector } from "react-redux";

import IngredientItem from "../IngredientItem/IngredientItem";

const IngredientsList = () => {
  const ingredientsList = useSelector(
    (state) => state.ingredients.ingredientsList
  );
  return (
    <ul>
      {ingredientsList.map((item) => (
        <IngredientItem name={item.name} />
      ))}
    </ul>
  );
};

export default IngredientsList;
