import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles/App.styles';

const App = () => {
  //Mobile current theme
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';
  const backgroundColor = isDarkMode ? '#000' : '#d1faff';
  const TextColor = isDarkMode ? 'white' : '#012c31';

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
      edges={['top', 'bottom', 'left', 'right']}
    >
      <Text style={[styles.text1, { color: TextColor }]}>Hello World</Text>
      <Text style={[styles.text2, { color: TextColor }]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        incidunt nobis rerum sunt aperiam cupiditate aliquid quidem architecto
        minima repellat.
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      {/* <Button title="Click Me" onPress={() => alert('Button Pressed!')} /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Button Pressed!')}
      >
        <Text style={[styles.buttonText, { color: TextColor }]}>
          Click Me button
        </Text>
      </TouchableOpacity>
      {/* <TouchableHighlight onPress={() => alert('Touchable Highlight Pressed!')}>
        <Text>Touchable Highlight</Text>
      </TouchableHighlight> */}
      <Pressable
        style={styles.button}
        onPress={() => alert('Pressable Pressed!')}
        onHoverIn={() => console.log('Mouse entered')}
      >
        <Text style={styles.buttonText}>Pressables</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;
