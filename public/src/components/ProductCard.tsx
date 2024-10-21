import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import SaleTag from '../assets/saleTag';

interface ProductCardProps {
  title: string;
  amount: number;
  image: string;
  mrp : number

}

const ProductCard: React.FC<ProductCardProps> = ({title , amount , image , mrp}) => {
  // console.warn(image;
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

const styles = StyleSheet.create({
  container: {
    flexBasis: '48%', 
    marginBottom: 20, 
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 1,
  },
  logo: {
    height: 168,
    width: 168,
    marginTop: 0,
  },
  imgFrame: {
    alignItems: 'center',
  },
  txtFrame: {
    marginTop: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  amtContainer: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  priceContainer:{
    flexDirection : 'row',
    gap : 2
  },
  mrp:{
    marginTop : 7,
    textDecorationLine: 'line-through',
  },
  saleTag : {
    marginTop : 7,
    marginLeft: 5
  }

  
});

export default ProductCard;
