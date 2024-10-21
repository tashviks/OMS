import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { UseDispatch } from 'react-redux';
import { TotalItemsStyles as styles } from './styles';
import { useSelector } from 'react-redux';

const TotalItems = ()=>{
  const dummyItem = useSelector((state: any) => state.reducer);
  // console.log(dummyItem);  
  var price = 0;
  var qty = 0;
  for(let i = 0 ; i < dummyItem.length ; i++){
    qty += dummyItem[i].quantity;
    price += dummyItem[i].price * dummyItem[i].quantity;
  }
  return (
    <View style={styles.itemContainer}>
      <View style={styles.containerCard}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: 'https://www.ultratechcement.com/content/experience-fragments/ultratechcement/in/ihb/header/master/_jcr_content/root/container_copy_86747432/container_637611876/image.coreimg.jpeg/1727277670106/ultratech-main-logo.jpeg',
            }}
            style={styles.img}
          />
        </View>
        <View >
          <Text style={{color : 'black'}}>{qty} Items</Text>
          <Text style={{fontSize : 10}}>Show details</Text>
        </View>
        <Text style={styles.itemTotal}>₹{price}</Text>
      </View>
    </View>
  );
}


export default TotalItems