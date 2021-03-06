import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResult';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, error, results] = useResults();

  const onInputChange = newTerm => {
    setTerm(newTerm);
  };

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar onInputSubmit={() => searchApi(term)} term={term} onInputChange={onInputChange} />
      {error ? <Text>{error}</Text> : null}

      <ScrollView>
        <ResultsList title={'Cost Effective'} results={filterResultsByPrice('$')} />
        <ResultsList title={'Bit Pricer'} results={filterResultsByPrice('$$')} />
        <ResultsList title={'GO BIG!'} results={filterResultsByPrice('$$$')} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
