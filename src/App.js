import Modal from "./components/Modal/Modal";
import styles from "./App.module.css";

import { useEffect } from "react";
import { fetchIngredientsList } from "./store/IngredientsStore/reducers/fetchIngredientList";
import { useDispatch, useSelector } from "react-redux";
import { ingredientsListActions } from "./store/IngredientsStore/actions/IngrefientsListActions";

import IngredientsList from "./components/IngredientsList/IngredientsList";
import Cart from "./components/Cart/Cart";
import IngredientModal from "./components/IngredientModal/IngredientModal";
import { useHistory, useLocation } from "react-router-dom";
import { IngredientFromAddressLine } from "./store/IngredientsStore/selectors/IngredientFromAddressLine";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const params = new URLSearchParams(location.search);

  const ingredientId = params.get("ingredient");
  const ingredientForModalFromAddressItem = useSelector(
    IngredientFromAddressLine(ingredientId)
  );

  useEffect(() => {
    dispatch(fetchIngredientsList());
  }, [dispatch]);

  const isModalShown =
    ingredientForModalFromAddressItem.ingredientToShow !== undefined;
  const modalElement = isModalShown ? (
    <Modal show={isModalShown}>
      <IngredientModal
        ingredient={ingredientForModalFromAddressItem.ingredientToShow}
        onClose={() => history.push("/")}
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
