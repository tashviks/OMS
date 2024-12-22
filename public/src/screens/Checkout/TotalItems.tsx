import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TotalItemsStyles as styles } from './styles';
import { useSelector } from 'react-redux';
import store from '../../redux/store';
import { useNavigation } from '@react-navigation/native';

const TotalItems = ()=>{
  const totalAmount = useSelector((state: any) => state.setTotalAmountReducer);
  console.log(store.getState().setTotalAmountReducer);
  const navigation = useNavigation();
  const dummyItem = useSelector((state: any) => state.reducer);
  // console.log(dummyItem);  
  var price = 0;
  var qty = 0;
  for(let i = 0 ; i < dummyItem.length ; i++){
    qty += dummyItem[i].quantity;
    price += dummyItem[i].price * dummyItem[i].quantity;
  }
  const showDetails = () => {
    Alert.alert(
      "Navigate to Cart ?",
      "Current Transaction will be Cancelled",
      [
      {
        text: "Stay",
        onPress: () => console.log("Stay Pressed"),
        style: "cancel"
      },
      {
        text: "GO BACK",
        onPress: () => navigation.navigate('CartScreen' as never)
      }
      ],
      { cancelable: false }
    );
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
          <TouchableOpacity onPress={showDetails}>
          <Text style={{fontSize : 10 , color : 'black'}}>Show details</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.itemTotal}>₹{totalAmount}</Text>
      </View>
    </View>
  );
}


export default TotalItems