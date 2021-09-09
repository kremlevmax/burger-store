import styles from "./IngredientItem.module.css";

const IngredientItem = (props) => {
  return (
    <li className={styles.ingredientItem}>
      <div
        className={styles.ingredientItemImage}
        style={{ backgroundImage: `url(${props.item.image})` }}
      ></div>
      <div className='ingredient-item-name'>{props.item.name}</div>
    </li>
  );
};

export default IngredientItem;
