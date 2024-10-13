import React from 'react'
import { View , StyleSheet , Image , TextInput} from 'react-native'
import InfraMarket from '../assets/infraMarket'

function defaultHeader() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const handleSearch = (query: string) => setSearchQuery(query);

  return (
    <View style={styles.container}>
        <View style={styles.imgFrame}>
                {/* <Image style={styles.logo} source={require('../assets/image.png')} /> */}
                <InfraMarket/>
                <View style={styles.cart}>
                 </View>
        </View>
        <View style={styles.searchContainer}>
            <TextInput
            style={styles.searchBar}
            placeholder="Search"
            value={searchQuery}
            onChangeText={handleSearch}/>
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
        marginLeft : -12
    },
    cart: {
        
    },
    });
export default defaultHeader
