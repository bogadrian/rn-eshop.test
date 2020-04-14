import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../../components/shop/CartItem';
import { removeItem } from '../../redux/cartReducer/cartActions';
import { addOrderAction } from '../../redux/orderReducer/orderActions';

import Colors from '../../constants/Colors';

const CartScreen = props => {
  const dispatch = useDispatch();
  const totalCartAmount = useSelector(state => state.cart.totalAmount);
  const items = useSelector(state => {
    const itemsDataArray = [];

    for (const key in state.cart.items) {
      itemsDataArray.push({
        productId: key,
        productTitle: state.cart.items[key].title,
        productPrice: state.cart.items[key].price,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum
      });
    }
    return itemsDataArray.sort((a, b) => (a.productId > b.productId ? 1 : -1));
  });

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text>
          Total:
          <Text style={{ color: Colors.primary, fontSize: 20 }}>
            $ {totalCartAmount.toFixed(2)}
          </Text>
        </Text>
        <Button
          title="Order Now"
          onPress={() => dispatch(addOrderAction(items, totalCartAmount))}
          disabled={items.length === 0}
        />
      </View>
      <View>
        <FlatList
          data={items}
          keyExtractor={item => item.productId}
          renderItem={itemData => (
            <CartItem
              quantity={itemData.item.quantity}
              title={itemData.item.productTitle}
              amount={itemData.item.sum}
              onRemove={() => {
                dispatch(removeItem(itemData.item.productId));
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 5,
    width: '90%',
    margin: 20,
    height: 100,
    borderRadius: 10,
    borderColor: 'black',
    padding: 10
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CartScreen;
