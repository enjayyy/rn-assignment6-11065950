import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CartItem = ({ item, onRemoveFromCart }) => {
  const imageSource = typeof item.image === 'string' ? { uri: item.image } : item.image;

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.info}>
      <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity onPress={onRemoveFromCart}>
        <Image source={require('../assets/remove.png')} size={30} color="black" style={styles.removeIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 110,
    height: 160,
  },
  info: {
    flex: 1,
    marginHorizontal: 10,
    marginTop:50,
  },
  removeIcon: {
    alignSelf: 'flex-end',
    marginTop:120,

  },
  brand:{
    fontSize:19,
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

export default CartItem;
