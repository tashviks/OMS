import React, { useEffect , useState } from 'react'
import { View , StyleSheet , Image , TextInput, Touchable , Text} from 'react-native'
import { TouchableOpacity } from 'react-native'
import BackButton from '../../assets/backButton'
import CartIcon from '../../assets/cartIcon'
import cartIcon from '../../assets/cartIcon'
import CartScreen from '../CartScreen/CartScreen'
import { useNavigation } from '@react-navigation/native';
import store from '../../redux/store'
import { ProductInfoHeaderStyles as styles } from './styles'

function ProductInfoHeader() {
  const navigation = useNavigation();
  const CartData = store.getState().reducer;
  // console.log(CartData);
  const data = store.getState();
  const goBack = ()=>{
    navigation.goBack();
  }
  const goToCart = ()=>{
    navigation.navigate('CartScreen' as never);
  }
  const cd = data.reducer;
  const [len, setLen] = useState(store.getState().qtyReducer);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setLen(store.getState().qtyReducer);
    });
    return () => {
      unsubscribe();
    };
  }, []);

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
        <Text style={{ color : 'grey' , marginTop : 2}}>({len})</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default ProductInfoHeader
