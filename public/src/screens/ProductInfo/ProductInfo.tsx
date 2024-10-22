import React from 'react'
import { View, Text, StyleSheet , ScrollView, Button } from 'react-native'
import ProductInfoHeader from './ProductInfoHeader'
import ProductInfoImageGallery from './ProductInfoImageGallery'
import ProductItemChoice from './ProductItemChoice'
import { ProductInfoStyles as styles } from './styles'
import { RouteProp } from '@react-navigation/native'
import ProductDescription from './ProductDescription'
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
interface RouteParams {
params: { product: ProductProps; };
}

const ProductInfo = ({ route }: { route: RouteParams }) => { 
    const {product} = route.params;
    // console.warn(product.name);
  return (
    <View style={styles.container}>
        <ProductInfoHeader />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <ProductInfoImageGallery product={product} />
            <ProductItemChoice 
            id={product.id}
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
            <Text style={styles.description}>Description</Text>
            <ProductDescription/>
        </ScrollView>
    </View>
  )
}
export default ProductInfo