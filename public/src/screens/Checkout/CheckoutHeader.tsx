import React from 'react'
import { View , StyleSheet , Text} from 'react-native'
import { TouchableOpacity } from 'react-native'
import BackButton from '../../assets/backButton'
import { useNavigation } from '@react-navigation/native';
import { CheckoutHeaderStyles as styles } from './styles';

function CheckoutHeader() {
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
        <Text style={styles.cartText}>Checkout</Text>
      </View>
    </View>
  )
}

export default CheckoutHeader
