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
import { addToCart, setProducts , fetchCart, fetchProducts } from '../../redux/action';

import { getProducts } from '../../apis/getProducts';
import { getCart } from '../../apis/getCart';
import { getCartItem } from '../../apis/getCartItem';

import { NavigationProp } from '@react-navigation/native';

const ProductScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
 console.log("ProductScreen")
  const [cart, setCart] = useState();
  const [cartItem, setCartItem] = useState();
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [currCart , setCurrentCart] = useState();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const getProducts = () => {
      setProduct(store.getState().fetchProductReducer.products);
    };
    getProducts();
  }, []);

  
  useEffect(() => {
    const fetchCart = async () => {
        const cart = await getCart();
        // console.warn(cart)
        setCart(cart);
    };
    fetchCart();
  }, []);
  
  console.warn(store.getState().fetchProductReducer.products);
  // console.log(cart)
  // const makeCart = async (cartItem : any) => {
  //   if(cartItem === undefined){
  //     return;
  //   }
  //   let cartt = [];
  //   for(var i = 0;i<cartItem.length;i++){
  //     var item = cartItem[i];
  //     const prod = product.filter((product: { ID: any; }) => product.ID === item.product_id);
  //     const cartIt= {
  //       id: prod.ID,
  //       name: prod.Name,
  //       price: prod.Price,
  //       quantity: item.qty,
  //       brand: prod.Brand,
  //       grade: prod.Grade[0],
  //       bag_size: prod.BagSize[0],
  //     }
  //     cartt.push(cartIt);
  //   }
  //   for(var i = 0;i<cartt.length;i++){
  //    dispatch(addToCart(cartt[i]));
  //   }
  //   console.log("Cartt");
  //  console.log(cartt);   
  //  return cartt;
  // }
  // console.warn(cartItem);

  const cartEpic = useSelector((state : any) => state.fetchCartReducer.cart);
  const error = useSelector((state : any) => state.fetchCartReducer.error);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  console.warn(cartEpic);
  console.log(store.getState().fetchCartReducer)
  return (
    <View style={styles.container}>
      <DefaultHeader />
      <FlatList
        data={product}
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
