import { addOrder } from './orderActions';
import Order from '../../models/Order';

const INITIAL_STATE = {
  orders: []
};

export const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case addOrder.ADD_ORDER:
      const { totalCartAmount } = action.payload;
      const { items } = action.payload;

      const newOrder = new Order(
        Date.now().toString(),
        items,
        totalCartAmount,
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
