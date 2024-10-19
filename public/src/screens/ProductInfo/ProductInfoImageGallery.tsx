import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import LeftArrow from '../../assets/leftArrow';


const ProductInfoImageGallery = () => {
  const images = [
        { id: 1, src: require('../../assets/cement.jpeg') },
        { id: 2, src: require('../../assets/image.png') },
        { id: 3, src: require('../../assets/free-images.jpg') },
    ];
  const [selectedImage, setSelectedImage] = useState(images[0].src);
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
    <View style = {styles.imgContainer}>
      <Image source={selectedImage} style={styles.centralImage} />
    </View>

        <View>
            <View style={styles.scrollContainer}>
                <TouchableOpacity style={styles.leftArrow} onPress={ChangeImageLeft}>
                <LeftArrow />
                </TouchableOpacity>

                <ScrollView horizontal showsHorizontalScrollIndicator={true} contentContainerStyle = {styles.scrollView} >
                {images.map((image) => (
                <TouchableOpacity key={image.id} onPress={() => setSelectedImage(image.src)}>
                    <Image source={image.src} style={styles.thumbnail} />
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imgContainer: {
    paddingTop: 50,
    width : 360,
    height : 410,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centralImage: {
    width : 360,
    height : 360,
  },
  scrollContainer: {
    marginTop : 140,
    gap : 50,
    flexDirection: 'row',
    width : 350,
  },
  scrollView :{
    gap : 25
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  rightArrow: {
    transform: [{ rotate: '180deg' }],
  },
  leftArrow:{
  }
});

export default ProductInfoImageGallery;