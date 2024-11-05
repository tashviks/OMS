import { StyleSheet } from "react-native";
export const AddedToCartStyles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        margin: 10,
    },
    closeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    productRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    productImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    productDetails: {
        flex: 1,
        marginLeft: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: '500',
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    viewCartButton: {
        backgroundColor: 'transparent',
        borderColor: '#FF7F50',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    checkoutButton: {
        backgroundColor: '#FF7F50',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#FF7F50',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export const ProductInfoStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    scrollContainer: {
    }
});

export const ProductInfoHeaderStyles = StyleSheet.create({
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
   cartIconCon:{
    marginTop : 10,
    marginLeft : 220,
    display : 'flex',
    flexDirection : 'row',
   }
});

export const ProductInfoImageGalleryStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    imgContainer: {
      paddingTop: 50,
      width : 360,
      height : 410,
      justifyContent: 'center',
      alignItems: 'center',
    },
    centralImage: {
      width : 360,
      height : 360,
    },
    scrollContainer: {
      marginTop : 20,
      gap : 50,
      flexDirection: 'row',
      width : 350,
    },
    scrollView :{
      gap : 25
    },
    thumbnail: {
      width: 80,
      height: 80,
      marginHorizontal: 5,
      borderRadius: 10,
    },
    rightArrow: {
      transform: [{ rotate: '180deg' }],
    },
    leftArrow:{
    }
  });

export const ProductItemChoiceStyles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height : '104%'
    },
    skuAndBrandContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 50,
    },
    nameContainer: {
      marginTop: 20,
      marginLeft : 10,
    },
    name : {
      fontFamily: 'Inter',
      fontSize: 20,
      fontWeight: '500',
      lineHeight: 26,
      letterSpacing: -0.1,
      textAlign: 'left',
      color: '#000000',
    },
    reviewContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 30,
      marginTop : 8,
      marginLeft : 10,
    },
    priceContainer: {
      flexDirection: 'row',
      gap : 5,
      marginBottom: 20,
      marginLeft : 10,
    },
    salePrice : {
      fontFamily: 'Inter',
      fontSize: 26,
      fontWeight: '100',
      lineHeight: 29,
      letterSpacing: -0.1,
      textAlign: 'left',
      color: '#000000',
    },
    mrp : {
      fontFamily: 'Inter',
      fontSize: 19,
      fontWeight: '100',
      lineHeight: 26,
      letterSpacing: -0.1,
      textAlign: 'left',
      color: "#8D8D8D",
      textDecorationLine: 'line-through',
    },
    gradeAndBagSizeSelector: {
      flexDirection: 'column',
      gap : 30 ,
      justifyContent: 'space-between',
      marginBottom: 20,
      display : 'flex',
      borderBottomWidth : 0.5,
      paddingBottom : 20,
    },
    gradeHeading: {
      fontFamily: 'Inter',
      fontSize: 17,
      fontWeight: '400',
      textAlign: 'left',
      color: '#000000',
      marginLeft : 20
    },
    gradeContainer: {
     flexDirection: 'row',
     gap : 10,
    },
    gradeOptionsContainer : {
      flexDirection: 'row',
      gap : 10,
      marginLeft : 50,
      width : 100,
      maxWidth : 100,
      
      height : 38
    },
    gradeOptions :{
      backgroundColor : '#f6f6f6',
      padding : 10,
      width : 80,
      height : 38,
      justifyContent : 'center',
      alignItems : 'center'
    },
    bagSizeContainer :{
      flexDirection: 'row',
      gap : 10,
    },
    additionalInfo: {
      marginBottom: 20,
      display : 'flex',
      flexDirection : 'row',
      gap : 50,
      alignItems : 'center',
      justifyContent : 'center',
      borderBottomColor : 'black',
      borderBottomWidth : 0.5,
      paddingBottom : 10,
    },
    qtySelector: {
      marginBottom : 20,
      justifyContent : 'center',
      gap :30,
      alignItems : 'center',
      display : 'flex',
      flexDirection : 'row'
    },
    addToCart: {
      marginTop : 10,
      marginBottom: 100,
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
      marginLeft: 30,
      backgroundColor : '#f15927',
      width : 274,
      height : 42,
      

    },
    addToCartText: {
      fontFamily: 'Inter',
      fontSize: 20,
      fontWeight: '500',
      lineHeight: 26,
      textAlign: 'center',
      color: '#fff',
      

    },
    sku : {
      fontFamily: 'Inter',
      fontSize: 17,
      fontWeight: '400',
      lineHeight: 15.6,
      textAlign: 'left',
      paddingTop: 15,
      marginLeft: 10,
    },
    brand:{
      fontFamily: 'Inter',
      fontSize: 17,
      fontWeight: '400',
      lineHeight: 15.6,
      textAlign: 'left',
      paddingTop: 15,
      marginRight : 20,
    },
    qtyContainer: {
      flexDirection: 'row',
      gap : 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop : 10,
      marginLeft :70
    },
    qtyButton: {
      borderRadius: 5,
      borderColor : 'black',
      marginTop : 5,
      fontWeight : 'bold',
      color : '#f15927'
    },
    qtyChangeButton: {
      borderColor : '#f15927',
      borderWidth : 1,
      width : 44,
      height : 36,
      alignItems: 'center',
    },
    qtyValue:{
      borderColor : "#f15927",
      borderWidth : 1,
      borderRadius : 10,
      width :58,
      height : 36,
      textAlign : 'center',
    },
    minOQ: {
      fontFamily : 'Inter',
      fontWeight : 'bold',
      color : 'black'
    },
    maxOQ:{
        fontFamily : 'Inter',
        fontWeight : 'bold',
        color : 'black'
    },
    inStock:{
      fontFamily : 'Inter',
      fontWeight : 'bold',
      color : 'black'
    },
    qtyText:{
      marginTop : 10,
      paddingTop : 2
    },
    DescText : {
      fontSize : 20,
      fontWeight : 'bold',
      color : 'black',
      padding : 10,
      borderBottomColor : 'black',
      borderBottomWidth : 0.5,
      marginTop: 20,
      marginBottom : "auto",
    },
    DesContainer : {
      display : 'flex',
      flexDirection : 'row',
      gap : 40,
    }
  });  

export const ProductDescStyles = StyleSheet.create({
 
});