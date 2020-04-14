export const addOrder = {
  ADD_ORDER: 'ADD_ORDER'
};

export const addOrderAction = (items, amount) => {
  return {
    type: addOrder.ADD_ORDER,
    orderData: { items: items, amount: amount }
  };
};
