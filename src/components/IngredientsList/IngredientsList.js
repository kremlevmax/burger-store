import { useSelector } from "react-redux";

import styles from "./IngredientsList.module.css";
import IngredientItem from "../IngredientItem/IngredientItem";
import { selectIngredientList } from "../../store/IngredientsStore/selectors/ingredientListSelector";

const IngredientsList = () => {
  const ingredientsList = useSelector(selectIngredientList);

  return (
    <ul className={styles.ingredientsList}>
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
