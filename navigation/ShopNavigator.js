import React from 'react';
import { Platform, SafeAreaView, Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import ProductsOverviewScreen, {
  screenOptions as productOverviewOptions
} from '../screens/shop/ProductsOverviewScreen';
import CartScreen, {
  screenOptions as cartScreenOptions
} from '../screens/shop/CartScreen';
import OrdersScreen, {
  screenOptions as orderOptions
} from '../screens/shop/OrdersScreen';
import ProductsDetailesScreen, {
  screenOptions as productDetailesOptions
} from '../screens/shop/ProductsDetailesScreen';

import { Ionicons } from '@expo/vector-icons';
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
      <ProductsStackNavigator.Screen
        name="Cart"
        component={CartScreen}
        options={cartScreenOptions}
      />
    </ProductsStackNavigator.Navigator>
  );
};
const OrderStackNavigation = createStackNavigator();

const OrdersNavigator = () => {
  return (
    <OrderStackNavigation.Navigator screenOptions={defaultNavOptions}>
      <OrderStackNavigation.Screen
        name="Orders"
        component={OrdersScreen}
        options={orderOptions}
      />
    </OrderStackNavigation.Navigator>
  );
};

const ShopDrwaerNavigator = createDrawerNavigator();
//const dispatch = useDispatch();

const ShopNavigator = navData => {
  return (
    <ShopDrwaerNavigator.Navigator drawerContent={
      props => {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItemList {...props} />
            {/*<Button
              title="Logout"
              color={Colors.primary}
              onPress={() => {
                dispatch(authActions.logout());
                // props.navigation.navigate('Auth');
              }}
            />*/}
          </SafeAreaView>
        </View>
      );
    }}
    drawerContentOptions={{
      activeTintColor: Colors.primary
    }}>
      <ShopDrwaerNavigator.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          drawerIcon: props => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              size={23}
              color={props.color}
            />
          )
        }}
      />
      <ShopDrwaerNavigator.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: props => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
              size={23}
              color={props.color}
            />
          )
        }}
      />
    </ShopDrwaerNavigator.Navigator>
  );
};

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
