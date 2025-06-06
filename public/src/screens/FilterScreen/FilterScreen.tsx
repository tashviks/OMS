import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FilterScreenStyles as styles } from './styles';
import OfflineComponent from '../Offline/OfflineComponent';
import store from '../../redux/store';
import CloseButton from '../../assets/closeButton';
import ApplyButton from '../../assets/applyButton';
const FilterScreen = () => {
  const categories = ['Brand', 'Grade', 'BagSize', 'Price', 'Review'];
  const navigation : any = useNavigation();
  const options = {
    Brand: ['Infra Market', 'UltraTech', 'Bharathi', 'ACC', 'Dalmia', 'JSW'],
    Grade: ['Grade A', 'Grade B', 'Grade C', 'Grade D'],
    BagSize: ['10kg', '25kg', '50kg', '100kg'],
    Price: ['Below 100', 'Below 200', 'Above 100', 'Above 200'],
    Review: ['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'],
  };
  const data = store.getState();
  if(data === undefined){
   navigation.navigate('ProductScreen');
  }
  // console.log(data)
  const product = data.fetchProductReducer.products;
  console.log("--------------------------")
  if (!product || product.length === 0) {
    navigation.navigate('OfflineComponent');
  } else {
    console.log(product[0].Brand);
  }
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof options | ''>('');
  const [selectedOptions, setSelectedOptions] = useState<{ [key in keyof typeof options]?: string }>({});
  const handleOptionSelect = (category: keyof typeof options, option: string) => {
    setSelectedOptions(prevState => {
      const newOptions = { ...prevState, [category]: option };
      return newOptions;
    });
  };
  const goBack = () => {
    navigation.goBack();
  }
  const clearAll = () =>{
    setSelectedOptions({
      Brand: '',
      Grade: '',
      BagSize: '',
      Price: '',
      Review: '',
    });
  }
  const ApplyFilter = () => {
    if(product === undefined || product === null){
      navigation.navigate('OfflineComponent');
    }
    else{
    const prod = product.filter((it: { Brand: string; Grade: { toString: () => string; }[]; BagSize: string[]; }) => 
      (selectedOptions.Brand === undefined || (it.Brand.toString().toLowerCase() === selectedOptions.Brand?.toLowerCase()))
      && (selectedOptions.Grade === undefined || (it.Grade[0].toString().toLowerCase() === selectedOptions.Grade?.toLowerCase()))
      && (selectedOptions.BagSize === undefined || it.BagSize.some(size => size.toLowerCase() === selectedOptions.BagSize?.toLowerCase()))
      && (selectedOptions.Price === undefined || (it.Brand.toLowerCase() === selectedOptions.Brand?.toLowerCase()))
    );
    navigation.navigate('FilteredProducts' as never, { prod });
  }
  }
  return (
    <View style={styles.container}>
      <View style={styles.filterHeader}>
        <Text style={styles.filterText}>Filters</Text>
        <TouchableOpacity onPress={clearAll}>
          <Text style={styles.clearAll}>CLEAR ALL</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.columns}>
        <View style={styles.column1}>
        <View style={styles.column}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryItem,
                selectedCategory === category && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(category as keyof typeof options)}
            >
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
        </View>

        <View style={styles.column2}>
          {selectedCategory ? (
            <ScrollView>
              {options[selectedCategory].map((option: string, index: number) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionItem,
                    selectedOptions[selectedCategory] === option && styles.selectedOption,
                  ]}
                  onPress={() => handleOptionSelect(selectedCategory, option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          ) : (
            <Text style={styles.emptyText}>Select a category</Text>
          )}
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.closeButton} onPress={goBack}>
          <CloseButton />
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={ApplyFilter} >
          <ApplyButton />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default FilterScreen;
