import AsyncStorage from '@react-native-async-storage/async-storage';
export const saveCartToStorage = async (cartData : any) => {
  try {
    const jsonValue = JSON.stringify(cartData);
    await AsyncStorage.setItem('@cart_data', jsonValue); 
    console.log("Cart data saved successfully");
  } catch (e) {
    console.error("Failed to save cart data", e);
  }
};
export const getCartFromStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cart_data');
      return jsonValue != null ? JSON.parse(jsonValue) : null; 
    } catch (e) {
      console.error("Failed to retrieve cart data", e);
      return null;
    }
};
export const clearCartFromStorage = async () => {
  try {
    await AsyncStorage.removeItem('@cart_data');
    console.log("Cart data cleared successfully");
  } catch (e) {
    console.error("Failed to clear cart data", e);
  }
};
