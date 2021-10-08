import { useEffect } from "react";
import styles from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/CartStore/actions/cartActions";

const Modal = (props) => {
  const dispatch = useDispatch();

  const closeOnEscapeButton = (event) => {
    if ((event.charCode || event.keyCode) === 27) {
      props.onClose();
    }
  };

  const addIngredientToCart = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeButton);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeButton);
    };
  });

  const isModalShownClass = props.show
    ? `${styles.modal} ${styles.show}`
    : `${styles.modal}`;
  return (
    <div className={isModalShownClass} onClick={props.onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.ingredientImageAndText}>
          <div
            className={styles.ingredientImage}
            style={{ backgroundImage: `url(${props.ingredient.image})` }}
          ></div>
          <div className={styles.ingredientTextDescription}>
            <div className={styles.ingredientName}>
              {props.ingredient.name}
              <div onClick={props.onClose} className={styles.closeXButton}>
                X
              </div>
            </div>
            <div>{props.ingredient.description}</div>
            <div>Calories: {props.ingredient.calories}</div>
            <div>Price: {props.ingredient.price}</div>
          </div>
        </div>
        <div className={styles.addButtonArea}>
          <button
            className={styles.addButton}
            onClick={() => addIngredientToCart(props.ingredient)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
