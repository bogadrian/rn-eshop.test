export const cartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_ITEM: 'REMOVE_ITEM'
};

export const addToCart = item => {
  return { type: cartActions.ADD_TO_CART, payload: item };
};

export const removeItem = itemId => ({
  type: cartActions.REMOVE_ITEM,
  payload: itemId
});
