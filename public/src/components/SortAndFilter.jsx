import React from 'react'
import { View , Text , Button , StyleSheet} from 'react-native'

function SortAndFilter() {
  return (
    <View style={styles.container} > 
      <View style={styles.sort}>
        <Text>SORT</Text>
      </View>
      <View style={styles.filter}>
        <Text>FILTER</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop : 830,
    paddingLeft : 50,
    paddingRight : 50,
    width : 500,
    height : 100,
    borderColor : 'black',
    flexDirection: 'row',
    gap: 200,
    zIndex:1,
  },
  sort : {
    padding: 10,
    borderRadius: 10,
  },
  filter:{
    padding: 10,
    borderRadius: 10,
  }
  
})

export default SortAndFilter
