import React, { useEffect } from 'react'
import { useState } from 'react';
import { View , StyleSheet, TextInput , Text, ScrollView} from 'react-native'
import InfraMarket from '../../assets/infraMarket'
import CartIcon from '../../assets/cartIcon';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import searchData from '../../assets/searchData';
import { searchAPI } from '../../apis/searchAPI';
import { useDispatch } from 'react-redux';
import store from '../../redux/store';
import { setFilterProducts } from '../../redux/action';
function defaultHeader() {
    const navigation : any = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filterData , setFilterData] = React.useState(['']);
    const dispatch = useDispatch();
    const fetchData = async () => {
            const res = await searchAPI.search(searchQuery);
            console.log(res);
            dispatch(setFilterProducts(res));
    };   
    const goToSeacrh = async () =>{
        await fetchData();
        console.log(store.getState().setFilterReducer);
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
                <TouchableOpacity key={index} onPress={()=>{setSearchQuery(item);goToSeacrh();}}>      
                    <Text key={index} style={{fontFamily : "inter" , fontSize : 16 , backgroundColor : searchQuery === '' ? 'transparent' : '#fff' , padding : 5 , color : 'grey' }}>{item}</Text>
                </TouchableOpacity>
                )
            })
        }
        return null;
    }
    const handleSearch =  (query: string) => {
        setSearchQuery(query);
        if(query.length > 0){
            const filteredData = searchData.filter((item)=>{
                var itemLower = item.toLowerCase();
                var queryLower = query.toLowerCase();
                return itemLower.includes(queryLower);
            });
            setFilterData(filteredData);
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
                    <Text style = {styles.cartText}>{'('+len+')'}</Text>
                </View>
                </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
            <TextInput
            style={styles.searchBar}
            placeholder="🔍  Search"
            value={searchQuery}
            onChangeText={handleSearch}/>
            <View style={styles.displayList}> 
                {searchQuery === null ? null : displayList()}
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
        color : 'grey',
    },
    cart: {
        marginLeft : 160,
        display : 'flex',
        flexDirection : 'row',
       
    },
    cartText : {
        marginTop : 2,
        color : 'grey',
    },
    displayList:{
        zIndex : 3, 
        width: 359, 
        marginLeft: 10, 
        borderRadius: 5,
        position: 'absolute',
        top: 50,
    }

    });
export default defaultHeader
