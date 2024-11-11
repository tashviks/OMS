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
    color: 'grey',
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: 'grey',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'grey',
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    color: 'grey',
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    color: 'grey',
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
    color: 'grey',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    color: 'grey',
  },
  viewCartButton: {
    backgroundColor: 'transparent',
    borderColor: '#FF7F50',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'grey',
  },
  checkoutButton: {
    backgroundColor: '#FF7F50',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'grey',
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
    color: 'grey',
  },
  scrollContainer: {
    color: 'grey',
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
    color: 'grey',
  },
   backButtonCon:{
    width: 100,
    height: 100,
    marginLeft: -10,
    color: 'grey',
   },
   cartIconCon:{
  marginTop : 10,
  marginLeft : 220,
  display : 'flex',
  flexDirection : 'row',
  color: 'grey',
   }
});

export const ProductInfoImageGalleryStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    color: 'grey',
  },
  imgContainer: {
    paddingTop: 50,
    width : 360,
    height : 410,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
  },
  centralImage: {
    width : 360,
    height : 360,
    color: 'grey',
  },
  scrollContainer: {
    marginTop : 20,
    gap : 50,
    flexDirection: 'row',
    width : 350,
    color: 'grey',
  },
  scrollView :{
    gap : 25,
    color: 'grey',
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginHorizontal: 5,
    borderRadius: 10,
    color: 'grey',
  },
  rightArrow: {
    transform: [{ rotate: '180deg' }],
    color: 'grey',
  },
  leftArrow:{
    color: 'grey',
  }
  });

export const ProductItemChoiceStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height : 1000,
    color: 'grey',
  },
  skuAndBrandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    color: 'grey',
  },
  nameContainer: {
    marginTop: 20,
    marginLeft : 10,
    color: 'grey',
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
    color: 'grey',
  },
  priceContainer: {
    flexDirection: 'row',
    gap : 5,
    marginBottom: 20,
    marginLeft : 10,
    color: 'grey',
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
    color: 'grey',
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
   color: 'grey',
  },
  gradeOptionsContainer : {
    flexDirection: 'row',
    gap : 10,
    marginLeft : 50,
    width : 100,
    maxWidth : 100,
    height : 38,
    color: 'grey',
  },
  gradeOptions :{
    backgroundColor : '#f6f6f6',
    padding : 10,
    width : 80,
    height : 38,
    justifyContent : 'center',
    alignItems : 'center',
    color: 'grey',
  },
  bagSizeContainer :{
    flexDirection: 'row',
    gap : 10,
    color: 'grey',
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
    color: 'grey',
  },
  qtySelector: {
    marginBottom : 20,
    marginRight : 130,
    justifyContent : 'center',
    alignItems : 'center',
    display : 'flex',
    flexDirection : 'row',
    color: 'grey',
  },
  addToCart: {
    marginTop : 10,
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    backgroundColor : '#f15927',
    width : 274,
    height : 42,
    color: 'grey',
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
    color: 'grey',
  },
  brand:{
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 15.6,
    textAlign: 'left',
    paddingTop: 15,
    marginRight : 20,
    color: 'grey',
  },
  qtyContainer: {
    flexDirection: 'row',
    gap : 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 10,
    marginLeft :20,
    color: 'grey',
  },
  qtyButton: {
    borderRadius: 5,
    borderColor : 'black',
    marginTop : 5,
    fontWeight : 'bold',
    color : '#f15927'
  },
  qtyChangeButton: {
    backgroundColor : '#fef2ee',
    width : 44,
    height : 36,
    alignItems: 'center',
    color: 'grey',
  },
  qtyValue:{
    borderColor : "#f15927",
    borderWidth : 1,
    borderRadius : 10,
    width :58,
    height : 36,
    textAlign : 'center',
    color: 'grey',
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
    paddingTop : 2,
    fontFamily : 'Inter',
    fontSize : 14,
    fontWeight : '400',
    color: 'grey',
  },
  
  });  

export const ProductDescStyles = StyleSheet.create({
  DescText : {
  fontSize : 16,
  fontWeight : 'bold',
  color : '#686868',
  padding : 10,
  marginTop: 0,
  marginBottom : "auto",
  marginRight : -10
  },
  DesContainer : {
  display : 'flex',
  flexDirection : 'row',
  gap : 60,
  padding : 10,
  marginTop : -50,
  borderBottomWidth : 0.5,
  borderBottomColor : '#686868',
  color: 'grey',
  },
  description : {
  padding : 10,
  marginLeft : 10,
  marginRight : 10,
  fontSize : 12,
  color : 'black',
  textAlign : 'justify',
  }
});