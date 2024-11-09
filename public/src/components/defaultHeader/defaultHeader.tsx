import React, { useEffect } from 'react'
import { useState } from 'react';
import { View , StyleSheet, TextInput , Text} from 'react-native'
import InfraMarket from '../../assets/infraMarket'
import CartIcon from '../../assets/cartIcon';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import searchData from '../../assets/searchData';
import { useDispatch } from 'react-redux';
import store from '../../redux/store';
function defaultHeader() {
    const navigation : any = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filterData , setFilterData] = React.useState(['']);
    const goToSeacrh = () =>{
        navigation.navigate('SearchScreen', {search : searchQuery});
    }
    const [len, setLen] = useState(store.getState().qtyReducer);
    useEffect(() => {
      const unsubscribe = store.subscribe(() => {
        setLen(store.getState().qtyReducer);
      });
      return () => {
        unsubscribe();
      };
    }, []);
    const displayList = ()=>{
        if(filterData.length > 0){
            return filterData.map((item, index)=>{
                return (
                <TouchableOpacity key={index} onPress={()=>{
                    setSearchQuery(item)
                    goToSeacrh();
                    }}>      
                <Text key={index}>{item}</Text>
                </TouchableOpacity>
                )
            })
        }
        return null;
    }
    const dispatch = useDispatch();
    const handleSearch = (query: string) => {
        setSearchQuery(query);
        // dispatch(filterProducts(query));
        if(query.length > 0){
            const filteredData = searchData.filter((item)=>{
                var itemLower = item.toLowerCase();
                var queryLower = query.toLowerCase();
                return itemLower.includes(queryLower);
            });
            setFilterData(filteredData);
            // console.log(filterData);
        }
        else {
            setFilterData([]);
        }    
    }
    
    const goToCart = ()=>{
        navigation.navigate('CartScreen' as never);
    }
  return (
    <View style={styles.container}>
        <View style={styles.imgFrame}>
                <InfraMarket/>
                <TouchableOpacity onPress={goToCart} >
                <View style={styles.cart}>
                    <CartIcon/>
                    <Text style = {styles.cartText}>{len}</Text>
                </View>
                </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
            <TextInput
            style={styles.searchBar}
            placeholder="🔍  Search"
            value={searchQuery}
            onChangeText={handleSearch}/>

            <View style={{zIndex : 3 , backgroundColor: searchQuery.length === 0 ? 'transparent' : 'pink', width: 360, marginLeft: -12, maxHeight : 'auto'}}> 
               {displayList()}
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        width: 'auto',
        height: 100,
        paddingVertical: 12,
        paddingHorizontal: 16,
        gap: 10,
        shadowColor: '#E3E3E3',
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 0,
        zIndex: 3,
    },
    imgFrame:{
        width: 328,
        height: 28,
        gap : 20,
        display: 'flex',
        flexDirection: 'row',
    },
    logo:{
        width:300,
        height: 30,
        resizeMode: 'contain',
        right : 10,
    },
    searchContainer:{
        width: 350,
        height: 36,
        paddingVertical: 10,
        paddingBottom : 8,
        paddingLeft : 16,
        paddingRight : 12,
        borderRadius: 5,
    },
    searchBar:{
        width: 360,
        height: 36,
        paddingVertical: 4,
        paddingLeft : 14,
        paddingRight : 7,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#E3E3E3',
        marginLeft : -12,
        zIndex : 4, 
    },
    cart: {
        marginLeft : 160,
        display : 'flex',
        flexDirection : 'row',
    },
    cartText : {
        marginTop : 2
    }

    });
export default defaultHeader
