export const addOrder = {
  ADD_ORDER: 'ADD_ORDER'
};

export const addOrderAction = ({ items, totalCartAmount }) => {
  return {
    type: addOrder.ADD_ORDER,
    payload: { items, totalCartAmount }
  };
};
