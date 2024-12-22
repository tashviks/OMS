import React from 'react'
import { View , StyleSheet , Text} from 'react-native'
import { TouchableOpacity } from 'react-native'
import BackButton from '../../assets/backButton'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CartHeaderStyles } from './styles';
const styles = CartHeaderStyles;
interface CatWiseHeaderProps {
  navigation: NavigationProp<any>;
}
const CatWiseHeader: React.FC<CatWiseHeaderProps> = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const goBack = ()=>{
        navigation.goBack();
    }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack} style={styles.backButtonCon}>
        <BackButton />
      </TouchableOpacity>
      <View style={styles.cartTextContainer}>
        <Text style={styles.cartText}>Filtered Items</Text>
      </View>
    </View>
  )
}
export default CatWiseHeader
