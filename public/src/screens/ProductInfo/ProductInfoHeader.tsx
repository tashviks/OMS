import React, { useEffect } from 'react'
import { View , StyleSheet , Image , TextInput, Touchable , Text} from 'react-native'
import { TouchableOpacity } from 'react-native'
import BackButton from '../../assets/backButton'
import CartIcon from '../../assets/cartIcon'
import cartIcon from '../../assets/cartIcon'
import CartScreen from '../CartScreen/CartScreen'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import store from '../../redux/store'
import { ProductInfoHeaderStyles as styles } from './styles'

function ProductInfoHeader() {
  const navigation = useNavigation();
  const CartData = ((state : any)=> state.reducer);
  console.log(CartData);
  const [cartItems , setCartItems] = React.useState(0);
  const data = store.getState();
  const goBack = ()=>{
    navigation.goBack();
  }
  const goToCart = ()=>{
    navigation.navigate('CartScreen' as never);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <View style = {styles.backButtonCon}>
          <BackButton/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToCart}>
      <View style = {styles.cartIconCon}>
        <CartIcon/>
        <Text>{data.reducer === undefined ? 0 : data.reducer.length}</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default ProductInfoHeader
