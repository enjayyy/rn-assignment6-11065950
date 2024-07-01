import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, StyleSheet, SafeAreaView } from 'react-native';
 
const ProductItem = ({ product, onAddToCart }) => {
  const imageSource = typeof product.image === 'string' ? { uri: product.image } : product.image;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <TouchableOpacity>
      <Image source={require('../assets/add_circle.png')} size={30} color="black" onPress={onAddToCart} style={styles.cartIcon} />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text>{product.brand}</Text>
        <Text>{product.name}</Text>
        <Text>${product.price}</Text>
      </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: '200',
    height: 240,
  },
  info: {
    marginVertical: 10,
  },
  cartIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default ProductItem;
