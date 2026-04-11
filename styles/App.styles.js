import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#d1faff',
    gap: 20,
    padding: 20,
  },
  card: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text2: {
    fontSize: 14,
    textAlign: 'center',
  },
  //   button: {
  //     backgroundColor: '#3a3a3a',
  //     borderRadius: 50,
  //     borderWidth: 2,
  //     borderBottomColor: '#ff0000d0',
  //     paddingVertical: 10,
  //     paddingHorizontal: 20,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   buttonText: {
  //     color: 'white',
  //     fontWeight: 'bold',
  //   },
});

export default styles;
