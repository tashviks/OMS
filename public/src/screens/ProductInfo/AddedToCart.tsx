import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

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

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        margin: 10,
    },
    closeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    productRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    productImage: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    productDetails: {
        flex: 1,
        marginLeft: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: '500',
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    viewCartButton: {
        backgroundColor: 'transparent',
        borderColor: '#FF7F50',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    checkoutButton: {
        backgroundColor: '#FF7F50',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#FF7F50',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default AddedToCart;
