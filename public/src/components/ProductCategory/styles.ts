import { StyleSheet } from 'react-native';
export const styler = StyleSheet.create({
    container : {
        width : '100%',
        height : 130,
        display : 'flex',
        flexDirection : 'column',
    },
    category : {
        width : '100%',
        height : 100,
        display : 'flex',
        flexDirection : 'row',
        gap : 20,
        padding : 5,
        zIndex : 3,
        borderBottomWidth : 0.5,
        borderColor : 'grey',
    },
    iconImage : {   
        width : 100,
        height : 100,
        resizeMode : 'contain',
    },
    cucontainer: {
      backgroundColor: 'white',
      marginTop : 830,
      paddingLeft : 50,
      paddingRight : 50,
      width : 500,
      height : 100,
      borderColor : 'black',
      flexDirection: 'row',
      gap: 200,
      zIndex:1,
    },
    bottomText : {
        fontSize :18,
        fontWeight : 'semibold',
        fontFamily : 'Inter',
        color : 'black',
        marginLeft : 5,
        marginTop : -20
    },
});
