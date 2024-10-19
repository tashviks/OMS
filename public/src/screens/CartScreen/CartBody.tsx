import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import CartItem from './CartItem';
import Checkout from '../Checkout/Checkout';
import { useNavigation } from '@react-navigation/native';
import store from '../../redux/store';
import { useSelector } from 'react-redux';

import { CartBodyStyles as styles } from './styles';

const CartBody = () => {
  const items = useSelector((state: any) => state.reducer === undefined ? null : state.reducer);
  // console.warn(items);

  const [coupon, setCoupon] = useState('WELCOME20');
  const [shipping, setShipping] = useState(500);
  const [discount, setDiscount] = useState(500);
  const cartData = useSelector((state : any)=> state.reducer);
  console.warn(cartData);
  const updateQuantity = (id: number, newQuantity: number) => {
    store.dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity: newQuantity > 0 ? newQuantity : 1 }
    });
  };


  const subTotal = items ? items.reduce((total : any, item : any) => total + item.price * item.quantity, 0) : null;
  const totalAmount = subTotal + shipping - discount;
  const navigation = useNavigation();
  const goToCheckout = () => {
    navigation.navigate('Checkout' as never);
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartItem item={item}/>}
        keyExtractor={item => item.id.toString()}/>

      <View style={styles.couponAndremove}>
        <View style={styles.couponContainer}>
            <View style={styles.couponContainerInner}>
            <Text style={{ fontWeight: 'bold',
                    color: 'green', 
                    fontSize : 20,}}>{coupon}</Text>
            <Text>Coupon applied</Text>
            </View>

            <TouchableOpacity onPress={() => setCoupon('')}>
            <Text style={{ color: '#f15927', textDecorationLine: 'underline'   }}>Remove</Text>
            </TouchableOpacity>

        </View>
      </View>

      <View style={styles.summary}>
        <View style={styles.subTotal}>
            <Text style={{fontWeight : 'bold' , color : 'black' , fontFamily : 'Inter'}}>Sub Total: </Text>
            <Text>₹{subTotal}</Text>
        </View>

        <View style={styles.shipping}>
          <Text>Shipping: </Text>
          <Text>₹{shipping}</Text>
        </View>

        <View style={styles.discount}>
        <Text style={styles.discount}>Coupon Discount:</Text>
        <Text> - ₹{discount}</Text>
        </View>
        <Text style={styles.total}>Total Amount: ₹{totalAmount}</Text>
      </View>

      <View style = {styles.checkOut}>
        <Button title="Proceed to Checkout" onPress={goToCheckout} />
      </View>
    </View>
  );
};


export default CartBody;
