import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';
import Colors from '../../constants/Colors';

const ProductItem = props => {
  let TouchElement = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchElement = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touch}>
        <TouchElement useForeground onPress={props.onSeeDetailes}>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>$ {props.price.toFixed(2)}</Text>
            <View style={styles.buttons}>
              <Button title="See Detailes" onPress={props.onSeeDetailes} />
              <Button title="Add To Cart" onPress={props.onAddToCart} />
            </View>
          </View>
        </TouchElement>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 20,
    elevation: 5,
    borderRadius: 20,
    margin: 20,
    height: 300,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  touch: {
    borderRadius: 20,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    marginBottom: 10,
    color: Colors.primary
  },
  price: { fontSize: 18, color: Colors.accent, marginVertical: 5 }
});
export default ProductItem;
