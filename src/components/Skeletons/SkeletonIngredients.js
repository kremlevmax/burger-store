import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";
import "./SkeletonIngredients.css";
const SkeletonIngredients = () => {
  return (
    <div className='skeletonIngredientsWrapper'>
      <div className='skeletonIngredients'>
        {[1, 2, 3, 4, 5].map((item) => (
          <SkeletonElement type='ingredientItem' key={item} />
        ))}
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonIngredients;
