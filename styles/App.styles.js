import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
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
