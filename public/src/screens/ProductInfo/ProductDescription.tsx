import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { ProductDescStyles as styles } from './styles'
const ProductDescription = () => {
  const [infoState , setInfostate] = useState('');
  return (
    <View >

      <View >
        <TouchableHighlight onPress={() => setInfostate('Description')}>
            <Text style={styles.DescText}>Description</Text>
        </TouchableHighlight>
      </View>

      <View style={{padding: 10}}>
        <TouchableHighlight onPress={() => setInfostate('Know More')}>
            <Text>Know More</Text>
        </TouchableHighlight>
      </View>

      <View>
        <TouchableHighlight onPress={() => setInfostate('Hello')}>
            <Text>Col 3</Text>
        </TouchableHighlight>
      </View>
        
      <View style={styles.DesContainer}>
        <Text>
          Desc Container
        </Text>

      </View>
    </View>
  )
}

export default ProductDescription