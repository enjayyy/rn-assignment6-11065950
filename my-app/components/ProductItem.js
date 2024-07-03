import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const ProductItem = ({ product, onAddToCart }) => {
  const imageSource = typeof product.image === 'string' ? { uri: product.image } : product.image;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <TouchableOpacity onPress={onAddToCart}>
        <Image source={require('../assets/add_circle.png')} size={30} color="black" style={styles.cartIcon} />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
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
  brand:{
    fontSize:16,
    fontWeight:'300',
    fontStyle:'italic'
  },
  name:{
    fontSize:12,
    fontWeight:'200',
    fontStyle:'italic'
  },
  price:{
    fontSize:18,
    fontWeight:'200',
    fontStyle:'italic',
    color:'#B8161C',
    
  },
});

export default ProductItem;
