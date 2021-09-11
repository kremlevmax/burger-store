import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";

const Cart = () => {
  const data = useSelector((state) => state.cart);
  console.log(data);
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
      <div className={styles.totalPrice}>
        Total: ${data.totalPrice.toFixed(2)}
      </div>
      <div className={styles.totalCalories}>Calories: {data.totalCalories}</div>
    </div>
  );
};

export default Cart;
