import { FlatList, Image, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import styles from './styles/App.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const StackNavigation = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={{ headerStyle: { backgroundColor: 'yellow' } }}
//     >
//       <Stack.Screen
//         options={{ headerShown: false }}
//         name="Home"
//         component={Home}
//       />
//       <Stack.Screen
//         name="Profile"
//         component={Profile}
//         options={{ title: 'My Profile' }}
//       />
//       <Stack.Screen
//         name="Search"
//         component={Search}
//         options={{ headerStyle: { backgroundColor: 'red' } }}
//       />
//     </Stack.Navigator>
//   );
// };

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: { backgroundColor: 'black' },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;
