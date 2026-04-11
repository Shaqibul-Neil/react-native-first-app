import { View, Text, Button } from 'react-native';
import React from 'react';
import styles from '../../styles/App.styles';

const Profile = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: 20,
      }}
    >
      <Text style={styles.text2}>Profile</Text>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  );
};

export default Profile;
