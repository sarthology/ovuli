import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from '@/screens/HomeScreen';
import HistoryScreen from '@/screens/HistoryScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import BottomTabIcon from './BottomIcon';
import i18n from '@/i18n';
const Tab = createBottomTabNavigator();

const Colors = {
  lightOrange: '#F78161',
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.lightOrange,

        style: {},
      }}
    >
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color: color }}>{i18n.t('history')}</Text>,
          tabBarIcon: ({ color, size }) => <BottomTabIcon name="clock" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color: color }}>{i18n.t('home')}</Text>,

          tabBarIcon: ({ color, size }) => <BottomTabIcon name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ color: color }}>{i18n.t('profile')}</Text>,
          tabBarIcon: ({ color, size }) => (
            <BottomTabIcon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
