import React, { useEffect, useState } from 'react';
import { View, TouchableHighlight, ActivityIndicator, Text } from 'react-native';
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
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { setOffset } from '../../redux/action';
import store from '../../redux/store';
import {CopilotProvider, CopilotStep, useCopilot, walkthroughable } from "react-native-copilot";
import AsyncStorage from '@react-native-async-storage/async-storage';
const ProductScreenT =  () => {
  // console.log("ProductScreen");
  const navigation = useNavigation();
  const offSet = useSelector((state: any) => state.setOffsetReducer);
  console.log("Offset", offSet);
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.fetchProductReducer.products);
  const isLoading = useSelector((state: any) => state.fetchProductReducer.isLoading);
  const [cart, setCart] = useState<any[]>([]);
  const { start } = useCopilot();
  useEffect(() => {
    dispatch(fetchProducts({ offset: offSet }));
  }, []);
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

    const currOffset = store.getState().setOffsetReducer;
    const handleProds = async () => {
      console.log("handleProds");
      dispatch(fetchProducts({ offset: currOffset + 1 }));
      dispatch(setOffset(currOffset + 1));
      const ifFirstLaunch = AsyncStorage.getItem('alreadyLaunched');
      if(await ifFirstLaunch !== 'true'){
        start();
      }
    }
    useEffect(() => {
      handleProds();
    }, []); 

    const WalkthroughableView = walkthroughable(View);
    const { copilotEvents } = useCopilot();
    useEffect(() => {
      const listener = ()=>{
        AsyncStorage.setItem('alreadyLaunched', 'true');
      }
      copilotEvents.on('stop', listener);
    }, []);
    
  return (
    <View style={styles.container}>
      <CopilotStep text="This is the header" order={1} name="header"  >
      <WalkthroughableView>
        <View style={{ width: '100%' }}>
          <DefaultHeader />
        </View>
      </WalkthroughableView>
      </CopilotStep>
      {products === undefined ? (
        <ActivityIndicator size="large" color="black" style={styles.loading} />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.ID.toString()}
          ListHeaderComponent={<ProductCategorey />}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{marginTop : 10}}>
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
            </View>
          )}
          numColumns={2}
          columnWrapperStyle={styles.row}
          // onScroll={handleScroll}
          onEndReached={handleProds}
          contentContainerStyle={styles.scrollContainer}
        />
    
      )}

      <View style={[styles.cucontainer]}>
      <CopilotStep text="Use this to access sort menu" order={2} name="sortButton">
         <WalkthroughableView style={{marginBottom : 0}}>
         <View> 
          <View style={styles.sortButton}>
            <SortButton />
          </View>
         </View> 
         </WalkthroughableView>
      </CopilotStep>

      <CopilotStep text="Use this to apply filters" order={3} name="filterButton">
        <WalkthroughableView>
        <View>
          <TouchableHighlight
            onPress={() => navigation.navigate('FilterScreen')}
            underlayColor={"#FFFFF"}>
            <FilterButton />
          </TouchableHighlight>
        </View>
        </WalkthroughableView>
      </CopilotStep>
      </View>
      
    </View>
  );
};

const st = {
  color : 'black',
  borderRadius: 10,
  paddingTop: 5,
  backgroundColor: "#FF9D3D",
};

const ProductScreen = () => (
  <CopilotProvider overlay="view" verticalOffset={55} tooltipStyle={st} >
    <ProductScreenT/>
  </CopilotProvider>
);
export default ProductScreen;
