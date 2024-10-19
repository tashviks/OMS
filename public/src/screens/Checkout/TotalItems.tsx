import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { UseDispatch } from 'react-redux';
import { TotalItemsStyles as styles } from './styles';

const TotalItems = ()=>{
  const dummyItem = {
    id: 1,
    name: 'UltraTech Cement',
    price: 300,
    quantity: 14,
  };
  const [item, setItem] = useState(dummyItem);
  const updateQuantity = (id: number, newQuantity: number) => {
    setItem((prevItem) => ({
      ...prevItem,
      quantity: newQuantity,
    }));
  };
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
          <Text style={{color : 'black'}}>{item.quantity} Items</Text>
          <Text style={{fontSize : 10}}>Show details</Text>
        </View>
        <Text style={styles.itemTotal}>₹{item.price * item.quantity}</Text>
      </View>
    </View>
  );
}


export default TotalItems