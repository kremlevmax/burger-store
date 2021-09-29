import produce from "immer";

export const deleteItemFromCart = (state, action) => {
  const itemToDelete = action.payload;

  const cart = produce(state, (draft) => {
    const index = draft.items.findIndex(
      (item) => item.id === itemToDelete["id"]
    );
    if (draft.items[index].quantity > 1) {
      draft.items[index].quantity -= 1;
    } else {
      draft.items.splice(index, 1);
    }
    console.log(itemToDelete.totalCalories);
    draft["totalCalories"] -= itemToDelete.calories;
    draft["totalPrice"] -= itemToDelete.price;
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(JSON.parse(JSON.stringify(cart)));
  return cart;

  // //state.totalCalories -= itemToDelete.calories;
  // //state.totalPrice -= itemToDelete.price;

  // if (state.items[itemToDeleteIndex].quantity === 1) {
  //   const cart = produce(state.items, (draft) => {
  //     draft.splice(itemToDeleteIndex, 1);
  //   });

  //   localStorage.setItem("cart", JSON.stringify(state));
  //   return cart;
  // } else {
  //   const cart = produce(state.items, (draft) => {
  //     draft[itemToDeleteIndex] -= 1;
  //   });
  //   localStorage.setItem("cart", JSON.stringify(state));
  //   return cart;
  // }
};
