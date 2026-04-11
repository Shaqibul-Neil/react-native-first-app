import { Button, Text, View } from 'react-native';
import React from 'react';
import styles from '../../styles/App.styles';

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: 20,
      }}
    >
      <Text style={styles.text2}>Home</Text>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Search')}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default Home;
