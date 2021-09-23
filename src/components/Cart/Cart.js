import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { cartDataSelector } from "../../store/CartStore/selectors/cartDataSelector";
import styles from "./Cart.module.css";

const Cart = () => {
  let data = useSelector(cartDataSelector);
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
            calories: item.calories,
            description: item.description,
            image: item.image,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          }}
        />
      ))}
      <div className={styles.priceAndCalories}>
        <div className={styles.totalPrice}>
          Total: ${data.totalPrice.toFixed(2)}
        </div>
        <div className={styles.totalCalories}>
          Calories: {data.totalCalories}
        </div>
      </div>
    </div>
  );
};

export default Cart;
