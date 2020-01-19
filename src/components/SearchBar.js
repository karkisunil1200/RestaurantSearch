import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onInputChange, onInputSubmit}) => {
  return (
    <View style={styles.background}>
      <Feather name='search' style={styles.icon} />
      <TextInput
        value={term}
        style={styles.inputStyle}
        onChangeText={onInputChange}
        placeholder='search..'
        autoCapitalize='none'
        onEndEditing={onInputSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: '#eee',
    marginVertical: 10
  },
  inputStyle: {
    flex: 1
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
