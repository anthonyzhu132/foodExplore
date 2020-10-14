import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from '../components/ResultsDetail'

const ResultsList = ({ title, results }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
      horizontal={true}
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({ item }) => {
        return <ResultsDetail result={item}/>
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 'bold',
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default ResultsList;