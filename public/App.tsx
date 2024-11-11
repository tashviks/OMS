import React from 'react';
import { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductScreen from './src/screens/HomeScreen/ProductScreen';
import FilterScreen from './src/screens/FilterScreen/FilterScreen';
import ProductInfo from './src/screens/ProductInfo/ProductInfo';
import CartScreen from './src/screens/CartScreen/CartScreen';
import Checkout from './src/screens/Checkout/Checkout';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import CategoryWiseProduct from './src/screens/CategoreyWiseProducts/CategoreyWiseProduct';
import FilteredProducts from './src/screens/FilterScreen/FilteredProducts';
const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (  
  <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductScreen" screenOptions={{headerShown : false}}>
          <Stack.Screen name="ProductScreen" component={ProductScreen}  />
          <Stack.Screen name="CategoryWiseProduct" component={CategoryWiseProduct}  />
          <Stack.Screen name="ProductInfo" component={ProductInfo}  />
          <Stack.Screen name = "CartScreen" component = {CartScreen} />
          <Stack.Screen name = "FilterScreen" component = {FilterScreen} />
          <Stack.Screen name="Checkout" component = {Checkout} />
          <Stack.Screen name="SearchScreen" component = {SearchScreen} />
          <Stack.Screen name="FilteredProducts" component = {FilteredProducts} />
      </Stack.Navigator>
  </NavigationContainer>
  );

}
export default App;
