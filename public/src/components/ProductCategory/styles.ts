import { StyleSheet } from 'react-native';
export const styler = StyleSheet.create({
    container : {
        width : '100%',
        height : 100,
        display : 'flex',
        flexDirection : 'row',
        gap : 20,
        padding : 5,
        zIndex : 3,
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
});
