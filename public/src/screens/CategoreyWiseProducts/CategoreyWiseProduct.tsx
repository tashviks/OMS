import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { TouchableHighlight } from 'react-native'
import  ProductCard  from '../../components/ProductCard'
import { useNavigation } from '@react-navigation/native'
import CatWiseHeader from './CategoryWiseHeader'
import CWiseStyles from '../HomeScreen/styles'
import OutOfStock from './OutOfStock'
const styles = CWiseStyles;

const CategoreyWiseProduct = ({ route }: any) => {
  const navigation = useNavigation();
  if (route  === undefined|| route.params === undefined|| route.params.prod === undefined || route.params.prod.length === 0) {
    console.log("No products found");
    return (
      <OutOfStock/>
      );
  }
  const product = route.params.prod;
  const cat = route.params.prod[0].category;
  return (
    <View>
    <CatWiseHeader {...cat}/>
    <FlatList data={product} keyExtractor={(item) => item.ID.toString()} 
    renderItem={({ item }) => (
        <TouchableHighlight key={item.ID} onPress={() => {
          navigation.navigate('ProductInfo' , {product : item} )
          }} underlayColor="white">
          <ProductCard title={item.Name} amount={item.Price} image={item.Image} mrp={item.MRP} />
        </TouchableHighlight>
      )}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.scrollContainer}/>
      </View>
  )
}

export default CategoreyWiseProduct