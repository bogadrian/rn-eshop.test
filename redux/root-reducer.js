import { createStore, combineReducers } from 'redux';
import productsReducer from './productsReducer/productsReducer';
import { cartReducer } from './cartReducer/cartReducer';
import { orderReducer } from './orderReducer/orderReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer
});

const store = createStore(rootReducer);

export default store;
