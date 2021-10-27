import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/CartStore/actions/cartActions";
import { cartDataSelector } from "../../store/CartStore/selectors/cartDataSelector";
import styles from "./IngredientModal.module.css";

const IngredientModal = (props) => {
  const dispatch = useDispatch();
  const cartData = useSelector(cartDataSelector);

  const ingredientCount = cartData.items.find(
    (item) => item.id === props.ingredient.id
  )
    ? cartData.items.find((item) => item.id === props.ingredient.id).count
    : 0;

  let buttonPhrase =
    ingredientCount > 0
      ? `You already have ${ingredientCount} pieces of this item in your cart`
      : "Add to Cart";

  const addIngredientToCart = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };

  return (
    <div>
      <div className={styles.ingredientImageAndText}>
        <div
          className={styles.ingredientImage}
          style={{ backgroundImage: `url(${props.ingredient.image})` }}
        ></div>
        <div className={styles.ingredientTextDescription}>
          <div className={styles.ingredientName}>{props.ingredient.name}</div>
          <div>{props.ingredient.description}</div>
          <div>Calories: {props.ingredient.calories}</div>
          <div>Price: {props.ingredient.price}</div>
        </div>
      </div>
      <div className={styles.addButtonArea}>
        <button
          className={styles.addButton}
          onClick={() => addIngredientToCart(props.ingredient)}
        >
          {buttonPhrase}
        </button>
      </div>
    </div>
  );
};

export default IngredientModal;
