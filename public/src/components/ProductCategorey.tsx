import { icon } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import {View , StyleSheet , Image , Text} from 'react-native'
import { Svg , Rect , Path} from 'react-native-svg';

import Cement from '../assets/cement';
import Wailing from '../assets/wailing';
import Construction from '../assets/construction';
import Steel from '../assets/steel';


function ProductCategorey() {
  return (
    <View style={styles.container}>
      <Cement/>
      <Wailing/>
      <Construction/>
      <Steel/>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 100,
        display : 'flex',
        flexDirection : 'row',
        gap : 20,
        padding : 5
        
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

export default ProductCategorey
