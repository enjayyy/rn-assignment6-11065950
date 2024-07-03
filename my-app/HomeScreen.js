import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ProductItem from './components/ProductItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      { id: '1', name: 'reversible angora cardigan', price: 120, brand: 'Office Wear', image: require('./assets/dress1.png') },
      { id: '2', name: 'reversible angora cardigan', price: 120, brand: 'Black', image: require('./assets/dress2.png') },
      { id: '3', name: 'reversible angora cardigan', price: 120, brand: 'Church Wear', image: require('./assets/dress3.png') },
      { id: '4', name: 'reversible angora cardigan', price: 120, brand: 'Lamerei', image: require('./assets/dress4.png') },
      { id: '5', name: 'reversible angora cardigan', price: 120, brand: '21WN', image: require('./assets/dress5.png') },
      { id: '6', name: 'reversible angora cardigan', price: 120, brand: 'Lopo', image: require('./assets/dress6.png') },
      { id: '7', name: 'reversible angora cardigan', price: 120, brand: '21WN', image: require('./assets/dress7.png') },
      { id: '7', name: 'reversible angora cardigan', price: 120, brand: 'Lamerei', image: require('./assets/dress5.png') },

    ]);
  }, []);

  const addToCart = async (product) => {
    let cart = await AsyncStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
    cart.push(product);
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/Menu.png')} size={30} color="black" style={styles.icon} />
        <Image source={require('./assets/Logo.png')} style={styles.title} />
        <View style={styles.rightIcons}>
          <Image source={require('./assets/Search.png')} size={30} color="black" style={styles.icon} />
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image source={require('./assets/shoppingBag.png')} size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderTitle}>    O U R    S T O R Y</Text>
        <View style={styles.rightIcons}>
          <Image source={require('./assets/Listview.png')} size={40} color="black" style={styles.icon} />
          <Image source={require('./assets/Filter.png')} size={40} color="black" style={styles.icon} />
        </View>
      </View>
      <FlatList

        data={products}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onAddToCart={() => addToCart(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginLeft: 21,
    marginRight: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightIcons: {
    flexDirection: 'row',
    marginRight: 24,
  },
  icon: {
    marginHorizontal: 10,
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 40,
  },
  subHeaderTitle: {
    fontSize: 21,
    fontWeight: '300',
    fontStyle:'italic',
  },
  filters: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    borderRadius: 15,
  },
});

export default HomeScreen;
