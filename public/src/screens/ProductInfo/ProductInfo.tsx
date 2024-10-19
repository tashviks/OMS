import React from 'react'
import { View, Text, StyleSheet , ScrollView } from 'react-native'
import ProductInfoHeader from './ProductInfoHeader'
import ProductInfoImageGallery from './ProductInfoImageGallery'
import ProductItemChoice from './ProductItemChoice'
interface Grade {
    grade: string;
}
interface BagSize {
    size: number;
}
interface ProductProps {
    id : number;
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
    title: string;
    image: string;
}  
const product : ProductProps = {
      id : 1,
      sku: '12345',
      name: 'ACC Cement Bag',
      brand: 'ACC',
      review: 4.5,
      price: 99.99,
      grade: { grade: 'A' },
      bagSize: { size: 10 },
      minOrderQty: 1,
      maxOrderQty: 5,
      inStock: 20,
      title: 'Sample Product Title',
      image: 'https://via.placeholder.com/150'    
  };

const ProductInfo = () => { 
  return (
    <View style={styles.container}>
        <ProductInfoHeader />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <ProductInfoImageGallery />
            <ProductItemChoice 
                id = {product.id}
                sku={product.sku} 
                name={product.name} 
                brand={product.brand} 
                review={product.review} 
                price={product.price} 
                grade={product.grade} 
                bagSize={product.bagSize} 
                title={product.title}
                image={product.image}
                minOrderQty={product.minOrderQty}
                maxOrderQty={product.maxOrderQty} 
                inStock={product.inStock} />
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    scrollContainer: {
        // Add any styles you need here
    }
});
export default ProductInfo