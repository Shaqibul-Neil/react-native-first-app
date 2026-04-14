import { Button, Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from '../../../styles/App.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import AllItems from './all-items/AllItems';
import LowStock from './lowStock/LowStock';
import CreateItem from './create-item/CreateItem';

const btnInfo = setView => [
  { id: 0, borderColor: 'green', text: 'All items', onPress: () => setView(0) },
  { id: 1, borderColor: 'red', text: 'Low Stock', onPress: () => setView(1) },
  {
    id: 2,
    borderColor: 'black',
    text: 'Create Item',
    onPress: () => setView(2),
  },
];

const getButtonStyle = (btn, activeView, currentView) => [
  styles.button,
  {
    borderColor: btn.borderColor,
    backgroundColor: activeView === currentView ? btn.borderColor : '#fff',
  },
];
const getTextStyle = (view, id) => [
  styles.buttonText,
  {
    color: view === id ? '#fff' : '#000',
  },
];

const Home = ({ navigation }) => {
  const [view, setView] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        {btnInfo(setView).map((item, index) => (
          <Pressable
            key={index}
            style={getButtonStyle(item, view, item.id)}
            onPress={item.onPress}
          >
            <Text style={getTextStyle(view, item.id)}>{item.text}</Text>
          </Pressable>
        ))}
      </View>
      {view === 0 && <AllItems />}
      {view === 1 && <LowStock />}
      {view === 2 && <CreateItem />}
    </SafeAreaView>
  );
};

export default Home;
