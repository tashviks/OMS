import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity, TextInput, Alert, Modal, Image } from 'react-native';
import { addToCart, fetchAddress, setAddress } from '../../redux/action';
import { useDispatch } from 'react-redux';
import Review from '../../assets/review';
import { ProductItemChoiceStyles as styles } from './styles';
import ProductDescription from './ProductDescription';
import { updateQuantity } from '../../redux/action';
import HeartIcon from '../../assets/heart';
import { useNavigation } from '@react-navigation/native';
import store from '../../redux/store';
interface ProductProps {
  id : number;
  title: string;
  image : string;
  price: number;
  sku: string;
  name: string;
  brand: string;
  review: number;
  grade: string[];
  bagSize: string[];
  minOrderQty: number;
  maxOrderQty: number;
  inStock: number;
}
const ProductItemChoice: React.FC<ProductProps> = (product : ProductProps) => {
  const [selectedGrade, setSelectedGrade] = useState('' as string);
  const[selectBagSize , setSelectBagSize] = useState('' as string);
  const [quantity, setQuantity] = useState(1);
  // console.log(product);
  const dispatch = useDispatch();
  const CartItem = {
    id: product.id,
    name: product.name,
    brand: product.brand,
    price: product.price,
    quantity: quantity,
    grade: selectedGrade,
    bag_size: selectBagSize,
    img : product.image,
  };
  const AddToCart = (CartItem : any) => {
    dispatch(addToCart(CartItem));
    dispatch(updateQuantity(quantity));
  }
  useEffect(()=>{
    dispatch(fetchAddress());
  }, [dispatch]);
  
  const goToCheckout = async () => {
    if(quantity > 0){
        const address = store.getState().fetchAddressReducer.address;
        dispatch(setAddress(address))
        navigation.navigate('Checkout' as never);      
  }
  else {
      Alert.alert('Cart is empty');
    }
}
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

return (
      <View style={styles.container}>
        <View style={styles.skuAndBrandContainer}>
          <Text style={styles.sku}>SKU ID: {product.sku}</Text>
          <Text style = {styles.brand}>Brand: {product.brand}</Text>
        </View>

        <View style = {styles.nameContainer}>
            <Text style={styles.name}>{product.name}</Text>
        </View>

        <View style={styles.reviewContainer}>
          <Review />
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.salePrice}>₹{product.price}</Text>
          <Text style={styles.mrp}>₹{"100"}</Text>
        </View>

        <View style={styles.gradeAndBagSizeSelector}>
          <View style={styles.gradeContainer}>
            <Text style = {styles.gradeHeading}>Grade: </Text>

            <View style = {styles.gradeOptionsContainer}>

                {product.grade.map((g : string, index : number) => (

                <TouchableOpacity key={index} style={[ styles.gradeOptions, selectedGrade === g ? { borderColor: 'red', borderWidth: 2 } : {}, ]}
                  onPress={() => { setSelectedGrade(g);
                  // console.log(selectedGrade);
                  }}>
                  <View style={styles.gradeOptions}>
                  <Text style={{ color : 'black' , fontWeight : 'bold'}}>{g}</Text>
                  </View>
                </TouchableOpacity>
                ))}

            </View>
          
          </View>

          <View style = {styles.bagSizeContainer}>
            <Text style = {styles.gradeHeading}>Bag Size: </Text>
              {product.bagSize.map((g : string, index : number) => (
                  <TouchableOpacity key={index} style={[styles.gradeOptions, selectBagSize === g ? { borderColor: 'red', borderWidth: 2 } : {},]}
                    onPress={() => {setSelectBagSize(g)
                    // console.log(selectBagSize);
                    }}>
                    <View style={styles.gradeOptions}>
                    <Text style={{ color : 'black' , fontWeight : 'bold'}}>{g}</Text>
                    </View>
                  </TouchableOpacity>
              ))}
          </View>
        </View>

        <View style={styles.additionalInfo}>
          <View >
             <Text style={styles.minOQ}>Min Order Qty</Text>
             <Text style={{ color : 'black' }}>{product.minOrderQty}</Text>
          </View>

          <View>
             <Text style={styles.maxOQ}>Max Order Qty</Text>
             <Text style={{ color : 'black' }}>{product.maxOrderQty}</Text>
          </View>

          <View>
            <Text style={styles.inStock}>In Stock</Text>
            <Text style={{ color : 'black' }}>{product.inStock}</Text>
          </View>
        </View>
        <View style={{flexDirection : 'row' , marginLeft : 50 , marginRight : 150}}>
          <View style={styles.qtySelector}>
              <Text style={styles.qtyText}>Quantity</Text>
              <View style={styles.qtyContainer}>
                <TouchableOpacity onPress={() => setQuantity(quantity > product.minOrderQty ? quantity - 1 : quantity)}>
                <View style={styles.qtyChangeButton}>
                  <Text style={styles.qtyButton}>—</Text>
                  </View>
                </TouchableOpacity>
                <TextInput
                  style={styles.qtyValue}
                  value={quantity.toString()}
                  onChangeText={(text) => {
                  const newQuantity = parseInt(text, 10);
                  if (!isNaN(newQuantity) && newQuantity >= product.minOrderQty && newQuantity <= product.maxOrderQty && newQuantity <= product.inStock) {
                    setQuantity(newQuantity);}}}/>
                <TouchableOpacity onPress={() => setQuantity((quantity < product.maxOrderQty && quantity < product.inStock) ? quantity + 1 : quantity)}>
                <View style={styles.qtyChangeButton}>
                  <Text style={styles.qtyButton}>＋</Text>
                  </View>
                </TouchableOpacity>
                {/*to add total amount*/}
              </View>
          </View>
          <View style={{position : 'relative'}}>
              <Text style={{ color : 'grey'}}>{`Total Value:`}</Text>
              <Text style={{fontWeight : 'bold' , fontSize : 16 , fontFamily : 'inter' , color : 'black'}}>{` ₹${product.price * quantity}`}</Text>
            </View>
        </View>
        <View style={{flexDirection : 'row'}}>
            <TouchableOpacity style={styles.addToCart} onPress={() =>{ 
                if (selectBagSize === '' || selectedGrade === '') {
                alert("Please select Grade and Bag Size");
                } else if(selectBagSize === ''){
                alert("Please select Bag Size");
                }else if(selectedGrade === ''){
                alert("Please select Grade");
                }else {
                setModalVisible(true);
                AddToCart(CartItem);
                }
              }}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.modalView}>
              <View style={{backgroundColor : "#fff" , borderRadius : 10 , width : 300 , height : 200}}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalText}>{quantity} {quantity === 1 ? 'item' : 'items'} Added to Cart</Text>
                  <TouchableOpacity onPress={()=>{setModalVisible(false)}} >
                    <Text style={{fontSize : 25 , color : 'black'}}>×</Text>
                  </TouchableOpacity>
                </View> 
                <View style={{flexDirection : 'row' , gap : 20}}>
                  <Image source={{uri : product.image}} style={{width : 60 , height : 60 , borderRadius : 10 , marginTop : 10 , marginLeft : 20}}/>
                  <View style={{marginTop : 20 , gap : 5}}>
                    <Text style={{color : 'grey'}}>{product.name}</Text>
                    <Text style={{color : 'grey'}}>{quantity}×{product.price}</Text>
                  </View>
                  <Text style={{...styles.modalText, marginTop: 20}}>₹{product.price * quantity}</Text>
                </View>

                  <View style={{flexDirection : 'row' , gap : 10 ,justifyContent : 'center' , marginTop : 10}}>
                      <TouchableOpacity
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        navigation.navigate('CartScreen' as never);
                      }}>
                      <Text style={styles.textStyle}>View Cart</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => {
                        setModalVisible(!modalVisible)
                        goToCheckout(); 
                        }}>
                      <Text style={styles.textStyle}>Checkout</Text>
                      </TouchableOpacity>
                    </View>
              </View>
            </View>
            </Modal>
          <View style={{marginLeft : 50 , marginTop : 17}}>
            <HeartIcon/>
          </View>
          
        </View>
        
        <ProductDescription/>
      </View>
  );
};
export default ProductItemChoice;