import React, { useEffect, useState } from 'react';
import { View, TouchableHighlight, ActivityIndicator } from 'react-native';
import ProductCard from '../../components/ProductCard/ProductCard';
import DefaultHeader from '../../components/defaultHeader/defaultHeader';
import ProductCategorey from '../../components/ProductCategory/ProductCategorey';
import FilterButton from '../../assets/filterButton';
import SortButton from '../../assets/sortButton';
import { FlatList } from 'react-native-gesture-handler';
import { HomeScreenStyles as styles } from './styles';
import { getCartFromStorage, saveCartToStorage } from '../../apis/cache/cacheCart';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setProducts, fetchCart, fetchProducts, fetchCartItems, updateQuantity , setQuantity } from '../../redux/action';
import { NavigationProp } from '@react-navigation/native';
const ProductScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  // console.log("ProductScreen");
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.fetchProductReducer.products);
  const isLoading = useSelector((state: any) => state.fetchProductReducer.isLoading);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const cartEpic = useSelector((state: any) => state.fetchCartReducer.cart);
  // useEffect(() => {
  //   dispatch(fetchCart());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (cartEpic && cartEpic.ID !== undefined) {
  //     setCartId(cartEpic.ID);
  //   }
  // }, [cartEpic]);
  // const error = useSelector((state: any) => state.fetchCartReducer.error);
  // useEffect(() => {
  //   dispatch(fetchCartItems({ cartId }));
  // }, [cartId, dispatch]);
  // const cartItems = useSelector((state: any) => state.fetchCartItemsReducer.cartItems);
  // console.warn(cartItems);
  // useEffect(() => {
  //   if(cartItems !== undefined && cartItems !== null){
  //     let totalQty : number = 0;
  //     for(let i = 0; i < cartItems.length; i++){
  //       dispatch(addToCart(cartItems[i]));
  //       totalQty += cartItems[i].quantity
  //     }
  //     // console.log("Total QTY" , totalQty);
  //     dispatch(setQuantity(totalQty));
  // }
  // },[cartItems, dispatch]);

  const [cart, setCart] = useState<any[]>([]);
  const loadCartData = async () => {
    let cachedCart = await getCartFromStorage(); 
    setCart(cachedCart);
    console.log("Cart data loaded successfully");
  };
  useEffect(() => {
    loadCartData();
  } , []);
  // console.log(cart);
  
  useEffect(() => {
    if(cart !== undefined && cart !== null){
      let totalQty : number = 0;
      for(let i = 0; i < cart.length; i++){
        dispatch(addToCart(cart[i]));
        totalQty += cart[i].quantity
      }
      dispatch(setQuantity(totalQty));
  }
  },[cart, dispatch]);

  return (
    <View style={styles.container}>
      <DefaultHeader />
      {/* Show loading indicator until products are fetched */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.ID.toString()}
          ListHeaderComponent={<ProductCategorey />}
          renderItem={({ item }) => (
            <TouchableHighlight
              key={item.ID}
              onPress={() => navigation.navigate('ProductInfo', { product: item })}
              underlayColor="white" >
              <ProductCard
                title={item.Name}
                amount={item.Price}
                image={item.Image}
                mrp={item.MRP} />
            </TouchableHighlight>
          )}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.scrollContainer}
        />
      )}

      <View style={styles.cucontainer}>
        <View style={styles.sortButton}>
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
