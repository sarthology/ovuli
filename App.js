import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
//import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Feather } from 'react-native-vector-icons';

import HistoryScreen from './src/screens/HistoryScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeScreen from './src/screens/HomeScreen';

import YourNameScreen from './src/screens/ProfileScreen/YourNameScreen';
import LanguageScreen from './src/screens/ProfileScreen/LanguageScreen';
import DoYouKnow from './src/screens/ProfileScreen/DoYouKnow';

import AvgCycleScreen from './src/screens/ProfileScreen/AvgCycleScreen';
import LastPeriodScreen from './src/screens/ProfileScreen/LastPeriodScreen';
import CalculatingCyclePeriodPage from './src/screens/ProfileScreen/CalculatingCyclePeriodPage';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        style: {},
      }}
    >
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <Feather name="clock" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Dashboard" component={TabNavigator} />
        {/* <Stack.Screen name="Language" component={LanguageScreen} /> */}
        <Stack.Screen name="Name" component={YourNameScreen} />
        <Stack.Screen name="DoYouKnow" component={DoYouKnow} />
        <Stack.Screen name="AverageCycle" component={AvgCycleScreen} />
        <Stack.Screen name="LastPeriod" component={LastPeriodScreen} />
        <Stack.Screen name="CalculatingCyclePeriodPage" component={CalculatingCyclePeriodPage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
