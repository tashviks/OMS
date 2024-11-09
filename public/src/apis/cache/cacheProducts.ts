import AsyncStorage from '@react-native-async-storage/async-storage';
export const saveProductsToStorage = async (cartData : any) => {
  try {
    const jsonProd = JSON.stringify(cartData);
    await AsyncStorage.setItem('@product_data', jsonProd); 
    console.log("Product data saved successfully");
  } catch (err) {
    console.error("Failed to save product data", err);
  }
};
export const getProductsFromStorage = async () => {
    try {
      const jsonProd = await AsyncStorage.getItem('@product_data');
      return jsonProd != null ? JSON.parse(jsonProd) : null; 
    } catch (err) {
      console.error("Failed to retrieve product data", err);
      return null;
    }
};