import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const HomeScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'relative',
    height: '100%',
  },
  dHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  scrollContainer: {
    justifyContent: 'center',
    padding: 10,
    zIndex: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollView: {
    flexGrow: 1,
  },
  footerContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    width: width,
    bottom: 0,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sort: {
    marginLeft: width * 0.5,
  },
  cucontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  sortButton: {
    borderRightColor: "#E0E0E0",
    borderRightWidth: 1,
    marginLeft: 0,
  },
  loading: {
    marginTop: height * 0.5,
    padding: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    color: 'black',
    marginLeft: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  adjustedView: {
    transform: [{ translateY: 0 }],
  },
});

export default HomeScreenStyles;