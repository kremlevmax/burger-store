import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { getCartItemsData } from "../../store/CartStore/reducers/getCartItemsData";
import { totalPriceAndCaloriesSelector } from "../../store/CartStore/selectors/totalPriceAndCaloriesSelector";
import SkeletonElement from "../Skeletons/SkeletonElement";

const Cart = () => {
  let data = useSelector(getCartItemsData);
  // const isDataUndefined = data.some((item) => item === undefined);
  let cartItems;

  if (data != null) {
    cartItems = data.map((item) => {
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
  } else {
    cartItems = <SkeletonElement />;
  }
  const { totalPrice, totalCalories } = useSelector(
    totalPriceAndCaloriesSelector
  );

  const totalCaloriesDiv =
    totalCalories === null ? (
      <SkeletonElement />
    ) : (
      <div> Calories: {totalCalories} kcal</div>
    );

  const totalPriceDiv =
    totalPrice === null ? (
      <SkeletonElement />
    ) : (
      <div> Total: {totalPrice.toFixed(2)} $</div>
    );

  return (
    <div className={styles.cart}>
      {cartItems}
      <div className={styles.priceAndCalories}>
        <div className={styles.totalPrice}>{totalPriceDiv}</div>
        <div className={styles.totalCalories}>{totalCaloriesDiv}</div>
      </div>
    </div>
  );
};

export default Cart;
