import { View, Text, Image } from 'react-native'
import React from 'react'
import { OutOfStockStyles as styles } from './styles'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'


const OutOfStock = () => {
const navigation = useNavigation();
  return (
    <View style={{backgroundColor : "#fff" , height : "100%"}}>
    <View style = {styles.container}>
    <LottieView
            source={require('../../assets/sold_out_lottie.json')}
            autoPlay
            loop
            style={{ width: 200, height: 200 }}/>
    </View>
    <View style={{width : 200 , alignItems : 'center' , marginLeft : 100}}>
    <Button title="Go to Home" onPress={() => navigation.navigate('ProductScreen' as never)}/>
    </View>
    </View>
  )
}

export default OutOfStock