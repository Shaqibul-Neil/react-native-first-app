import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    gap: 20,
    padding: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },

  text1: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 20,
  },
  button: {
    backgroundColor: '#3a3a3a',
    borderRadius: 50,
    borderWidth: 2,
    borderBottomColor: '#ff0000d0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
