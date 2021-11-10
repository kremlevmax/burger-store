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
import Navbar from "./components/Navbar/Navbar";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const params = new URLSearchParams(location.search);

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

  const modalType =
    location.pathname === "/login" ? "modalLogin" : "ingredient";

  const modalElement = isModalShown ? (
    <Modal
      type={modalType}
      show={isModalShown}
      onClose={() => history.push("/")}
    >
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
        <Navbar />
        <div className={styles.mainArea}>
          <div className={styles.ingredientsList}>
            <IngredientsList />
          </div>
          <div className={styles.cart}>
            <Cart />
          </div>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
