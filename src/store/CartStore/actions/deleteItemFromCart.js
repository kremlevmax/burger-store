import produce from "immer";

export const deleteItemFromCart = (state, action) => {
  const itemToDeleteId = action.payload.id;
  const itemToDeleteIndex = state.items.indexOf(
    state.items.find((item) => item.id === itemToDeleteId)
  );

  const cart = produce(state, (draft) => {
    if (state.items.find((item) => item.id === itemToDeleteId).count === 1) {
      draft.items.splice(itemToDeleteIndex, 1);
    } else {
      draft.items.find((item) => item.id === itemToDeleteId).count -= 1;
    }
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  return cart;
};
