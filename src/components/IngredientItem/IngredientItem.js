import styles from "./IngredientItem.module.css";
import { useDispatch } from "react-redux";
import { ingredientsListActions } from "../../store/IngredientsStore/actions/IngrefientsListActions";

const IngredientItem = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(ingredientsListActions.showIngredientModal(props.item));
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
