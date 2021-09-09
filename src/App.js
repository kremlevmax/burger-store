import styles from "./App.module.css";
import { useEffect } from "react";
import { fetchIngredientsList } from "./store/ingredientsListSlice";
import { useDispatch } from "react-redux";

import IngredientsList from "./components/IngredientsList/IngredientsList";
import Cart from "./components/Cart/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredientsList());
  }, [dispatch]);

  return (
    <div className='App'>
      <div className={styles.header}></div>
      <div className={styles.mainArea}>
        <div className={styles.ingredientsList}>
          <IngredientsList />
        </div>
        <div className={styles.cart}>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
