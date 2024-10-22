import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { useState } from 'react'
const ProductDescription = () => {
    const [infoState , setInfostate] = useState('');
  return (
    <View style={{flexDirection : 'column'}}>

      <View >
        <TouchableHighlight onPress={() => setInfostate('Description')}>
            <Text style={{color : 'black'}}>Description</Text>
        </TouchableHighlight>
      </View>

      <View style={{padding: 10}}>
        <TouchableHighlight onPress={() => setInfostate('Know More')}>
            <Text>Know More</Text>
        </TouchableHighlight>
      </View>

      <View>
        <TouchableHighlight onPress={() => setInfostate('Hello')}>
            <Text>Hello</Text>
        </TouchableHighlight>
      </View>
        
      <View>

      </View>
    </View>
  )
}

export default ProductDescription