import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Pressable , Text, TouchableHighlight, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import ProductCard from '../components/ProductCard';
import DefaultHeader from '../components/defaultHeader';
import SortAndFilter from '../components/SortAndFilter';
import ProductCategorey from '../components/ProductCategorey';
import FilterPopup from '../components/FilterPopup';
const ProductScreen = () => {
  const [filterModalVisible , setFilterModalVisible] = useState(false);
  const navigation = useNavigation();
// useEffect to fecch data from the server
const products = [
    {
        id: 1,
        title: 'Ultratech Cement Bag',
        price: 350,
        image : "../assets/free-images.jpg"
    },
    {
        id: 2,
        title: 'Ambuja Cement Bag',
        price: 300,
        image : "../assets/free-images.jpg"
    },
    {
        id: 3,
        title: 'ACC Cement Bag',
        price: 320,
        image : "../assets/free-images.jpg"
    },
    {
        id: 4,
        title: 'Birla Cement Bag',
        price: 330,
        image : "../assets/free-images.jpg"
    },
    {
        id: 5,
        title: 'Shree Cement Bag',
        price: 340,
        image : "../assets/free-images.jpg"
    },
    {
        id: 6,
        title: 'Dalmia Cement Bag',
        price: 310,
        image : "../assets/free-images.jpg"
    },
    {
        id: 7,
        title: 'Wonder Cement Bag',
        price: 325,
        image : "../assets/free-images.jpg"
    },
    {
        id: 8,
        title: 'JSW Cement Bag',
        price: 315,
        image : "../assets/free-images.jpg"
    },
  
];
  const rows = [];
  for (let i = 0; i <products.length; i += 2) {
    rows.push(products.slice(i, i + 2));
  }
  var index = 0;
  return (
    <View style={styles.container}>
        <DefaultHeader/>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <ProductCategorey/>
          <View style={styles.productGrid}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                amount={product.price}
                image={product.image}
              />
            ))}
          </View>
      </ScrollView>
      {/* Sort and Filter Footer */}
    <View style={styles.cucontainer} > 
      <View style={styles.sort}>
        <Text style={styles.sortText}>SORT</Text>
      </View>     
      <View style={styles.filter}>
        <TouchableHighlight onPress={() => navigation.navigate('FilterPopup' as never)} underlayColor={"#FFFFF"}>
        <Text style={styles.sortText}>FILTER</Text>
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
       height: '97%',
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
    flexWrap: 'wrap', // Allows wrapping of items when they exceed the row width
    justifyContent: 'space-between',
  },
  sort : {
    padding: 20,
    paddingLeft : 80,
    borderRadius: 10,
  },
  filter:{
    padding: 20,
    paddingLeft : 100,
    borderRadius: 10,

  },
  cucontainer: {
    display : 'flex',
    flexDirection : 'row',
    backgroundColor : 'white',
    width : '100%',
    position : 'relative',
    marginBottom : -52,
    gap: 30,
    paddingLeft : 2,
    borderColor : 'black',
    borderWidth : 0.2

  },
  sortText : {
    fontSize : 20,
    fontWeight : 'bold',
    color : '#F15927'
  },
  sortBorder : {
    borderBlockColor : 'black'
  },
  
});

export default ProductScreen;
