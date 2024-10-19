import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Image,
  SafeAreaView,
  View,
} from 'react-native';
import ProductCard from './src/components/ProductCard';
import ProductScreen from './src/screens/HomeScreen/ProductScreen';
import FilterScreen from './src/screens/FilterScreen/FilterScreen';
import DefaultHeader from './src/components/defaultHeader';
import ProductInfo from './src/screens/ProductInfo/ProductInfo';
import CartScreen from './src/screens/CartScreen/CartScreen';
import Checkout from './src/screens/Checkout/Checkout';
import { DefaultTransition } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/TransitionPresets';
const Stack = createStackNavigator();
function App(): React.JSX.Element {
  return (  
  <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductScreen">
          <Stack.Screen name="ProductScreen" component={ProductScreen} options={{headerShown: false}} />
          <Stack.Screen name="ProductInfo" component={ProductInfo} options={{headerShown: false}} />
          <Stack.Screen name = "CartScreen" component = {CartScreen} options={{headerShown: false}}/>
          <Stack.Screen name = "FilterScreen" component = {FilterScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Checkout" component = {Checkout} options={{headerShown : false}}/>
      </Stack.Navigator>
  </NavigationContainer>
  );

}
export default App;
