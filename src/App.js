import Modal from "./components/Modal/Modal";
import styles from "./App.module.css";

import { Switch, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchIngredientsList } from "./store/IngredientsStore/reducers/fetchIngredientList";
import { useDispatch, useSelector } from "react-redux";
import { ingredientForModalSelector } from "./store/IngredientsStore/selectors/ingredientForModalSelector";
import { ingredientsListActions } from "./store/IngredientsStore/actions/IngrefientsListActions";

import IngredientsList from "./components/IngredientsList/IngredientsList";
import Cart from "./components/Cart/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredientsList());
  }, [dispatch]);

  const { modalIsShown, ingredientToShow } = useSelector(
    ingredientForModalSelector
  );

  return (
    <div className='App'>
      <Modal
        show={modalIsShown}
        ingredient={ingredientToShow}
        onClose={() => dispatch(ingredientsListActions.hideIngredientModal())}
      />
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
