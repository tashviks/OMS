import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { TouchableHighlight } from 'react-native'
import ProductCard  from '../../components/ProductCard'
import { products} from '../../assets/productsMock'
import SearchHeader from './SearchHeader'
import { SearchScreenStyles as styles } from './styles'
import { useNavigation } from '@react-navigation/native'

const SearchScreen = ({ route }: any)=> {
    console.warn(route.params)
    const srch = route.params.search;
    const navigation = useNavigation();
    const filteredProducts = products.filter(product => product.name.includes(srch));

    return (
        <View>
            <SearchHeader />
            <FlatList
                key = {'_'} // read about this 
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableHighlight onPress={() => {
                        navigation.navigate('ProductInfo' , {product : item} as never)
                        }} underlayColor="white">
                        <ProductCard title={item.name} amount={item.price} image={item.image} mrp={item.mrp} />
                    </TouchableHighlight>
                )}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.scrollContainer}
            />
        </View>
    );
  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  )
}

export default SearchScreen