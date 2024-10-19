import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Pressable , Text, TouchableHighlight, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import ProductCard from '../../components/ProductCard';
import DefaultHeader from '../../components/defaultHeader';
import SortAndFilter from '../../components/SortAndFilter';
import ProductCategorey from '../../components/ProductCategorey';
import FilterScreen from '../FilterScreen/FilterScreen';
import FilterButton from '../../assets/filterButton'
import SortButton from '../../assets/sortButton';
import ProductInfo from '../ProductInfo/ProductInfo';
import { FlatList } from 'react-native-gesture-handler';
type RootStackParamList = {
  ProductInfo: { product: { id: number; title: string; price: number; sku: string; name: string; brand: string; review: number; grade: string; bagSize: string; minOrderQty: number; maxOrderQty: number; inStock: number; image: any; } };
  FilterScreen: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
import { NavigationProp } from '@react-navigation/native';


const ProductScreen = ({navigation}: {navigation: NavigationProp<RootStackParamList>}) => {
const products = [
    {
        id: 1,
        title: 'Ultratech Cement Bag',
        price: 350,
        sku: 'UT123',
        name: 'Ultratech Cement Bag',
        brand: 'Ultratech',
        review: 4.5,
        grade: 'Grade 43',
        bagSize: '50kg',
        minOrderQty: 1,
        maxOrderQty: 100,
        inStock: 50,
        image : require('../../assets/free-images.jpg')
    },
    {
        id: 2,
        title: 'Ambuja Cement Bag',
        price: 300,
        sku: 'UT123',
        name: 'Ultratech Cement Bag',
        brand: 'Ultratech',
        review: 4.5,
        grade: 'Grade 43',
        bagSize: '50kg',
        minOrderQty: 1,
        maxOrderQty: 100,
        inStock: 50,
        image : "../assets/free-images.jpg"
    },
    {
        id: 3,
        title: 'ACC Cement Bag',
        price: 320,
        sku: 'UT123',
        name: 'Ultratech Cement Bag',
        brand: 'Ultratech',
        review: 4.5,
        grade: 'Grade 43',
        bagSize: '50kg',
        minOrderQty: 1,
        maxOrderQty: 100,
        inStock: 50,
        image : "../assets/free-images.jpg"
    },
    {
        id: 4,
        title: 'Birla Cement Bag',
        price: 330,
        sku: 'UT123',
        name: 'Ultratech Cement Bag',
        brand: 'Ultratech',
        review: 4.5,
        grade: 'Grade 43',
        bagSize: '50kg',
        minOrderQty: 1,
        maxOrderQty: 100,
        inStock: 50,
        image : "../assets/free-images.jpg"
    },
    {
        id: 5,
        title: 'Shree Cement Bag',
        price: 340,
        sku: 'UT123',
        name: 'Ultratech Cement Bag',
        brand: 'Ultratech',
        review: 4.5,
        grade: 'Grade 43',
        bagSize: '50kg',
        minOrderQty: 1,
        maxOrderQty: 100,
        inStock: 50,
        image : "../assets/free-images.jpg"
    },
    {
        id: 6,
        title: 'Dalmia Cement Bag',
        price: 310,
        sku: 'UT123',
        name: 'Ultratech Cement Bag',
        brand: 'Ultratech',
        review: 4.5,
        grade: 'Grade 43',
        bagSize: '50kg',
        minOrderQty: 1,
        maxOrderQty: 100,
        inStock: 50,
        image : "../assets/free-images.jpg"
    },
    {
        id: 7,
        title: 'Wonder Cement Bag',
        price: 325,
        sku: 'UT123',
        name: 'Ultratech Cement Bag',
        brand: 'Ultratech',
        review: 4.5,
        grade: 'Grade 43',
        bagSize: '50kg',
        minOrderQty: 1,
        maxOrderQty: 100,
        inStock: 50,
        image : "../assets/free-images.jpg"
    },
    {
        id: 8,
        title: 'JSW Cement Bag',
        price: 315,
        sku: 'UT123',
        name: 'Ultratech Cement Bag',
        brand: 'Ultratech',
        review: 4.5,
        grade: 'Grade 43',
        bagSize: '50kg',
        minOrderQty: 1,
        maxOrderQty: 100,
        inStock: 50,
        image : "../assets/free-images.jpg"
    },
];
  
  var index = 0;

  return (
    <View style={styles.container}>
        <DefaultHeader/>
        <FlatList data={products} keyExtractor={(item) => item.id.toString()} ListHeaderComponent={<ProductCategorey/>} 
        renderItem={({ item }) => (
            <TouchableHighlight key={item.id} onPress={() => navigation.navigate('ProductInfo' , {item} as never)} underlayColor="white">
                <ProductCard title={item.title} amount={item.price} image={item.image} sku={item.sku} />
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
const styles = StyleSheet.create({
container: {
       backgroundColor: 'white',
       position: 'relative',
       height: '100%',
},
  dHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  scrollContainer: {
    justifyContent: 'center',
    padding: 10,
    zIndex: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 20, 
  },
  scrollView: {
    flexGrow : 1,
  },
  footerContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:1,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  },
  sort : {
    marginLeft : 200
  },
  cucontainer: {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    marginBottom : 0,
    marginRight : 13,
  },
  sortButton: {
    tintColor: 'black',
    marginLeft : 200
  },
  
  
});

export default ProductScreen;
