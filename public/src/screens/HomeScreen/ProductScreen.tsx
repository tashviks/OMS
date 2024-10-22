import React, { useEffect, useState } from 'react';
import { View, TouchableHighlight} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import ProductCard from '../../components/ProductCard';
import DefaultHeader from '../../components/defaultHeader/defaultHeader';
import ProductCategorey from '../../components/ProductCategorey';
import FilterButton from '../../assets/filterButton'
import SortButton from '../../assets/sortButton';
import { FlatList } from 'react-native-gesture-handler';
import { HomeScreenStyles as styles } from './styles';
import {products} from '../../assets/productsMock';
// import { useDispatch, useSelector } from 'react-redux';
const ProductScreen = ({navigation}: any) => {
  var index = 0;
  return (
    <View style={styles.container}>
        <DefaultHeader/>
        <FlatList data={products} keyExtractor={(item) => item.id.toString()} ListHeaderComponent={<ProductCategorey/>} 
        renderItem={({ item }) => (
            <TouchableHighlight key={item.id} onPress={() => {
                navigation.navigate('ProductInfo', { product: item } as never)
              }} underlayColor="white">
              <ProductCard title={item.name} amount={item.price} image={item.image} mrp={item.mrp} />
            </TouchableHighlight>
          )}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.scrollContainer}/>
    <View style={styles.cucontainer} > 
      <View>
        <SortButton/>
      </View>     
      <View>
        <TouchableHighlight onPress={() => navigation.navigate('FilterScreen' as never)} underlayColor={"#FFFFF"}>
        <FilterButton/>
        </TouchableHighlight>
      </View>
    </View>
  </View>
);
}


export default ProductScreen;
