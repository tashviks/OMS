import React, { useState } from 'react'
import {View , StyleSheet , Image , Text, TouchableOpacity, ScrollView} from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Cement from '../../assets/cement';
import Walling from '../../assets/wailing';
import Construction from '../../assets/construction';
import Steel from '../../assets/steel';
import store from '../../redux/store';
import {styler as styles} from './styles';
type RootStackParamList = {
  CategoryWiseProduct: { prod: any };
};

const ProductCategorey = () => {
const navigation = useNavigation<NavigationProp<RootStackParamList>>();
const products = store.getState().fetchProductReducer.products;
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
      // console.warn('No products found');
    }
    navigation.navigate('CategoryWiseProduct', { prod });
  }
  const FilterSteel = async () => {
    const prod = (await products).filter((product: { Category: string; }) => product.Category === 'Steel');
    navigation.navigate('CategoryWiseProduct', { prod });
  }
  return (
    <ScrollView horizontal={true}>
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
        <Walling/>
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

      <TouchableOpacity onPress={() => {
        setSelectedCategory('Cement');
        FilterCement()}}>
        <Cement/>
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ProductCategorey
