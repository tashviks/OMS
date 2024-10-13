import React from 'react'
import { View , StyleSheet , Image , TextInput, Touchable} from 'react-native'
import { TouchableOpacity } from 'react-native'
import BackButton from '../../assets/backButton'
import CartIcon from '../../assets/cartIcon'
import cartIcon from '../../assets/cartIcon'
import { useNavigation } from '@react-navigation/native';

const goBack = ()=>{
  
}

function ProductInfoHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <View style = {styles.backButtonCon}>
          <BackButton/>
      </View>
      </TouchableOpacity>
      <View style = {styles.cartIconCon}>
        <CartIcon/>
      </View>



    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        width: 'auto',
        height: 50,
        paddingVertical: 0,
        paddingHorizontal: 16,
        display : 'flex',
        flexDirection : 'row',
        marginTop : 10,
    },
   backButtonCon:{
        width: 100,
        height: 100,
        marginLeft: -10,
   },
   cartIconCon:{
    marginTop : 10,
    marginLeft : 220
   }
    });
export default ProductInfoHeader
