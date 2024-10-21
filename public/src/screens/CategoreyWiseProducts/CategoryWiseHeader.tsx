import React from 'react'
import { View , StyleSheet , Text} from 'react-native'
import { TouchableOpacity } from 'react-native'
import BackButton from '../../assets/backButton'
import { useNavigation } from '@react-navigation/native';
import { CartHeaderStyles } from './styles';
const styles = CartHeaderStyles;
function CatWiseHeader(txt : any) {
    const navigation = useNavigation();
    const goBack = ()=>{
        navigation.goBack();
    }
    // console.warn(txt)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.backButtonCon}>
        <BackButton />
      </TouchableOpacity>
      <View style={styles.cartTextContainer}>
        <Text style={styles.cartText}>Filtered Data</Text>
      </View>
    </View>
  )
}
export default CatWiseHeader
