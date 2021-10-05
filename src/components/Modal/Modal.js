import { useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const closeOnEscapeButton = (event) => {
    if ((event.charCode || event.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeButton);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeButton);
    };
  });

  if (!props.show) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={props.onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div>Image</div>
        <div>Add To Cart</div>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
