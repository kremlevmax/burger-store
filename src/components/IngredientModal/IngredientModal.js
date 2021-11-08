import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/CartStore/actions/cartActions";
import { cartDataSelector } from "../../store/CartStore/selectors/cartDataSelector";
import styles from "./IngredientModal.module.css";
import Button from "../UI/Button/Button";

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
    <div className={styles.ingredientDataContainer}>
      <div className={styles.ingredientImageAndText}>
        <div
          className={styles.ingredientImage}
          style={{ backgroundImage: `url(${props.ingredient.image})` }}
        ></div>
        <div className={styles.ingredientTextDescription}>
          <div className={styles.ingredientName}>{props.ingredient.name}</div>
          <div className={styles.ingredientProperties}>
            <div>{props.ingredient.description}</div>
            <div>Calories: {props.ingredient.calories} kcal</div>
            <div>Price: {props.ingredient.price}$</div>
          </div>
        </div>
      </div>
      <div className={styles.addButtonArea}>
        <Button
          onClick={() => addIngredientToCart(props.ingredient)}
          label={buttonPhrase}
        />
      </div>
    </div>
  );
};

export default IngredientModal;
