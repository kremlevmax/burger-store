import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { fetchIngredientsList } from "./store/ingredients/ingredients";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredientsList());
  }, [dispatch]);

  return <div className='App'></div>;
}

export default App;
