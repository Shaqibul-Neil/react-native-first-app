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
      {/*  navigation.replace('Search') => replaces the current screen with the new one, so you can't go back to the previous screen */}
      <Button
        title="Go to Search"
        onPress={() => navigation.replace('Search')}
      />
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate('Profile', { id: 1, name: 'John Doe' })
        }
      />
    </View>
  );
};

export default Home;
