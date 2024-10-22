import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import FilterHeader from './Header';
import { FilterProductStyles as styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import ProductCard from '../../components/ProductCard';

const FilteredProducts = ({ route }: any) => {
    const product = route.params.prod;
    if(product === undefined || product.length === 0){
        return (
            <View>
            <Text>No products found</Text>
            </View>
        )
    }
    const navigation = useNavigation();
    return(
        <View>
        <FilterHeader />
        <FlatList data={product} keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
            <TouchableHighlight key={item.id} onPress={() => {
              navigation.navigate('ProductInfo' , {product : item} )
              }} underlayColor="white">
              <ProductCard title={item.name} amount={item.price} image={item.image} mrp={item.mrp} />
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