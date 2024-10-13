import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface Grade {
  grade: string;
}
interface BagSize {
  size: number;
}

interface ProductProps {
  sku: string;
  name: string;
  brand: string;
  review: number;
  price: number;
  grade: Grade;
  bagSize: BagSize;
  minOrderQty: number;
  maxOrderQty: number;
  inStock: number;
}

const ProductItemChoice: React.FC<ProductProps> = ({
  sku,
  name,
  brand,
  review,
  price,
  grade,
  bagSize,
  minOrderQty,
  maxOrderQty,
  inStock,
}) => {
  return (
      <View style={styles.container}>
        <View style={styles.skuAndBrandContainer}>
          <Text>SKU ID: {sku}</Text>
          <Text>Brand: {brand}</Text>
        </View>

        <View style={styles.reviewContainer}>
          <Text>Review: {review}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text>Price: {price}</Text>
        </View>

        <View style={styles.gradeAndBagSizeSelector}>
          <Text>Grade: {"Grade"}</Text>
          <Text>Bag Size: {"bagSize.size"}</Text>
        </View>

        <View style={styles.additionalInfo}>
          <Text>Min Order Qty: {minOrderQty}</Text>
          <Text>Max Order Qty: {maxOrderQty}</Text>
          <Text>In Stock: {inStock}</Text>
        </View>

        <View style={styles.qtySelector}>
          <Text>Quantity Selector</Text>
        </View>

        <View style={styles.addToCart}>
          <Text>Add to Cart</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    height : '103%'
  },
  skuAndBrandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 50,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gradeAndBagSizeSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  additionalInfo: {
    marginBottom: 20,
  },
  qtySelector: {
    marginBottom: 20,
  },
  addToCart: {
    marginBottom: 20,
  },
});

export default ProductItemChoice;
