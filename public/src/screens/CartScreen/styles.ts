import { LayoutAnimation, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const CartItemStyles = StyleSheet.create({
  itemContainer: {
    borderColor: '#ddd',
    paddingBottom: 10,
    marginBottom: 10,
    gap: 20,
    marginTop: 10,
  },
  containerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemPrice: {
    fontSize: 14,
    color: 'black',
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
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 10,
    color: '#F15927',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
    color: 'black',
    borderColor: '#ddd',
    borderWidth: 1,
    width: width * 0.1,
    height: width * 0.075,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '400',
  },
  itemTotal: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: -5,
    color: 'black',
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
    color: 'black',
  },
  img: {
    width: width * 0.125,
    height: width * 0.125,
    borderRadius: 10,
  },
  itemDetails: {
    display: 'flex',
    flexDirection: 'row',
    gap: width * 0.5,
  },
  imgContainer: {},
});

export const CartHeaderStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    paddingVertical: 0,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 0.8,
    borderColor: '#ddd',
  },
  backButtonCon: {
    width: 100,
    height: 100,
    marginLeft: -10,
  },
  cartTextContainer: {
    marginLeft: -120,
  },
  cartText: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: 60,
    color: 'black',
  },
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
    color: 'black',
  },
  itemPrice: {
    fontSize: 14,
    color: 'black',
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
    color: 'black',
  },
  itemTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  summary: {
    marginTop: 20,
    gap: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
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
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    borderRadius: 5,
    marginTop: 20,
  },
  subTotal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
  },
  shipping: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    borderStyle: 'dashed',
    paddingBottom: 20,
  },
  checkOut: {
    backgroundColor: '#f15927',
    alignItems: 'center',
    marginRight: 10,
  },
  checkOutContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.15,
    backgroundColor: 'white',
    borderTopColor: '#ddd',
    borderTopWidth: 0.8,
    width: '112%',
    height: 100,
    padding: 10,
    marginLeft: -20,
  },
  checkOutTextBottom: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    marginLeft: 10,
  },
  FlatListStyle: {
    height: 300,
    width: '100%',
    padding: 5,
    marginLeft: -10,
  },
  LottieStyle: {
    marginTop: 100,
    marginLeft: 80,
  },
  subTotalText: {
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Inter',
  },
});
