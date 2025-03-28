import React, { useRef, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Animated} from 'react-native';
import LeftArrow from '../../assets/leftArrow';
import { ProductInfoImageGalleryStyles as styles } from './styles';
import OutOfStock from '../CategoreyWiseProducts/OutOfStock';

const ProductInfoImageGallery = (product : any) => {
  // Fetch the images from database SELECT IMAGES FROM 'IMAGE TABLLE' WHERE PRODUCT_ID = product.id
  const images = [
        { id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFEuHS3BhfpRBf3PVQFuBDAjPqGJY2wkKzg&s' },
        { id: 2, src: 'https://5.imimg.com/data5/UV/PU/XW/SELLER-68311677/dalmia-cement.jpg' },
        { id: 3, src: 'https://5.imimg.com/data5/SELLER/Default/2021/1/GW/AM/FR/8514149/bangur-cement-ppc-500x500.jpeg'},
    ];

  const [selectedImage, setSelectedImage] = useState(images[0].src);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const ChangeImageLeft = () => {
    const currentIndex = images.findIndex((image) => image.src === selectedImage);
    const nextIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[nextIndex].src);
  }
  const ChangeImageRight = () => {
    const currentIndex = images.findIndex((image) => image.src === selectedImage);
    const nextIndex = currentIndex === images.length -1 ? 0 : currentIndex + 1;
    setSelectedImage(images[nextIndex].src);
  }
  return (
    <View style={styles.container}>
    <View style={styles.imgContainer}>
      <Animated.Image source={{ uri: selectedImage }} style={[styles.centralImage, { opacity: fadeAnim }]} />
    </View>

        <View>
            <View style={styles.scrollContainer}>
                <TouchableOpacity onPress={ChangeImageLeft}>
                <View style={styles.leftArrow}>
                  <LeftArrow />
                </View>
                </TouchableOpacity>
                <ScrollView horizontal showsHorizontalScrollIndicator={true} contentContainerStyle = {styles.scrollView} >
                {images.map((image) => (
                <TouchableOpacity key={image.id} onPress={() => setSelectedImage(image.src)}>
                    <Image source={{uri : image.src}} style={styles.thumbnail} />
                </TouchableOpacity>
                ))}
                </ScrollView>
                <TouchableOpacity onPress={ChangeImageRight}>
                <View style={styles.rightArrow}>
                <LeftArrow />
                </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default ProductInfoImageGallery;