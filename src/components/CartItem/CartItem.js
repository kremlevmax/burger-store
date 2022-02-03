import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/CartStore/actions/cartActions";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const onPlusClickHandler = () => {
    dispatch(cartActions.addItemToCart(props.item));
  };

  const onMinusClickHandler = () => {
    dispatch(cartActions.deleteItemFromCart(props.item));
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemDescriptionBlock}>
        <div
          className={styles.cartItemImage}
          style={{ backgroundImage: `url(${props.item.image})` }}
        ></div>
        <div className='ingredient-item-name'>{props.item.name}</div>
      </div>
      <div className={styles.cartItemQuantityBlock}>
        <span className={styles.plusMinus} onClick={onMinusClickHandler}>
          -
        </span>
        {props.item.count}
        <span className={styles.plusMinus} onClick={onPlusClickHandler}>
          +
        </span>
      </div>
    </div>
  );
};

export default CartItem;
