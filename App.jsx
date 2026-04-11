import { FlatList, Image, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import styles from './styles/App.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerStyle: { backgroundColor: 'yellow' } }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'My Profile' }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerStyle: { backgroundColor: 'red' } }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
