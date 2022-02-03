import styles from "./IngredientItem.module.css";
import { useHistory } from "react-router-dom";

const IngredientItem = (props) => {
  const history = useHistory();

  const onClickHandler = () => {
    //dispatch(ingredientsListActions.showIngredientModal(props.item));
    history.push(`?ingredient=${props.item.id}`);
  };

  return (
    <div className={styles.ingredientItem} onClick={onClickHandler}>
      <div className={styles.ingredientItemName}>{props.item.name}</div>
      <div
        className={styles.ingredientItemImage}
        style={{ backgroundImage: `url(${props.item.image})` }}
      ></div>
    </div>
  );
};

export default IngredientItem;
