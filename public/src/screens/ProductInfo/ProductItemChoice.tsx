import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import AddedToCart from './AddedToCart';
import { addToCart } from '../../redux/action';
import { useDispatch } from 'react-redux';
import Review from '../../assets/review';
import { ProductItemChoiceStyles as styles } from './styles';

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
  const[selectBagSize , setSelectBagSize] = React.useState('' as string);
  const [quantity, setQuantity] = React.useState(minOrderQty);

  const dispatch = useDispatch();

  const CartItem = {
    id: id,
    name: name,
    brand: brand,
    price: price,
    quantity: quantity,
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

              <TouchableOpacity style={[styles.gradeOptions,selectedGrade === 'GO 1' ? { borderColor : 'red' , borderWidth : 2 } : {},]}
                onPress={() => setSelectedGrade('GO 1')}>
                <View style={styles.gradeOptions}>
                  <Text>GO 1</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.gradeOptions,selectedGrade === 'GO 2' ? { borderColor : 'red' , borderWidth : 2 } : {},]}
                onPress={() => setSelectedGrade('GO 2')}>
                <View style={styles.gradeOptions}>
                  <Text>GO 2</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.gradeOptions,selectedGrade === 'GO 3' ? { borderColor : 'red' , borderWidth : 2 } : {},]}
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

            <Text style={styles.qtyValue}>{quantity}</Text>
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

      </View>
  );
};
export default ProductItemChoice;


