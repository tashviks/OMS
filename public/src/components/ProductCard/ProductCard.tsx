import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import SaleTag from '../../assets/saleTag';
import {styler as styles} from './styles';
interface ProductCardProps {
  title: string;
  amount: number;
  image: string;
  mrp : number
}
const ProductCard: React.FC<ProductCardProps> = ({title , amount , image , mrp}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgFrame}>
        <Image style={styles.logo} source={{ uri: image }} />
      </View>
      <View style={styles.txtFrame}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.priceContainer}>
        <Text style={styles.amtContainer}>{`₹ ${amount} `}</Text>
        <Text style={styles.mrp}>{`₹${mrp}`}</Text>
        <View style={styles.saleTag}>
          <SaleTag/>
        </View>
        </View>
      </View>
    </View>
  );
};
export default ProductCard;
