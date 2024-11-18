import { StyleSheet } from "react-native";
export const styler = StyleSheet.create({
    container: {
      flexBasis: '48%', 
      marginBottom: 20, 
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 10,
      elevation: 1,
    },
    logo: {
      height: 168,
      width: 168,
      marginTop: 0,
      objectFit : 'contain',
    },
    imgFrame: {
      alignItems: 'center',
    },
    txtFrame: {
      marginTop: 10,
    },
    title: {
      color: '#000',
      fontSize: 14,
      fontWeight: 'bold',
    },
    amtContainer: {
      fontSize: 16,
      fontWeight: '500',
      color: '#000',
      marginTop: 5,
    }, 
    RupeeAmtContainer: {
      fontSize: 16,
      marginTop: 5,
      color : 'grey',
      fontWeight: '500',
    },
    priceContainer:{
      flexDirection : 'row',
      gap : 2
    },
    mrp:{
      color : 'grey',
      marginTop : 7,
      textDecorationLine: 'line-through',
    },
    saleTag : {
      marginTop : 7,
      marginLeft: 5
    }
  
    
  });
  