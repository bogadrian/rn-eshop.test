import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Platform
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import { addToCart } from '../../redux/cartReducer/cartActions';

const ProductsDetailesScreen = props => {
  const { productId } = props.route.params;

  const dispatch = useDispatch();

  const prod = useSelector(state =>
    state.products.availbleProducts.find(element => element.id === productId)
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: prod.imageUrl }} />
        <View style={styles.buttonContainer}>
          <Button
            title="Add to cart"
            style={styles.button}
            onPress={() => dispatch(addToCart(prod))}
          />
        </View>
        <Text style={styles.title}>{prod.title}</Text>
        <Text style={styles.price}>$ {prod.price}</Text>
        <Text style={styles.desc}>{prod.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    overflow: 'hidden'
  },
  button: {
    alignItems: 'center',
    color: (Platform.OS = 'android' ? Colors.primary : 'white')
  },
  buttonContainer: {
    backgroundColor: Colors.primary,

    marginTop: 20
  },
  title: {
    fontSize: 18,
    fontFamily: 'open-sans-bold',
    color: Colors.primary,
    marginTop: 20
  },
  price: {
    fontSize: 20,
    color: Colors.accent,
    fontSize: 20,
    marginTop: 20,
    fontFamily: 'open-sans-bold'
  },
  desc: {
    fontFamily: 'open-sans',
    textAlign: 'center',
    marginHorizontal: 50,
    marginTop: 20
  }
});

export const screenOptions = navData => {
  const { title } = navData.route.params;

  return { headerTitle: title };
};

export default ProductsDetailesScreen;
