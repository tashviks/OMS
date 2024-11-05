import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { TouchableHighlight } from 'react-native'
import ProductCard  from '../../components/ProductCard'
import SearchHeader from './SearchHeader'
import { SearchScreenStyles as styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import store from '../../redux/store'

const SearchScreen = ({ route }: any)=> {
    // console.warn(route.params)
    const srch = route.params.search;
    const navigation = useNavigation();
    const data = store.getState();
    const product = data.fetchProductReducer.products;
    const filteredProducts = product.filter(item => item.Name.includes(srch) || item.Brand.includes(srch) || item.Category.includes(srch));
    return (
        <View>
            <SearchHeader />
            <FlatList
                key = {'_'} // read about this 
                data={filteredProducts}
                keyExtractor={(item) => item.ID.toString()}
                renderItem={({ item }) => (
                    <TouchableHighlight onPress={() => {
                        navigation.navigate('ProductInfo' , {product : item} as never)
                        }} underlayColor="white">
                        <ProductCard title={item.Name} amount={item.Price} image={item.Image} mrp={item.Mrp} />
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