import 'react-native-gesture-handler';
import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import HistoryScreen from './src/screens/HistoryScreen'
import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'


const Tab = createBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName="Home" 
          tabBarOptions={{
            activeTintColor: '#e91e63',
            style: {}
          }} 
        >
          <Tab.Screen 
            name="History" 
            component={HistoryScreen}
            options={{
              tabBarLabel: 'History',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="history" color={color} size={size} />
              ),
            }} />
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }} />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}