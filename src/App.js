import Modal from "./components/Modal/Modal";
import styles from "./App.module.css";

import { useEffect } from "react";
import { fetchIngredientsList } from "./store/IngredientsStore/reducers/fetchIngredientList";
import { useDispatch, useSelector } from "react-redux";
import { ingredientForModalSelector } from "./store/IngredientsStore/selectors/ingredientForModalSelector";
import { ingredientsListActions } from "./store/IngredientsStore/actions/IngrefientsListActions";

import IngredientsList from "./components/IngredientsList/IngredientsList";
import Cart from "./components/Cart/Cart";
import IngredientModal from "./components/IngredientModal/IngredientModal";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredientsList());
  }, [dispatch]);

  const ingredientForModal = useSelector(ingredientForModalSelector);
  const isModalShown = ingredientForModal.ingredientToShow !== undefined;
  const modalElement = isModalShown ? (
    <Modal show={isModalShown}>
      <IngredientModal
        ingredient={ingredientForModal.ingredientToShow}
        onClose={() => dispatch(ingredientsListActions.hideIngredientModal())}
      />
    </Modal>
  ) : (
    <></>
  );
  return (
    <div className='App'>
      {modalElement}
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
