import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Button , Image} from 'react-native';
import { decreaseQuantity , increaseQuantity , updateQuantity } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { CartItemStyles } from './styles';
import store from '../../redux/store';

const styles = CartItemStyles;

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    img : string;
  };
}
const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();


  const DecreaseQuantity = (item : any) => {
    dispatch(decreaseQuantity(item));
    dispatch(updateQuantity(-1));
  }
  const IncreaseQuantity = (item : any) =>{
    dispatch(increaseQuantity(item));
    dispatch(updateQuantity(1));
  }
  return (
    <View style={styles.itemContainer}>
        <View style = {styles.containerCard}>
            <View style={styles.imgContainer}>
                <Image source={{ uri: 'https://www.ultratechcement.com/content/experience-fragments/ultratechcement/in/ihb/header/master/_jcr_content/root/container_copy_86747432/container_637611876/image.coreimg.jpeg/1727277670106/ultratech-main-logo.jpeg' }} style={styles.img} />
            </View>
            <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>₹{item.price}</Text>
            </View>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => DecreaseQuantity(item)}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={()=> IncreaseQuantity(item)}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.itemTotal}>Total ₹{item.price * item.quantity}</Text>
    </View>
  );
};
 
export default CartItem;