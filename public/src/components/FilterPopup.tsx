import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import ClearAll from '../assets/clearAll';
import { Svg } from 'react-native-svg';

function FilterPopup() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Header */}
        <Text style={styles.filterText}>Filter</Text>

        <View style={styles.closeButton}>
          <ClearAll/>
        </View>
      </View>

      <View> {/* Body */}
        <Text>Filter Options</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
  },
  filterText: {
  },
  closeButton: {
  },
  clearAllImage: {
  },
});

export default FilterPopup;