import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { House, User, SearchCheck } from 'lucide-react-native';
import styles from '../../styles/App.styles';
const ICONS = {
  Home: House,
  Profile: User,
  Search: SearchCheck,
};
/**state = {
  index: 0,
  routes: [
    { name: "Home" },
    { name: "Profile" },
    { name: "Search" }
  ]
}
  descriptors = {
  Home: {
    options: { title: "Home", headerShown: false }
  },
  Profile: {
    options: { title: "Profile" }
  },
  Search: {
    options: { title: "Search" }
  }
}
}
  navigation.navigate("Home") 
  Example state.routes: 
  [
  { name: "Home" },
  { name: "Profile" },
  { name: "Search" }
]
  */
const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        //route.key--> Every tab gets a unique internal ID. state.routes = [
        //   {
        //     key: "Home-abc123",
        //     name: "Home"
        //   },
        //   {
        //     key: "Profile-xyz999",
        //     name: "Profile"
        //   }
        // ]
        const isFocused = state.index === index;
        //state.index = 1 means Profile active
        const Icon = ICONS[route.name];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          //✔ if tab already active → do nothing
          //✔ if not active → switch screen
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}
            activeOpacity={0.8}
          >
            <Icon size={28} color={isFocused ? '#ff6347' : 'gray'} />

            {/* optional label (you can remove for pure dock look) */}
            <View style={{ height: 4 }} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
/**User taps “Profile”:
 * TouchableOpacity pressed
   ↓
onPress()
   ↓
navigation.emit(tabPress)
   ↓
navigation.navigate("Profile")
   ↓
state.index changes
   ↓
UI re-renders
   ↓
Profile icon becomes active
 */
export default CustomTabBar;
