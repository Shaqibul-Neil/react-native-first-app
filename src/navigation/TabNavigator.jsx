// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home';
// import Profile from '../screens/Profile';
// import Search from '../screens/Search';
// import TabBarIcon from '../components/TabBarIcon';
// // import { Platform } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   const insets = useSafeAreaInsets() || { bottom: 0 };
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={({ route }) => ({
//         headerShown: false,

//         tabBarIcon: ({ color, size, focused }) => (
//           <TabBarIcon
//             routeName={route.name}
//             color={color}
//             size={size}
//             focused={focused}
//           />
//         ),

//         tabBarActiveTintColor: '#ff6347',
//         tabBarInactiveTintColor: 'gray',
//         tabBarShowLabel: false,

//         // tabBarStyle: {
//         //   backgroundColor: '#000',
//         //   height: 70 + insets.bottom, //SafeArea fix
//         //   paddingBottom: insets.bottom,
//         //   //   paddingBottom: Platform.OS === 'ios' ? 20 : 20, //SafeArea fix
//         //   paddingTop: 8,
//         // },

//         //Modern floating tab
//         tabBarStyle: {
//           position: 'absolute',
//           bottom: 15,
//           left: 20,
//           right: 20,
//           borderRadius: 25,
//           height: 60,
//           backgroundColor: 'black',
//           shadowColor: '#000',
//           shadowOpacity: 0.2,
//           shadowRadius: 10,
//           elevation: 10,
//         },
//         tabBarItemStyle: {
//           flex: 1,
//           paddingTop: 6,
//           justifyContent: 'center',
//           alignItems: 'center',
//         },

//         tabBarLabelStyle: {
//           fontSize: 12,
//           fontWeight: '500',
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Profile" component={Profile} />
//       <Tab.Screen name="Search" component={Search} />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();
const renderTabBar = props => <CustomTabBar {...props} />;

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={renderTabBar}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
