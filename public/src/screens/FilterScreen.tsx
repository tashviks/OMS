import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import ClearAll from '../assets/clearAll';
import { Svg } from 'react-native-svg';

function FilterPopup() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <Text>Filter</Text>
      </View>
      <View> {/* Body */}
        <Text>Filter Options</Text>
        // create 2 cols , one for toggling choices
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // Add your styles here
    height: 100,
    width: 100,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    // Add your styles here
  },
  filterText: {
    // Add your styles here
  },
  closeButton: {
    // Add your styles here
  },
  clearAllImage: {
    width: 24, // Set appropriate width
    height: 24, // Set appropriate height
  },
});

export default FilterPopup;