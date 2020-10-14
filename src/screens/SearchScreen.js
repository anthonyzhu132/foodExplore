import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
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
    <View>
      <SearchBar 
      term={term} 
      onTermChange={(newTerm) => setTerm(newTerm) }
      ontermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>Found {results.length} results </Text>
      <ResultsList results={filterResultsByPrice('$')} title={'Cost Effective'}/>
      <ResultsList results={filterResultsByPrice('$$')} title={'Bit Pricier'}/>
      <ResultsList results={filterResultsByPrice('$$$')} title={'Big Spender'}/>
    </View>
  );
}

const styles = StyleSheet.create({});


export default SearchScreen;