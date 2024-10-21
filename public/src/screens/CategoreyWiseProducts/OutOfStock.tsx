import { View, Text, Image } from 'react-native'
import React from 'react'
import { OutOfStockStyles as styles } from './styles'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ProductScreen from '../HomeScreen/ProductScreen'


const OutOfStock = () => {
const navigation = useNavigation();
  return (
    <View>
    <View style = {styles.container}>
     <Image source = {require('../../assets/sold-out.png')} style = {styles.soldOutImage}/>
    </View>
    <View style={{width : 200 , alignItems : 'center' , marginLeft : 100}}>
    <Button title="Go to Home" onPress={() => navigation.navigate('ProductScreen' as nev)}/>
    </View>
    </View>
  )
}

export default OutOfStock