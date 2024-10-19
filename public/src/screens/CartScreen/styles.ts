import { StyleSheet } from "react-native";

export const CartItemStyles = StyleSheet.create({
    itemContainer: {
      borderBottomWidth: 1,
      borderColor: '#ddd',
      paddingBottom: 10,
      marginBottom: 10,
    },
    containerCard : {
      flexDirection : 'row',
      alignItems : 'center',
      gap : 10
    },
    itemName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    itemPrice: {
      fontSize: 14,
      color: '#666',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    button: {
      fontSize: 20,
      paddingLeft: 15,
      paddingTop: 5,
      backgroundColor: '#eee',
      width : 40,
      height : 40,
      borderRadius : 10,
      color : '#F15927',
  
    },
    quantity: {
      marginHorizontal: 10,
      fontSize: 18,
    },
    itemTotal: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
    },
    couponContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    summary: {
      marginTop: 20,
    },
    total: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
    img : {
      width : 50,
      height : 50,
      borderRadius : 10,
    },
    imgContainer:{
      
    }
});   

export const CartHeaderStyles = StyleSheet.create({
    container:{
        width: 'auto',
        height: 50,
        paddingVertical: 0,
        paddingHorizontal: 16,
        display : 'flex',
        flexDirection : 'row',
        marginTop : 10,
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

export const CartBodyStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    fontSize: 20,
    padding: 10,
    backgroundColor: '#eee',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  itemTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  summary: {
    marginTop: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  couponContainerInner: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    width: '80%',
  },
    couponAndremove: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    subTotal : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    shipping : {
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'space-between',
    },
    discount : {
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'space-between',
    },
    checkOut : {
    }
});
  