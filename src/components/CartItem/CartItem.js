import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div>
      <div
        className={styles.ingredientItemImage}
        style={{ backgroundImage: `url(${props.item.image})` }}
      ></div>
      <div className='ingredient-item-name'>
        {props.item.name} x{props.item.quantity}
      </div>
    </div>
  );
};

export default CartItem;
