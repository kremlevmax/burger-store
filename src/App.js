import Modal from "./components/Modal/Modal";

import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { fetchIngredientsList } from "./store/IngredientsStore/actions/fetchIngredientList";
import { useDispatch } from "react-redux";

import IngredientsList from "./components/IngredientsList/IngredientsList";
import Cart from "./components/Cart/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredientsList());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);
  return (
    <div className='App'>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
      <div className={styles.header}></div>
      <div className={styles.mainArea}>
        <div className={styles.ingredientsList}>
          <IngredientsList />
        </div>
        <div className={styles.cart}>
          <Cart />
        </div>
      </div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
    </div>
  );
}

export default App;
