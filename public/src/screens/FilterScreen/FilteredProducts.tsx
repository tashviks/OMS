import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import FilterHeader from './Header';
import { FilterProductStyles as styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import ProductCard from '../../components/ProductCard/ProductCard';
import OutOfStock from '../CategoreyWiseProducts/OutOfStock';
const FilteredProducts = ({ route }: any) => {
    const product = route.params.prod;
    if(product === undefined || product.length === 0){
        return (
            <View>
                <OutOfStock />
            </View>
        )
    }
    const navigation = useNavigation();
    return(
        <View style ={styles.container}>
        <FilterHeader />
        <FlatList data={product} keyExtractor={(item) => item.ID.toString()} 
        renderItem={({ item }) => (
            <TouchableHighlight key={item.ID} onPress={() => {
              navigation.navigate("ProductInfo" , {product : item})
              }} underlayColor="white">
              <ProductCard title={item.Name} amount={item.Price} image={item.Image} mrp={item.MRP} />
            </TouchableHighlight>
          )}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.scrollContainer}
          />
          </View>
    )
}

export default FilteredProducts