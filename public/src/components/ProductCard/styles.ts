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
    },
    imgFrame: {
      alignItems: 'center',
    },
    txtFrame: {
      marginTop: 10,
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    amtContainer: {
      fontSize: 16,
      color: 'green',
      marginTop: 5,
    },
    priceContainer:{
      flexDirection : 'row',
      gap : 2
    },
    mrp:{
      marginTop : 7,
      textDecorationLine: 'line-through',
    },
    saleTag : {
      marginTop : 7,
      marginLeft: 5
    }
  
    
  });
  