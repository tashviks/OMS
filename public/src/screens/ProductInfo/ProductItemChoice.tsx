import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import AddedToCart from './AddedToCart';
import { addToCart } from '../../redux/action';
import { useDispatch } from 'react-redux';
import Review from '../../assets/review';

interface Grade {
  grade: string;
}
interface BagSize {
  size: number;
}
interface ProductProps {
  id : number;
  title: string;
  price: number;
  image: any;
  sku: string;
  name: string;
  brand: string;
  review: number;
  grade: Grade;
  bagSize: BagSize;
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
  const [selectedGrade, setSelectedGrade] = React.useState('' as string);
  const[selectBagSize , setSelectBagSize] = React.useState('' as string)
  const [quantity, setQuantity] = React.useState(minOrderQty);
  const dispatch = useDispatch();
  const CartItem = {
    id: 1,
    name: 'Sample Product',
    brand: 'Sample Brand',
    price: 100,
    quantity: 1,
  };
  const AddToCart = (CartItem : any) => {
    console.warn(CartItem);
    dispatch(addToCart(CartItem));
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

              <TouchableOpacity style={[styles.gradeOptions,selectedGrade === 'GO 1' ? { backgroundColor: '#d3d3d3' } : {},]}
                onPress={() => setSelectedGrade('GO 1')}>
                <View style={styles.gradeOptions}>
                  <Text>GO 1</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.gradeOptions,selectedGrade === 'GO 2' ? { backgroundColor: '#d3d3d3' } : {},]}
                onPress={() => setSelectedGrade('GO 2')}>
                <View style={styles.gradeOptions}>
                  <Text>GO 2</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.gradeOptions,selectedGrade === 'GO 3' ? { backgroundColor: '#d3d3d3' } : {},]}
                onPress={() => setSelectedGrade('GO 3')}>
                <View style={styles.gradeOptions}>
                  <Text>GO 3</Text>
                </View>
              </TouchableOpacity>

            </View>
          
          </View>

          <View style = {styles.bagSizeContainer}>
            <Text style = {styles.gradeHeading}>Bag Size: </Text>
            <TouchableOpacity style={[styles.gradeOptions,selectBagSize === 'BAG 1' ? { backgroundColor: '#d3d3d3' } : {},]}
                  onPress={() => setSelectBagSize('BAG 1')}>
                  <View style={styles.gradeOptions}>
                    <Text>BAG 1</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.gradeOptions,selectBagSize === 'BAG 2' ? { backgroundColor: '#d3d3d3' } : {},]}
                  onPress={() => setSelectBagSize('BAG 2')}>
                  <View style={styles.gradeOptions}>
                    <Text>BAG 2</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.gradeOptions,selectBagSize === 'BAG 3' ? { backgroundColor: '#d3d3d3' } : {},]}
                  onPress={() => setSelectBagSize('BAG 3')}>
                  <View style={styles.gradeOptions}>
                    <Text>BAG 3</Text>
                  </View>
                </TouchableOpacity>
          </View>
        </View>

        <View style={styles.additionalInfo}>
          <View style={styles.minOQ} >
             <Text>Min Order Qty</Text>
             <Text>{minOrderQty}</Text>
          </View>

          <View style={styles.maxOQ} >
             <Text>Max Order Qty</Text>
             <Text>{maxOrderQty}</Text>
          </View>

          <View style={styles.inStock} >
            <Text>In Stock</Text>
            <Text>{inStock}</Text>
          </View>
        </View>

        <View style={styles.qtySelector}>
          <Text>Quantity Selector</Text>
          <View style={styles.qtyContainer}>
            <TouchableOpacity onPress={() => setQuantity(quantity > minOrderQty ? quantity - 1 : quantity)}>
             <View style={styles.minusButton}>
               <Text style={styles.qtyButton}>-</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.qtyValue}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity < maxOrderQty ? quantity + 1 : quantity)}>
              <Text style={styles.qtyButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.addToCart} onPress={() => AddToCart(CartItem)}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height : '103%'
  },
  skuAndBrandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  nameContainer: {
    marginTop: 20,
    marginLeft : 10,
  },
  name : {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 26,
    letterSpacing: -0.1,
    textAlign: 'left',
    color: '#000000',
  },
  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop : 8,
    marginLeft : 10,
  },
  priceContainer: {
    flexDirection: 'row',
    gap : 5,
    marginBottom: 20,
    marginLeft : 10,
  },
  salePrice : {
    fontFamily: 'Inter',
    fontSize: 26,
    fontWeight: '100',
    lineHeight: 29,
    letterSpacing: -0.1,
    textAlign: 'left',
    color: '#000000',
  },
  mrp : {
    fontFamily: 'Inter',
    fontSize: 19,
    fontWeight: '100',
    lineHeight: 26,
    letterSpacing: -0.1,
    textAlign: 'left',
    color: "#8D8D8D",
    textDecorationLine: 'line-through',
  },
  gradeAndBagSizeSelector: {
    flexDirection: 'column',
    gap : 20 ,
    justifyContent: 'space-between',
    marginBottom: 20,
    display : 'flex',
    borderBottomWidth : 0.5,
    paddingBottom : 20,
  },
  gradeHeading: {
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'left',
    color: '#000000',
  },
  gradeContainer: {
   flexDirection: 'row',
   gap : 10,
  },
  gradeOptionsContainer : {
    flexDirection: 'row',
    gap : 10,
    marginLeft : 100,
  },
  gradeOptions :{
    backgroundColor : '#f6f6f6',
    padding : 10,
  },
  bagSizeContainer :{
    flexDirection: 'row',
    gap : 10,
  },
  additionalInfo: {
    marginBottom: 20,
    display : 'flex',
    flexDirection : 'row',
    gap : 50,
    alignItems : 'center',
    justifyContent : 'center',
  },
  qtySelector: {
    marginBottom: 20,
  },
  addToCart: {
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    marginLeft: 70,
    backgroundColor : 'transparent',
    borderWidth : 0.8,
    borderColor : 'black',
  },
  addToCartText: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 26,
    textAlign: 'center',
    color: '#000000',
  },
  sku : {
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 15.6,
    textAlign: 'left',
    paddingTop: 15,
    marginLeft: 10,
  },
  brand:{
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 15.6,
    textAlign: 'left',
    paddingTop: 15,
    marginRight : 20,
  },
  qtyContainer: {
    flexDirection: 'row',
    gap : 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyButton: {
    borderRadius: 5,
    borderColor : 'black',
  },
  minusButton: {
    borderColor : 'black',
  },
  

});

export default ProductItemChoice;


