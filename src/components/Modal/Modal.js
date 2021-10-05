import styles from "./Modal.module.css";

const Modal = (props) => {
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
