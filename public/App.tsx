/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
} from 'react-native';

import ProductCard from './src/components/ProductCard';
import ProductScreen from './src/screens/ProductScreen';
import FilterScreen from './src/screens/FilterScreen';
import DefaultHeader from './src/components/defaultHeader';
import ProductInfo from './src/screens/ProductInfo/ProductInfo';
import { DefaultTransition } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/TransitionPresets';

function App(): React.JSX.Element {
  return (  
  <NavigationContainer>
  <SafeAreaView> 
    {/* <ProductScreen /> */}
    {/* <FilterScreen /> */}
    <ProductInfo/>
    </SafeAreaView>
  </NavigationContainer>
  );

}
export default App;
