import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity, TextInput, Alert } from 'react-native';
import AddedToCart from './AddedToCart';
import { addToCart } from '../../redux/action';
import { useDispatch } from 'react-redux';
import Review from '../../assets/review';
import { ProductItemChoiceStyles as styles } from './styles';
import ProductDescription from './ProductDescription';
import { updateQuantity } from '../../redux/action';
interface ProductProps {
  id : number;
  title: string;
  price: number;
  image: any;
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
const ProductItemChoice: React.FC<ProductProps> = ({
  id,
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
  const [selectedGrade, setSelectedGrade] = useState('' as string);
  const[selectBagSize , setSelectBagSize] = useState('' as string);
  const [quantity, setQuantity] = useState(1);
  const [infoState , setInfostate] = useState('Description');
  const [desc , setDesc] = useState('This is description');

  const setDes = () => {
    if(infoState === 'Description'){
      setDesc('This is a description');
    }
    else if(infoState === 'Know More'){
      setDesc('This is to know more');
    }
    else if(infoState === 'Hello'){
      setDesc('Hello');
    }
  }
  const dispatch = useDispatch();
  const CartItem = {
    id: id,
    name: name,
    brand: brand,
    price: price,
    quantity: quantity,
    grade: selectedGrade,
    bag_size: selectBagSize,
  };
  
  const AddToCart = (CartItem : any) => {
    // console.warn(CartItem);
   
    if(CartItem.grade === '' && CartItem.bag_size === ''){
      alert("Please select grade and bag size");
      return;
    }
    else if(CartItem.grade == ''){
      alert("Please select grade");
      return;
    }
    else if(CartItem.bag_size == ''){
      alert("Please select bag size");
      return;
    }
    Alert.alert('Added to Cart', 'Item added to cart successfully');
    dispatch(addToCart(CartItem));
    dispatch(updateQuantity(quantity));
  }

return (
      <View style={styles.container}>
        <View style={styles.skuAndBrandContainer}>
          <Text style={styles.sku}>SKU ID: {sku}</Text>
          <Text style = {styles.brand}>Brand: {brand}</Text>
        </View>

        <View style = {styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
        </View>

        <View style={styles.reviewContainer}>
          <Review />
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.salePrice}>₹{price}</Text>
          <Text style={styles.mrp}>₹{"100"}</Text>
        </View>

        <View style={styles.gradeAndBagSizeSelector}>
          <View style={styles.gradeContainer}>
            <Text style = {styles.gradeHeading}>Grade: </Text>

            <View style = {styles.gradeOptionsContainer}>

                {grade.map((g : string, index : number) => (

                <TouchableOpacity key={index} style={[ styles.gradeOptions, selectedGrade === g ? { borderColor: 'red', borderWidth: 2 } : {}, ]}
                  onPress={() => { setSelectedGrade(g);
                  console.log(selectedGrade);
                  }}>
                  <View style={styles.gradeOptions}>
                  <Text>{g}</Text>
                  </View>
                </TouchableOpacity>
                ))}

            </View>
          
          </View>

          <View style = {styles.bagSizeContainer}>
            <Text style = {styles.gradeHeading}>Bag Size: </Text>
              {bagSize.map((g : string, index : number) => (
                  <TouchableOpacity key={index} style={[styles.gradeOptions,selectBagSize === g ? { borderColor: 'red', borderWidth: 2 } : {},]}
                    onPress={() => {setSelectBagSize(g)
                    console.log(selectBagSize);
                    }}>
                    <View style={styles.gradeOptions}>
                    <Text>{g}</Text>
                    </View>
                  </TouchableOpacity>
              ))}
          </View>
        </View>

        <View style={styles.additionalInfo}>
          <View >
             <Text style={styles.minOQ}>Min Order Qty</Text>
             <Text>{minOrderQty}</Text>
          </View>

          <View>
             <Text style={styles.maxOQ}>Max Order Qty</Text>
             <Text>{maxOrderQty}</Text>
          </View>

          <View>
            <Text style={styles.inStock}>In Stock</Text>
            <Text>{inStock}</Text>
          </View>
        </View>
        <View style={styles.qtySelector}>
          <Text style={styles.qtyText}>Quantity Selector</Text>
          <View style={styles.qtyContainer}>
            <TouchableOpacity onPress={() => setQuantity(quantity > minOrderQty ? quantity - 1 : quantity)}>
             <View style={styles.qtyChangeButton}>
               <Text style={styles.qtyButton}>-</Text>
              </View>
            </TouchableOpacity>
            <TextInput
              style={styles.qtyValue}
              value={quantity.toString()}
              onChangeText={(text) => {
              const newQuantity = parseInt(text, 10);
              if (!isNaN(newQuantity) && newQuantity >= minOrderQty && newQuantity <= maxOrderQty && newQuantity <= inStock) {
                setQuantity(newQuantity);}}}/>

            <TouchableOpacity onPress={() => setQuantity((quantity < maxOrderQty && quantity < inStock) ? quantity + 1 : quantity)}>
            <View style={styles.qtyChangeButton}>
               <Text style={styles.qtyButton}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.addToCart} onPress={() => AddToCart(CartItem)}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>

        <View style = {styles.DesContainer} >

            <View >
              <TouchableOpacity onPress={() => {
                setInfostate('Description')
                setDes();
                }}>
                  <Text style={styles.DescText}>Description</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => {
                setInfostate('Know More')
              setDes();
              }}>
                  <Text style={styles.DescText} >Know More</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => {
                setInfostate('Hello')
                setDes();
                }}>
                  <Text style={styles.DescText} >Hello</Text>
              </TouchableOpacity>
            </View>

       </View>

        <View>
          <Text>
            {desc}
          </Text>
        </View>


      </View>
  );
};
export default ProductItemChoice;


