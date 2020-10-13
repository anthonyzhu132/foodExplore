import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={styles.backgroundStyle}>
      <EvilIcons
      name="search" 
      style={styles.iconStyle} 
      />

      <TextInput
      style={styles.inputStyle} 
      placeholder='Search'
      value={term}
      onChangeText={newTerm => onTermChange(newTerm)}
      autoCapitalize="none"
      autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10
  },
  inputStyle: {
    fontSize: 18,
    flex: 1
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center'
  }
});


export default SearchBar;