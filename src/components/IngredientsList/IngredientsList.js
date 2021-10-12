import { useSelector } from "react-redux";

import styles from "./IngredientsList.module.css";
import IngredientItem from "../IngredientItem/IngredientItem";
import SkeletonElement from "../Skeletons/SkeletonElement";
import { selectIngredientList } from "../../store/IngredientsStore/selectors/ingredientListSelector";

const IngredientsList = () => {
  const ingredientsList = useSelector(selectIngredientList);
  console.log(ingredientsList);

  const IngredientListDiv =
    ingredientsList === null ? (
      <SkeletonElement />
    ) : (
      ingredientsList.map((item) => (
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
      ))
    );

  return <div className={styles.ingredientsList}>{IngredientListDiv}</div>;
};

export default IngredientsList;
