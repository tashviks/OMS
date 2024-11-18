import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Button } from 'react-native';
import CartItem from './CartItem';
import Checkout from '../Checkout/Checkout';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Snackbar from 'react-native-snackbar';
import { setAddress, setTotalAmount } from '../../redux/action';
import { fetchAddress } from '../../redux/action';
import { saveCartToStorage } from '../../apis/cache/cacheCart';
import { CartBodyStyles as styles } from './styles';
import LottieView from 'lottie-react-native';
import CheckoutButton from '../../assets/checkoutButton';
import store from '../../redux/store';
const CartBody = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.reducer === undefined ? null : state.reducer);
  // console.warn(items);
  const [coupon, setCoupon] = useState('WELCOME20');
  const [shipping, setShipping] = useState(500);
  // console.log(cartData);
  const subTotal = items ? items.reduce((total : any, item : any) => total + item.price * item.quantity, 0) : null;
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    if(subTotal === 0)
      setDiscount(0);
    else
      subTotal > 0 && subTotal < 5000 ? setDiscount(0.2*subTotal) : setDiscount(1000);
  });
  const totalAmount = subTotal + shipping - discount;
  dispatch(setTotalAmount(totalAmount));
  const navigation = useNavigation();
  useEffect(() => {
    saveCartToStorage(items);
  }, [items]);

  useEffect(()=>{
    dispatch(fetchAddress());
  }, [dispatch]);

  const goToCheckout = async () => {
        if(subTotal > 0){
            const address = store.getState().fetchAddressReducer.address;
            dispatch(setAddress(address))
            navigation.navigate('Checkout' as never);      
      }
        else {
          Snackbar.show({
            text: 'Cart is empty',
            duration: Snackbar.LENGTH_SHORT,});
        }
  }
  return (
    <View style={styles.container}>
      {items && items.length > 0 ? (
        <FlatList
          data={items}
          renderItem={({ item }) => <CartItem item={item} />}
          keyExtractor={item => item.id.toString()}
          style={styles.FlatListStyle}/>
      ) : (
        <View style={styles.LottieStyle}>
          <LottieView
            source={require('../../assets/cart_lottie.json')}
            autoPlay
            loop
            style={{ width: 200, height: 200 }}/>
        </View>
      )}
      <View style={styles.couponAndremove}>
      <View style={styles.couponContainer}>
        <View style={styles.couponContainerInner}>
        <Text style={{ fontWeight: 'bold',
            color: 'black', 
            fontSize : 20,}}>{coupon}</Text>
          {coupon === 'WOW !! SO EMPTY' ? (<Text style={{color : 'black'}}>No coupon applied</Text>) : (<Text style={{color : 'black'}}>Coupon applied</Text>)}
        </View>
        <TouchableOpacity onPress={() => {
          setDiscount(0);
          setCoupon('WOW !! SO EMPTY');}}>
        <Text style={{ color: '#f15927', textDecorationLine: 'underline' , marginTop : 22 }}>Remove</Text>
        </TouchableOpacity>

      </View>
      </View>

      <View style={styles.summary}>
        <View style={styles.subTotal}>
          <Text style={styles.subTotalText}>Sub Total: </Text>
          <Text style={styles.subTotalText}>₹{subTotal}</Text>
        </View>
        <View style={styles.shipping}>
          <Text style={{color : 'grey'}}>Shipping: </Text>
          <Text style={{color : 'grey'}}>₹{shipping}</Text>
        </View>
        <View style={styles.discount}>
          <Text style={{color : 'grey'}}>Coupon Discount:</Text>
          <Text style={{color : 'grey'}}> - ₹{discount}</Text>
        </View>
        <View style={styles.subTotal}>
          <Text style={styles.total}>Total Amount:</Text>
          {subTotal === 0 ? <Text style={styles.total}>₹0</Text> : <Text style={styles.total}>₹{totalAmount}</Text>}
        </View>
      </View>
      <View style={styles.checkOutContainer}>
      {subTotal === 0 ? <Text style={styles.checkOutTextBottom}>₹0</Text> : <Text style={styles.checkOutTextBottom}>₹{totalAmount}</Text>}
        <TouchableOpacity onPress={goToCheckout}>
        <View style={styles.checkOut}>
              <CheckoutButton/>
        </View>
        </TouchableOpacity>
      </View>
    </View>  
  );
};


export default CartBody;
