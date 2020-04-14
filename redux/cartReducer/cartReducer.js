import { cartActions } from './cartActions';
import CartItem from '../../models/cart-items';

const INITIAL_STATE = {
  items: {},
  totalAmount: 0
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActions.ADD_TO_CART:
      let addedItem = action.payload;
      const itemPrice = addedItem.price;
      const itemTitle = addedItem.title;

      let newItem;

      if (state.items[addedItem.id]) {
        newItem = new CartItem(
          state.items[addedItem.id].quantity + 1,
          itemTitle,
          itemPrice,
          state.items[addedItem.id].sum + itemPrice
        );
      } else {
        newItem = new CartItem(1, itemTitle, itemPrice, itemPrice);
      }

      return {
        ...state,
        items: { ...state.items, [addedItem.id]: newItem },
        totalAmount: state.totalAmount + itemPrice
      };

    case cartActions.REMOVE_ITEM:
      const itemId = state.items[action.payload];
      const currentQty = itemId.quantity;

      let itemsUpdated;
      if (currentQty > 1) {
        const itemUpdated = new CartItem(
          currentQty - 1,
          itemId.price,
          itemId.title,
          itemId.sum - itemId.price
        );

        itemsUpdated = { ...state.items, [action.payload]: itemUpdated };
      } else {
        itemsUpdated = { ...state.items };
        delete itemsUpdated[action.payload];
      }

      return {
        ...state,
        items: itemsUpdated,
        totalAmount: state.totalAmount - itemId.price
      };

    default:
      return state;
  }
};

// const addToCart = (itemsArray, itemToAdd) => {
//   const itemExists = itemsArray.find(item => item.id === itemToAdd.id);

//   if (itemExists) {
//     return itemsArray.map(item =>
//       item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//   }

//   return [...itemsArray, { ...itemToAdd, quantity: 1 }];
// };
