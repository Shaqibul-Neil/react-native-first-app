import { View, Text, Button } from 'react-native';
import React from 'react';
import styles from '../../styles/App.styles';

const Search = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: 20,
      }}
    >
      <Text style={styles.text2}>Search</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Search;
