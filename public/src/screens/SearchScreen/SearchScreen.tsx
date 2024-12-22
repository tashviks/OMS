import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { TouchableHighlight } from 'react-native'
import ProductCard  from '../../components/ProductCard/ProductCard'
import SearchHeader from './SearchHeader'
import { searchAPI } from '../../apis/searchAPI'
import { SearchScreenStyles as styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import store from '../../redux/store'

const SearchScreen = ({ navigation }: any) => {
    const filteredProducts = store.getState().setFilterReducer;
    console.log("Store :" , filteredProducts);
    return (
        <View style={{backgroundColor : "#fff" , height : "104%"}}>
            <SearchHeader />
            <FlatList
          key = {'_'} // read about this 
          data={filteredProducts}
          keyExtractor={(item) => item.ID.toString()}
          renderItem={({ item }) => (
              <TouchableHighlight onPress={() => {
            navigation.navigate('ProductInfo' , {product : item})
            }} underlayColor="white">
            <ProductCard title={item.Name} amount={item.Price} image={item.Image} mrp={item.MRP} />
              </TouchableHighlight>
          )}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.scrollContainer}
            />
        </View>
    );
}

export default SearchScreen