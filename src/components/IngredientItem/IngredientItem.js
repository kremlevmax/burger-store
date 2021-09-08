import "./IngredientItem.css";

const IngredientItem = (props) => {
  return (
    <li className='ingredient-item'>
      <div className='ingredient-item-div'>
        <img className='ingredient-item-image' src={props.item.image}></img>
      </div>
      <div className='ingredient-item-name'>{props.item.name}</div>
    </li>
  );
};

export default IngredientItem;
