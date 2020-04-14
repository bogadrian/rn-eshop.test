import { addOrder } from './orderActions';
import Order from '../../models/Order';

const INITIAL_STATE = {
  orders: []
};

export const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case addOrder.ADD_ORDER:
      const newOrder = new Order(
        Date.now.toString,
        action.orderData.items,
        action.orderData.amount,
        Date.now()
      );
      return {
        ...state,
        orders: [...state.orders, newOrder]
      };
    default:
      return state;
  }
};
