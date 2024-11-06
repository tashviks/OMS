import React, { useEffect, useState } from 'react';
import { View, TouchableHighlight } from 'react-native';
import ProductCard from '../../components/ProductCard';
import DefaultHeader from '../../components/defaultHeader/defaultHeader';
import ProductCategorey from '../../components/ProductCategorey';
import FilterButton from '../../assets/filterButton';
import SortButton from '../../assets/sortButton';
import { FlatList } from 'react-native-gesture-handler';
import { HomeScreenStyles as styles } from './styles';
import store from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setProducts , fetchCart, fetchProducts , fetchCartItems } from '../../redux/action';

import { NavigationProp } from '@react-navigation/native';

const ProductScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
 console.log("ProductScreen")
  const dispatch = useDispatch();
  const [currCart , setCurrentCart] = useState();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // to fetch cart 
  const cartEpic = useSelector((state : any) => state.fetchCartReducer.cart);
  const error  = useSelector((state : any) => state.fetchCartReducer.error);
  const cartId = cartEpic?.ID;
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchCartItems(cartId));
  // }, [dispatch]);

  // const cartItems = useSelector((state : any) => state.fetchCartReducer.cartItems);
  // console.warn(cartItems);
  
  console.log(store.getState().fetchCartReducer)
  return (
    <View style={styles.container}>
      <DefaultHeader />
      <FlatList
        data={store.getState().fetchProductReducer.products}
        keyExtractor={(item) => item.ID}
        ListHeaderComponent={<ProductCategorey />}
        renderItem={({ item }) => (
          <TouchableHighlight
            key={item.ID}
            onPress={() => navigation.navigate('ProductInfo', { product: item })}
            underlayColor="white">
            <ProductCard
              title={item.Name}
              amount={item.Price}
              image={item.Image}
              mrp={item.MRP}/>
          </TouchableHighlight>
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.scrollContainer}
      />
      <View style={styles.cucontainer}>
        <View>
          <SortButton />
        </View>
        <View>
          <TouchableHighlight
            onPress={() => navigation.navigate('FilterScreen')}
            underlayColor={"#FFFFF"}
          >
            <FilterButton />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;
