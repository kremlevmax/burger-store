import styles from "./IngredientItem.module.css";
import { useDispatch } from "react-redux";
import { ingredientsListActions } from "../../store/IngredientsStore/actions/IngrefientsListActions";
import { useHistory } from "react-router-dom";

const IngredientItem = (props) => {
  const dispatch = useDispatch();
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
