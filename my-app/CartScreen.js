import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import CartItem from './components/CartItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      let storedCart = await AsyncStorage.getItem('cart');
      storedCart = storedCart ? JSON.parse(storedCart) : [];
      setCart(storedCart);
    };

    fetchCart();
  }, []);

  const removeFromCart = async (productId) => {
    let updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleScrollToEnd = () => {
    setShowButtons(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/Logo.png')} style={styles.title} />
        <View style={styles.rightIcons}>
        </View>
      </View>

      <View style={styles.checkout}>
        <Text style={styles.subhead}>CHECKOUT</Text>
      </View>

      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onRemoveFromCart={() => removeFromCart(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        onEndReached={handleScrollToEnd}
        onEndReachedThreshold={0.1}
      />
      {showButtons && (
        <View style={styles.buttonContainer}>
            <View style={styles.estContainer}>
          <Text style={styles.estimate}>EST. TOTAL                                                     </Text> 
          <Text style={styles.total} >${calculateTotal()}</Text>
          </View>

          <TouchableOpacity style={styles.checkoutbtn} onPress={() => {}}>
            <Text style={styles.chk}><Image source={require('./assets/shoppingBag.png')} size={30} color="white" />
            CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      )}
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 50,
    marginTop: 12,
    fontWeight: 'bold',
  },
  rightIcons: {
    marginRight: 1,
  },
  icon: {
    marginHorizontal: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: -22,
    right: -10,
    padding: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  estimate: {
    fontSize: 15,
    marginBottom: 10,
    marginTop:10,
    fontWeight:'200',
  },
  total:{
    fontSize: 20,
    color:'red',
  },

  checkout: {
    alignItems: 'center',
    marginTop: 11,
    marginBottom:8,
  },

  subhead: {
    fontSize: 20,
    fontFamily:'Bona Nova SC',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontWeight:'100',
  },

  checkoutbtn: {
    width: '100%',
    backgroundColor: 'black',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  estContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',


  },
  chk: {
    color: 'white',
    fontSize: 20,
    height: 30,
    fontWeight: '200',

  },
});

export default CartScreen;
