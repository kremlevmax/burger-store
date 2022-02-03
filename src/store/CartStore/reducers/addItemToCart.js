import produce from "immer";

export const addItemToCart = (state, action) => {
  const newItemId = action.payload.id;

  const cart = produce(state, (draft) => {
    if (!state.items.some((item) => item.id === newItemId)) {
      draft.items.push({
        id: newItemId,
        count: 1,
      });
    } else {
      draft.items.find((item) => item.id === newItemId).count += 1;
    }
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  return cart;
};

// console.log( JSON.parse(JSON.stringify(state.items)))
