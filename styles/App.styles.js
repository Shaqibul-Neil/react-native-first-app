import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fcf5f5',
    padding: '4%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ff0000',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#030303',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#333',
  },
  tabbar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,

    backgroundColor: '#000',
    borderRadius: 30,
    height: 75,

    justifyContent: 'space-around',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },

  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // container: {
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: '#fcfcfc',
  //   gap: 20,
  //   padding: 20,
  // },
  // card: {
  //   width: 200,
  //   backgroundColor: 'white',
  //   borderRadius: 10,
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   gap: 5,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // image: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50,
  // },
  // text1: {
  //   fontSize: 60,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  // text2: {
  //   fontSize: 30,
  //   textAlign: 'center',
  // },
  // input: {
  //   width: '100%',
  //   height: 50,
  //   borderWidth: 1,
  //   borderColor: '#ff0000',
  //   borderRadius: 10,
  //   paddingVertical: 5,
  //   paddingHorizontal: 10,
  //   fontSize: 16,
  // },
  //   buttonText: {
  //     color: 'white',
  //     fontWeight: 'bold',
  //   },
});

export default styles;
