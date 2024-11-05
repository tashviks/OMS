import { StyleSheet } from "react-native";
export const CheckoutHeaderStyles = StyleSheet.create({
    container:{
        width: 'auto',
        height: 50,
        paddingVertical: 0,
        paddingHorizontal: 16,
        display : 'flex',
        flexDirection : 'row',
        marginTop : 10,
        borderBottomColor : 'black',
        borderBottomWidth : 0.2
    },
   backButtonCon:{
        width: 100,
        height: 100,
        marginLeft: -10,
   },
   cartTextContainer:{
    marginLeft : -120
   },
    cartText:{
        fontSize: 20,
        marginTop :5,
        marginLeft : 60,
        color : 'black'
    }
});

export const TotalItemsStyles = StyleSheet.create({
    itemContainer: {
      marginTop : 20,
      borderWidth: 1,
      borderColor: '#ddd',
      paddingBottom: 10,
      marginBottom: 10,
      paddingLeft : 20,
      paddingVertical : 5,
      maxWidth : 300,
      marginLeft : 50,
      borderRadius : 5
    },
    containerCard : {
      flexDirection : 'row',
      alignItems : 'center',
      gap : 10
    },
    itemTotal:{
      marginLeft : 90,
      fontSize : 20,
      color : 'black',
    },
    itemPrice: {
      fontSize: 14,
      color: '#666',
    },
    img : {
      width : 50,
      height : 50,
      borderRadius : 10,
    },
    imgContainer:{
      
    }
      
  });

export const CheckOutStyles = StyleSheet.create({
  addressHeadingContainer: {
    flexDirection: 'row',
    gap : 5
  },
  addressTypeBlob: {
    width: 25,
    height: 25,
    backgroundColor : "#f15927",
    color : 'white',
    borderRadius : 50,
    textAlign : 'center',
    paddingBottom : 3,
    marginTop : 5,
    padding : 2 ,
  },
  addressType: {
    fontSize: 20,
    marginLeft : 10,
    marginTop : 5,
    color : 'black',
    fontWeight : '600',
  },
  addressContainer: {
    gap : 10,
    marginLeft : 10,
    marginTop : 10,
  },
  thankYouContainer: {
    gap : 10,
    marginLeft : 10,
    marginTop : 10,
    justifyContent : 'center',
    alignItems : 'center',
  },
  thankYouTxt: {
    fontSize : 20,
    color : 'black',
    fontWeight : '600',
  },
  orderIDTxt: {
    fontSize : 14,
    color : 'black',
    fontWeight : '500',
  },

});