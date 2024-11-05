import React, { useState } from 'react'
import {View , StyleSheet , Image , Text, TouchableOpacity} from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Cement from '../assets/cement';
import Wailing from '../assets/wailing';
import Construction from '../assets/construction';
import Steel from '../assets/steel';
import  products  from '../assets/productsMock';
type RootStackParamList = {
  CategoryWiseProduct: { prod: any };
};
const ProductCategorey = () => {
const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedCategory, setSelectedCategory] = useState('' as string);
  const FilterCement = async () => {
    const prod = (await products).filter((product: { Category: string; }) => product.Category === 'Cement');
    navigation.navigate('CategoryWiseProduct', { prod });
  }
  const FilterWalling = async () => {
    const prod = (await products).filter((product: { Category: string; }) => product.Category === 'Walling');
    navigation.navigate('CategoryWiseProduct', { prod });
  }
  const FilterConstruction = async () => {
    const prod = (await products).filter((product: { Category: string; }) => product.Category === 'Construction');
    if(prod.length === 0){
      console.warn('No products found');
    }
    navigation.navigate('CategoryWiseProduct', { prod });
  }
  const FilterSteel = async () => {
    const prod = (await products).filter((product: { Category: string; }) => product.Category === 'Steel');
    navigation.navigate('CategoryWiseProduct', { prod });
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        setSelectedCategory('Cement');
        FilterCement()}}>
      <Cement/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        setSelectedCategory('Walling')
        FilterWalling()
      }}>
      <Wailing/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() =>{ 
        setSelectedCategory('Construction')
        FilterConstruction()
        }}>
      <Construction/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        setSelectedCategory('Steel')
        FilterSteel()
        }}>
      <Steel/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 100,
        display : 'flex',
        flexDirection : 'row',
        gap : 20,
        padding : 5,
        zIndex : 3,
        
    },
    iconImage : {   
        width : 100,
        height : 100,
        resizeMode : 'contain',
    },
    cucontainer: {
      backgroundColor: 'white',
      marginTop : 830,
      paddingLeft : 50,
      paddingRight : 50,
      width : 500,
      height : 100,
      borderColor : 'black',
      flexDirection: 'row',
      gap: 200,
      zIndex:1,
    },
});

export default ProductCategorey
