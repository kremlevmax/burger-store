import styles from "./IngredientItem.module.css";
import { cartActions } from "../../store/CartStore/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

const IngredientItem = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(cartActions.addItemToCart(props.item));
  };

  const cartList = useSelector((state) => state.cart.items);
  return (
    <li className={styles.ingredientItem} onClick={onClickHandler}>
      <div
        className={styles.ingredientItemImage}
        style={{ backgroundImage: `url(${props.item.image})` }}
      ></div>
      <div className='ingredient-item-name'>{props.item.name}</div>
    </li>
  );
};

export default IngredientItem;
