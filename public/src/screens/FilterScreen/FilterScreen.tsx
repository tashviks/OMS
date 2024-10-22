import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FilterScreenStyles as styles } from './styles';
import { products } from '../../assets/productsMock';
import FilteredProducts from './FilteredProducts';

const FilterScreen = () => {
  const categories = ['brand', 'grade', 'bagSize', 'price', 'review'];
  const options = {
    brand: ['Infra Market', 'UltraTech', 'Bharathi', 'ACC', 'Dalmia', 'JSW'],
    grade: ['Grade A', 'Grade B', 'Grade C', 'Grade D'],
    bagSize: ['10kg', '25kg', '50kg', '100kg'],
    price: ['Cheap', 'Cheaper', 'Cheapest', 'Cheap Pro Max'],
    review: ['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'],
  };
  
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof options | ''>('');
  const [selectedOptions, setSelectedOptions] = useState<{ [key in keyof typeof options]?: string }>({});

  const handleOptionSelect = (category: keyof typeof options, option: string) => {
    setSelectedOptions(prevState => {
      const newOptions = { ...prevState, [category]: option };
      return newOptions;
    });
  };

  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  }

  const clearAll = () =>{
    setSelectedOptions({
      brand: '',
      grade: '',
      bagSize: '',
      price: '',
      review: '',
    });
  }

  const ApplyFilter = () => {
      const prod = products.filter(product => 
       (selectedOptions.brand === undefined || (product.brand.toLowerCase() === selectedOptions.brand?.toLowerCase()))
     &&(selectedOptions.grade === undefined || (product.grade.toLowerCase() === selectedOptions.grade?.toLowerCase())) 
     &&(selectedOptions.bagSize === undefined || (product.bagSize.toLowerCase() === selectedOptions.bagSize?.toLowerCase())) 
     &&(selectedOptions.price === undefined || (product.brand.toLowerCase() === selectedOptions.brand?.toLowerCase()))
    );
      navigation.navigate('FilteredProducts', { prod });
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

        <View style={styles.column}>
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
          <Text style={styles.closeButtonText}>CLOSE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={ApplyFilter} >
          <Text style={styles.applyButtonText}>APPLY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default FilterScreen;
