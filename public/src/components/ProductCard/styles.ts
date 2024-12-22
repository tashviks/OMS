import { StyleSheet, Dimensions, PixelRatio } from "react-native";
const { width, height } = Dimensions.get('window');
const scale = width / 400;
function normalize(size: number) {
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
}
export const styler = StyleSheet.create({
  container: {
    flexBasis: '48%',
    marginBottom: normalize(20),
    backgroundColor: '#fff',
    borderRadius: normalize(8),
    padding: normalize(10),
    elevation: 1,
  },
  logo: {
    height: normalize(168),
    width: normalize(168),
    marginTop: 0,
    objectFit: 'contain',
  },
  imgFrame: {
    alignItems: 'center',
  },
  txtFrame: {
    marginTop: normalize(10),
  },
  title: {
    color: '#000',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  amtContainer: {
    fontSize: normalize(16),
    fontWeight: '500',
    color: '#000',
    marginTop: normalize(5),
  },
  RupeeAmtContainer: {
    fontSize: normalize(16),
    marginTop: normalize(5),
    color: 'grey',
    fontWeight: '500',
  },
  priceContainer: {
    flexDirection: 'row',
    gap: normalize(2),
  },
  mrp: {
    color: 'grey',
    marginTop: normalize(7),
    textDecorationLine: 'line-through',
  },
  saleTag: {
    marginTop: normalize(7),
    marginLeft: normalize(5),
  }
});