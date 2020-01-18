import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  onInputChange = newTerm => {
    setTerm(newTerm);
  };
  return (
    <View>
      <SearchBar term={term} onInputChange={onInputChange} />
      <Text>Term: {term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
