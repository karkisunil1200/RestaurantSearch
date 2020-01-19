import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
  const [result, setResult] = useState([]);

  const id = navigation.getParam('id');

  console.log(result);

  useEffect(() => {
    getResult(id);
  }, []);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
