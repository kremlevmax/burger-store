import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { cartDataSelector } from "../../store/CartStore/selectors/cartDataSelector";
import { totalCaloriesSelector } from "../../store/CartStore/selectors/cartDataSelector";
import { totalPriceSelector } from "../../store/CartStore/selectors/cartDataSelector";
import styles from "./Cart.module.css";

const Cart = () => {
  let data = useSelector(cartDataSelector);
  let totalCalories = useSelector(totalCaloriesSelector);
  let totalPrice = useSelector(totalPriceSelector);

  if (localStorage.getItem("cart")) {
    data = JSON.parse(localStorage.getItem("cart"));
  }

  return (
    <div className={styles.cart}>
      {data.items.map((item) => (
        <CartItem
          key={item.id}
          item={{
            id: item.id,
            image: item.image,
            name: item.name,
            count: item.count,
          }}
        />
      ))}
      <div className={styles.priceAndCalories}>
        <div className={styles.totalPrice}>Total: {totalPrice.toFixed(2)}</div>
        <div className={styles.totalCalories}>Calories: {totalCalories}</div>
      </div>
    </div>
  );
};

export default Cart;
