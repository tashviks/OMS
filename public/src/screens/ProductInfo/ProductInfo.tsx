import React from 'react'
import { View, Text, StyleSheet , ScrollView, Button } from 'react-native'
import ProductInfoHeader from './ProductInfoHeader'
import ProductInfoImageGallery from './ProductInfoImageGallery'
import ProductItemChoice from './ProductItemChoice'
import { ProductInfoStyles as styles } from './styles'
import { RouteProp } from '@react-navigation/native'
import ProductDescription from './ProductDescription'
interface ProductProps {
    ID : number;
    SKU : string;
    Name: string;
    Brand: string;
    Review: number;
    Price: number;
    Grade: string[];
    BagSize: string[];
    MinOrderQty: number;
    MaxOrderQty: number;
    InStock: number;
    Title: string;
    Image: string;
    mrp : number;
}  
interface RouteParams {
params: { product: ProductProps; };
}

const ProductInfo = ({ route }: { route: RouteParams }) => { 
  const {product} = route.params;
  return (
    <View style={styles.container}>
        <ProductInfoHeader />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <ProductInfoImageGallery product={product} />
            <ProductItemChoice 
            id={product.ID}
            sku={product.SKU} 
            name={product.Name} 
            brand={product.Brand} 
            review={product.Review} 
            price={product.Price} 
            grade={product.Grade} 
            bagSize={product.BagSize} 
            title={product.Title}
            image={product.Image}
            minOrderQty={product.MinOrderQty}
            maxOrderQty={product.MaxOrderQty} 
            inStock={product.InStock} 
            />
  
        </ScrollView>
    </View>
  )
}
export default ProductInfo