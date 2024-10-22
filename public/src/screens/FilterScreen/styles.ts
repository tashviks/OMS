import {StyleSheet} from 'react-native';
export const FilterScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9F9F9',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: '#FFFFFF',
    },
    time: {
      fontSize: 16,
    },
    battery: {
      fontSize: 16,
    },
    filterHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
      backgroundColor: '#FFFFFF',
    },
    filterText: {
      fontSize: 22,
      fontWeight: '600',
    },
    clearAll: {
      fontSize: 16,
      fontWeight: '600',
      color: '#F15927',
    },
    columns: {
      flexDirection: 'row',
      flex: 1,
    },
    column: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderRightWidth: 1,
      borderRightColor: '#E0E0E0',
    },
    column1: {
     backgroundColor : '#f6f6f6',
     width : 150
    },
    categoryItem: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
    },
    selectedCategory: {
      backgroundColor: '#FFF1F1',
    },
    categoryText: {
      fontSize: 16,
      fontWeight: '500',
    },
    optionItem: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
    },
    selectedOption: {
      backgroundColor: '#FFF1F1',
    },
    optionText: {
      fontSize: 16,
    },
    emptyText: {
      padding: 15,
      fontSize: 16,
      color: '#888888',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: '#FFFFFF',
      borderTopWidth: 1,
      borderTopColor: '#E0E0E0',
    },
    closeButton: {
      padding: 15,
      backgroundColor: '#F0F0F0',
      borderRadius: 5,
    },
    closeButtonText: {
      fontSize: 16,
      color: '#555555',
    },
    applyButton: {
      padding: 15,
      backgroundColor: '#FF6347',
      borderRadius: 5,
    },
    applyButtonText: {
      fontSize: 16,
      color: '#FFFFFF',
    },
    
  });

  export const CartHeaderStyles = StyleSheet.create({
    container:{
        width: 'auto',
        height: 50,
        paddingVertical: 0,
        paddingHorizontal: 16,
        display : 'flex',
        flexDirection : 'row',
        marginTop : 10,
    },
   backButtonCon:{
        width: 100,
        height: 100,
        marginLeft: -10,
   },
   cartTextContainer:{
    marginLeft : -120
   },
    cartText:{
        fontSize: 20,
        marginTop :5,
        marginLeft : 60,
        color : 'black'
    }
  });

  export const FilterProductStyles = StyleSheet.create({
    scrollContainer: {
      justifyContent: 'center',
      padding: 10,
      zIndex: 2,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      marginBottom: 20, 
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
  },
  });