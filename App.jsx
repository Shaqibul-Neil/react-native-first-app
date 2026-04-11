import { FlatList, Image, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import styles from './styles/App.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };
  //Mobile current theme
  // const theme = useColorScheme();
  // const isDarkMode = theme === 'dark';
  // const backgroundColor = isDarkMode ? '#000' : '#d1faff';
  // const TextColor = isDarkMode ? 'white' : '#012c31';

  const data = [
    {
      id: 1,
      name: 'John Dos',
      email: 'john.doe@example.com',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Michael Smith',
      email: 'michael.smith@example.com',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: 3,
      name: 'David Johnson',
      email: 'david.johnson@example.com',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 4,
      name: 'Chris Brown',
      email: 'chris.brown@example.com',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      id: 5,
      name: 'James Wilson',
      email: 'james.wilson@example.com',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      id: 6,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      id: 7,
      name: 'Sophia Martinez',
      email: 'sophia.martinez@example.com',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 8,
      name: 'Olivia Taylor',
      email: 'olivia.taylor@example.com',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      id: 9,
      name: 'Isabella Anderson',
      email: 'isabella.anderson@example.com',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 10,
      name: 'Ava Thomas',
      email: 'ava.thomas@example.com',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Always use flatlist to display lists of data -- shows only the items that are currently visible on the screen -- memory efficient -- donot use scrollview because it loads all items at once */}
      {/* <FlatList
        data={data}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ gap: 5, alignItems: 'center', textAlign: 'center' }}>
              <Text style={styles.text1}>Name: {item.name}</Text>
              <Text style={styles.text2}>{item.email}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<View style={{ height: 16 }} />}
        numColumns={2}
        columnWrapperStyle={{ gap: 16, justifyContent: 'center' }}
        // extra data refers to any additional data that the flatlist needs to re-render when it changes -- if the data is not changing, we can ignore it -- if the data is changing, we need to pass it as extra data to the flatlist so that it can re-render when the data changes
        extraData={data}
        // horizontal
      /> */}

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter a text..."
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
      {/* Button */}
      <Button style={styles.button} title="Submit" onPress={handleSubmit} />
      {submittedValue ? 
      <Text>Result : {submittedValue}</Text>: null}
    </SafeAreaView>
  );
};

export default App;
