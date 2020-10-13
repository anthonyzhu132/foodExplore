import React, {useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchAPI = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'Vancouver'
      }
    });
    setResults(response.data.businesses);
  }

  return (
    <View>
      <SearchBar 
      term={term} 
      onTermChange={(newTerm) => setTerm(newTerm) }
      ontermSubmit={() => searchAPI()}
      />
      <Text>Found {results.length} results </Text>
    </View>
  );
}

const styles = StyleSheet.create({});


export default SearchScreen;