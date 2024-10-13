import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native'

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



function ProductInfo() {
  return (
    <View style = {styles.container}>
        <ProductInfoHeader />
        <View>
            <ScrollView contentContainerStyle={styles.scrollContainer} >
                <ProductInfoImageGallery />
            </ScrollView>
        </View>
        <ProductItemChoice/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor : 'white',
        height : '200%',
    },
    scrollContainer:{
    }
});
export default ProductInfo