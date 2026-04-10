import { Image, Text, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 60, fontWeight: 'bold' }}>Hello World</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default App;
