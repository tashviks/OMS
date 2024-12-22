import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AddedToCartStyles as styles } from './styles';
interface Product {
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
}

interface AddedToCartProps {
    products: Product[];
    onClose: () => void;
    onViewCart: () => void;
    onCheckout: () => void;
}

function AddedToCart({ products, onClose, onViewCart, onCheckout }: AddedToCartProps) {
    const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);
    const totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                <Text style={{ fontSize: 18 }}>✕</Text>
            </TouchableOpacity>
            
            <Text style={styles.headerText}>{totalItems} items added to cart</Text>

            {products.map((product, index) => (
                <View key={index} style={styles.productRow}>
                    <Image
                        source={{ uri: product.imageUrl }}
                        style={styles.productImage}
                    />
                    <View style={styles.productDetails}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productPrice}>{product.quantity} x ₹ {product.price}</Text>
                    </View>
                    <Text style={styles.totalPrice}>₹ {product.price * product.quantity}</Text>
                </View>
            ))}
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.viewCartButton} onPress={onViewCart}>
                    <Text style={styles.buttonText}>VIEW CART</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.checkoutButton} onPress={onCheckout}>
                    <Text style={styles.buttonText}>CHECKOUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}



export default AddedToCart;
