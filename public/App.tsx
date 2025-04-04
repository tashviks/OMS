import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CopilotProvider } from 'react-native-copilot';

import ProductScreen from './src/screens/HomeScreen/ProductScreen';
import FilterScreen from './src/screens/FilterScreen/FilterScreen';
import ProductInfo from './src/screens/ProductInfo/ProductInfo';
import CartScreen from './src/screens/CartScreen/CartScreen';
import Checkout from './src/screens/Checkout/Checkout';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import CategoryWiseProduct from './src/screens/CategoreyWiseProducts/CategoreyWiseProduct';
import FilteredProducts from './src/screens/FilterScreen/FilteredProducts';
import OnboardingScreen from './src/screens/OnBoardingScreen/OnBoardingScreen';
import OfflineComponent from './src/screens/Offline/OfflineComponent';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const value = await AsyncStorage.getItem('alreadyLaunched');
      if (value === null) {
        setIsFirstLaunch(true);
        // await AsyncStorage.setItem('alreadyLaunched', 'true');
      } else {
        setIsFirstLaunch(false);
      }
      console.log('First Launch', isFirstLaunch);
    };
    checkFirstLaunch();
  }, []);

  if (isFirstLaunch === null) {
    return null; // or a loading spinner
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName={isFirstLaunch ? "OnboardingScreen" : "ProductScreen"}
      screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#fff' } }}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="CategoryWiseProduct" component={CategoryWiseProduct} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="FilteredProducts" component={FilteredProducts} />
      <Stack.Screen name="OfflineComponent" component={OfflineComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
