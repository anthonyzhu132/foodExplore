import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, error] = useResults();

  return (
    <View>
      <SearchBar 
      term={term} 
      onTermChange={(newTerm) => setTerm(newTerm) }
      ontermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>Found {results.length} results </Text>
      <ResultsList title={'Cost Effective'}/>
      <ResultsList title={'Bit Pricier'}/>
      <ResultsList title={'Big Spender'}/>
    </View>
  );
}

const styles = StyleSheet.create({});


export default SearchScreen;