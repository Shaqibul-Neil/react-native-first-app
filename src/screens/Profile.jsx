import { View, Text, Button } from 'react-native';
import React from 'react';
import styles from '../../styles/App.styles';

const Profile = ({ navigation, route }) => {
  console.log(route.params);
  const { id, name } = route.params || {};

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: 20,
      }}
    >
      <Text style={styles.text1}>Profile</Text>
      <Text style={styles.text2}>ID: {id}</Text>
      <Text style={styles.text2}>Name: {name}</Text>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  );
};

export default Profile;
