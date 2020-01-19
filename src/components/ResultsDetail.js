import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({results}) => {
  console.log(results);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: results.image_url}} />
      <Text style={styles.name}>Name: {results.name}</Text>
      <Text style={styles.name}>Rating: {results.rating}</Text>
      <Text style={styles.name}>Reviews: {results.review_count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  name: {
    fontWeight: 'bold'
  },
  image: {
    width: 250,
    borderRadius: 10,
    height: 120,
    marginBottom: 5
  }
});

export default ResultsDetail;
