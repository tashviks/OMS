import React, { useEffect, useState } from 'react';
import { View, TouchableHighlight } from 'react-native';
import ProductCard from '../../components/ProductCard';
import DefaultHeader from '../../components/defaultHeader/defaultHeader';
import ProductCategorey from '../../components/ProductCategorey';
import FilterButton from '../../assets/filterButton';
import SortButton from '../../assets/sortButton';
import { FlatList } from 'react-native-gesture-handler';
import { HomeScreenStyles as styles } from './styles';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/action';
const getProducts = async () => {
  try {
      const response = await fetch('http://localhost:8080/products');
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Fetching Data")
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
  }
}
const ProductScreen = ({ navigation  }) => {
 console.log("ProductScreen")
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
        const products = await getProducts();
        console.log(products)
        setProduct(products);
    };
    fetchProducts();
  }, []);

  const dispatch = useDispatch();
  dispatch(setProducts(product));

  return (
    <View style={styles.container}>
      <DefaultHeader />
      <FlatList
        data={product}
        keyExtractor={(item) => item.ID}
        ListHeaderComponent={<ProductCategorey />}
        renderItem={({ item }) => (
          <TouchableHighlight
            key={item.ID}
            onPress={() => navigation.navigate('ProductInfo', { product: item })}
            underlayColor="white"
          >
            <ProductCard
              title={item.Name}
              amount={item.Price}
              image={item.Image}
              mrp={item.MRP}
            />
          </TouchableHighlight>
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.scrollContainer}
      />
      <View style={styles.cucontainer}>
        <View>
          <SortButton />
        </View>
        <View>
          <TouchableHighlight
            onPress={() => navigation.navigate('FilterScreen')}
            underlayColor={"#FFFFF"}
          >
            <FilterButton />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;
