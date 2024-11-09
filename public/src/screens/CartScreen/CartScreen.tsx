import React from 'react'
import { View , Text , StyleSheet} from 'react-native'
import CartHeader from './CartHeader';
import CartBody from './CartBody';

function CartScreen() {
  return (
    <View style={{backgroundColor :"white"}}>
      <CartHeader/>
      <CartBody/>
    </View>
  )
}
export default CartScreen