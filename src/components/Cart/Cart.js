import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { getCartItemsData } from "../../store/CartStore/reducers/getCartItemsData";
import { totalPriceAndCaloriesSelector } from "../../store/CartStore/selectors/totalPriceAndCaloriesSelector";

const Cart = () => {
  let data = useSelector(getCartItemsData);
  const isDataUndefined = data.some((item) => item === undefined);
  let cartItems;

  if (!isDataUndefined) {
    cartItems = data.map((item) => {
      console.log(item["id"]);
      return (
        <CartItem
          key={item.key}
          item={{
            id: item.id,
            image: item.image,
            name: item.name,
            count: item.count,
          }}
        />
      );
    });
  }
  const { totalPrice, totalCalories } = useSelector(
    totalPriceAndCaloriesSelector
  );

  return (
    <div className={styles.cart}>
      {cartItems}
      <div className={styles.priceAndCalories}>
        <div className={styles.totalPrice}>Total: {totalPrice.toFixed(2)}</div>
        <div className={styles.totalCalories}>Calories: {totalCalories}</div>
      </div>
    </div>
  );
};

export default Cart;
