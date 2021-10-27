import Modal from "./components/Modal/Modal";
import styles from "./App.module.css";

import { useEffect } from "react";
import { fetchIngredientsList } from "./store/IngredientsStore/reducers/fetchIngredientList";
import { useDispatch, useSelector } from "react-redux";
import { AuthContextProvider } from "./contexts/AuthContextProvider";

import IngredientsList from "./components/IngredientsList/IngredientsList";
import Cart from "./components/Cart/Cart";
import IngredientModal from "./components/IngredientModal/IngredientModal";
import { useHistory, useLocation } from "react-router-dom";
import { IngredientFromAddressLine } from "./store/IngredientsStore/selectors/IngredientFromAddressLine";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const params = new URLSearchParams(location.search);
  console.log(location.pathname);

  const ingredientId = params.get("ingredient");

  const ingredientForModalFromAddressItem = useSelector(
    IngredientFromAddressLine(ingredientId)
  );

  const isModalShown =
    ingredientForModalFromAddressItem.ingredientToShow !== undefined ||
    location.pathname === "/login";

  useEffect(() => {
    dispatch(fetchIngredientsList());
  }, [dispatch]);

  const modalElement = isModalShown ? (
    <Modal show={isModalShown} onClose={() => history.push("/")}>
      {location.pathname === "/login" ? (
        <SignUp />
      ) : (
        <IngredientModal
          ingredient={ingredientForModalFromAddressItem.ingredientToShow}
        />
      )}
    </Modal>
  ) : (
    <></>
  );
  return (
    <AuthContextProvider>
      <div className='App'>
        {modalElement}
        <div className={styles.header} onClick={() => history.push("/login")}>
          Sign up
        </div>
        <div className={styles.mainArea}>
          <div className={styles.ingredientsList}>
            <IngredientsList />
          </div>
          <div className={styles.cart}>
            <Cart />
          </div>
          <div>
            <SignUp />
          </div>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
