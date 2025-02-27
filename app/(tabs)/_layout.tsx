import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Image } from 'react-native'; 
import { icons} from '@/content/assets';
export default function TabLayout() {
  return (
    <Tabs initialRouteName='home' screenOptions={{tabBarShowLabel: false, tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="home"
        options={{
            headerShown:false,

          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Image
            source={icons.taskbar1}
            style={{tintColor:"red"}}// u can also remove the width and
            /> 
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown:false,
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <Image
            source={icons.taskbar2}
            
            />
          ), 
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown:false,
          title: 'profile',
          tabBarIcon: ({ color }) =>  <Image
          source={icons.taskbar3}
          />,
        }}
      />
    </Tabs>
  );
}
