import "./App.css";
import { useEffect } from "react";
import { fetchIngredientsList } from "./store/ingredientsListSlice";
import { useDispatch } from "react-redux";

import IngredientsList from "./components/IngredientsList/IngredientsList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredientsList());
  }, [dispatch]);

  return (
    <div className='App'>
      <IngredientsList />
    </div>
  );
}

export default App;
