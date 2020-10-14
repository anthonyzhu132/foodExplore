import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = (price) => {
    //price = String '$' || '$$' || '$$$'
    //returning results with filtered results, matching results.price with price that we are searching for (argument)
    return results.filter(result => {
      return result.price === price;
    });
  }

  return (
    <>
      <SearchBar 
      term={term} 
      onTermChange={(newTerm) => setTerm(newTerm) }
      ontermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
      <ResultsList navigation={navigation} 
      results={filterResultsByPrice('$')} 
      title={'$'}
      />
      <ResultsList navigation={navigation} 
      results={filterResultsByPrice('$$')} 
      title={'$$'}
      />
      <ResultsList navigation={navigation} 
      results={filterResultsByPrice('$$$')} 
      title={'$$$'}
      />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});


export default SearchScreen;