import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createDrowerNavigator
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductsOverviewScreen, {
  screenOptions as productOverviewOptions
} from '../screens/shop/ProductsOverviewScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen, {
  screenOptions as orderOptions
} from '../screens/shop/OrderScreen';
import ProductsDetailesScreen, {
  screenOptions as productDetailesOptions
} from '../screens/shop/ProductsDetailesScreen';

import Colors from '../constants/Colors';

const ProductsStackNavigator = createStackNavigator();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const ProductsNavigator = () => {
  return (
    <NavigationContainer>
      <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
        <ProductsStackNavigator.Screen
          name="products"
          component={ProductsOverviewScreen}
          options={productOverviewOptions}
        />
        <ProductsStackNavigator.Screen
          name="details"
          component={ProductsDetailesScreen}
          options={productDetailesOptions}
        />
        <ProductsStackNavigator.Screen name="Cart" component={CartScreen} />
      </ProductsStackNavigator.Navigator>
    </NavigationContainer>
  );
};
const OrderStackNavigation = createStackNavigator();

const OrderNavigator = navData => {
  return (
    <NavigationContainer>
      <OrderStackNavigation.Navigation screenOptions={defaultNavOptions}>
        <OrderStackNavigation.Screen
          name="Orders"
          component={OrderScreen}
          options={orderOptions}
        />
      </OrderStackNavigation.Navigation>
    </NavigationContainer>
  );
};

// const ShopStackNavigator = createDrowerNavigator();

// const ShopNavigator = navData => {
//   return
// };
export default ProductsNavigator;
