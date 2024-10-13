import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

interface ProductCardProps {
    title: string;
    amount: number;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({title , amount , image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgFrame}>
        <Image style={styles.logo} source={require('../assets/free-images.jpg')} />
      </View>
      <View style={styles.txtFrame}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amtContainer}>{`₹ ${amount}`}</Text>
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
    elevation: 3,
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


  
});

export default ProductCard;
