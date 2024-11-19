import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { ProductDescStyles as styles } from './styles'
const ProductDescription = () => {
  const [desc , setDesc] = useState('Cement is a fine powder that acts as a binder in concrete and mortar. \n\nIt is made from a mixture of limestone, clay, and other materials, which are heated to form clinker and then ground into a fine powder. \n\nCement is essential for construction projects, providing strength and durability to buildings and infrastructure.');
  const [infoState , setInfostate] = useState(desc);
  const setDes = () => {
    if(infoState === 'Description'){
      setDesc('Cement is a fine powder that acts as a binder in concrete and mortar. \n\nIt is made from a mixture of limestone, clay, and other materials, which are heated to form clinker and then ground into a fine powder. \n\nCement is essential for construction projects, providing strength and durability to buildings and infrastructure.');
    }
    else if(infoState === 'Warranty'){
      setDesc('This is to Warranty')
    }
    else if(infoState === 'Hello'){
      setDesc('Hello');
    }
  }
  return (
    <View >
            <View style={styles.DesContainer}>
            <View>
              <TouchableOpacity onPress={() => {
              setInfostate('Description')
              setDes();
              }}>
              <Text style={[styles.DescText, infoState === 'Description' && { color: '#FF7F50' }]}>DETAILS</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => {
              setInfostate('Warranty')
              setDes();
              }}>
              <Text style={[styles.DescText, infoState === 'Warranty' && { color: '#FF7F50' , borderBottomColor : '#FF7F50'}]}>WARRANTY</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => {
              setInfostate('Hello')
              setDes();
              }}>
              <Text style={[styles.DescText, infoState === 'Hello' && { color: '#FF7F50' }]}>RETURNS</Text>
              </TouchableOpacity>
            </View>
            </View>
            <View>
            <Text style={styles.description}>
              {desc}
            </Text>
            </View>
        </View>
  
  )
}

export default ProductDescription