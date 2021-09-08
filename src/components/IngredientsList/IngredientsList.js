import { useSelector } from "react-redux";

import "./IngredientsList.css";
import IngredientItem from "../IngredientItem/IngredientItem";

const IngredientsList = () => {
  const ingredientsList = useSelector(
    (state) => state.ingredients.ingredientsList
  );
  return (
    <ul className='ingredients-list'>
      {ingredientsList.map((item) => (
        <IngredientItem
          key={item.id}
          item={{
            id: item.id,
            calories: item.calories,
            description: item.description,
            image: item.image,
            name: item.name,
            price: item.price,
          }}
        />
      ))}
    </ul>
  );
};

export default IngredientsList;
