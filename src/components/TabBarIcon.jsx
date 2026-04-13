import { House, User, SearchCheck } from 'lucide-react-native';

const ICONS = {
  Home: House,
  Profile: User,
  Search: SearchCheck,
};

const TabBarIcon = ({ routeName, color, focused }) => {
  const Icon = ICONS[routeName];
  if (!Icon) return null;

  return <Icon size={focused ? 26 : 24} color={color} />;
};

export default TabBarIcon;
