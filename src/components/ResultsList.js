import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from '../components/ResultsDetail'

const ResultsList = ({ title, results, navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
      horizontal={true}
      data={results}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(result) => result.id}
      renderItem={({ item }) => {
        return (
        <TouchableOpacity 
        onPress={() => navigation.navigate('ResultsShow')}
        >
          <ResultsDetail result={item}/>
        </TouchableOpacity>
        );
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