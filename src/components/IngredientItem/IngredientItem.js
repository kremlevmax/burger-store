import styles from "./IngredientItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/CartStore/actions/cartActions";

const IngredientItem = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(cartActions.addItemToCart(props.item));
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
