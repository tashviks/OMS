import { StyleSheet } from "react-native";
export const SearchScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backButtonCon: {
        padding: 10,
    },
    cartTextContainer: {
        padding: 10,
    },
    cartText: {
        fontSize: 20,
        fontWeight: 'bold',
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