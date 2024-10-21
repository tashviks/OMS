import { StyleSheet } from "react-native";
export const CWiseStyles = StyleSheet.create({
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
        marginBottom: 20, 
      },
      scrollView: {
        flexGrow : 1,
      },
      footerContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:1,
      },
      productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'space-between',
      },
      sort : {
        marginLeft : 200
      },
      cucontainer: {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 0,
        marginRight : 13,
      },
      sortButton: {
        tintColor: 'black',
        marginLeft : 200
      },
      
      
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

export const OutOfStockStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
  },
  soldOutImage:{
    width: 300,
    height: 300,
  }
});