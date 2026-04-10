import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <Text style={{ fontSize: 60, fontWeight: 'bold' }}>Hello World</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      {/* <Button title="Click Me" onPress={() => alert('Button Pressed!')} /> */}
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
        onPress={() => alert('Button Pressed!')}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Click Me button
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
