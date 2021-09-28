import produce from "immer";

export const addItemToCart = (state, action) => {
  const newItem = action.payload;
  const existingItemIndex = state.items.findIndex((item) => item.id === newItem.id);
  const totalPrice = state.totalPrice + newItem.price
  const totalCalories = state.totalCalories + newItem.calories
 // state.totalPrice += newItem.price;
 // state.totalCalories += newItem.calories;

  if (existingItemIndex  < 0) {
    const cart = {
      ...state,
      totalPrice: totalPrice,
      totalCalories: totalCalories,
      items: [...state.items, {
        id: newItem.id,
        calories: newItem.calories,
        description: newItem.description,
        image: newItem.image,
        name: newItem.name,
        price: newItem.price,
        quantity: 1,
      }
    ]
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  
  return cart;
    
  } else {
    const newItems = produce(state.items, draft => {draft[existingItemIndex].quantity += 1})
    const cart = {
      ...state, 
      totalPrice: totalPrice,
      totalCalories: totalCalories,
      items: newItems
      }

    localStorage.setItem("cart", JSON.stringify(cart));

    return cart;
  }
}

  // console.log( JSON.parse(JSON.stringify(state.items)))
