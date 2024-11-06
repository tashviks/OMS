import React from 'react'
import { View , StyleSheet , Text} from 'react-native'
import { TouchableOpacity } from 'react-native'
import BackButton from '../../assets/backButton'
import { useNavigation } from '@react-navigation/native';
import { CartHeaderStyles } from './styles';
const styles = CartHeaderStyles;
function CartHeader() {
    const navigation = useNavigation();
    const goBack = ()=>{
        navigation.goBack();
    }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.backButtonCon}>
        <BackButton />
      </TouchableOpacity>
      <View style={styles.cartTextContainer}>
        <Text style={styles.cartText}>Your cart</Text>
      </View>
    </View>
  )
}
export default CartHeader
