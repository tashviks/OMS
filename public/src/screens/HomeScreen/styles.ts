import { StyleSheet } from "react-native";
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
        marginRight : 0,
        borderTopWidth : 1,
        borderTopColor : "#E0E0E0"
      },
      sortButton: {
        borderRightColor : "#E0E0E0",
        borderRightWidth : 1,
      },
      loading : {
      }
      });
      export default HomeScreenStyles;