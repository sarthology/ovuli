import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageScreen from '@/screens/ProfileScreen/LanguageScreen';
import YourNameScreen from '@/screens/ProfileScreen/YourNameScreen';
import AvgCycleScreen from '@/screens/ProfileScreen/AvgCycleScreen';
import DoYouKnow from '@/screens/ProfileScreen/DoYouKnow';
import LastPeriodScreen from '@/screens/ProfileScreen/LastPeriodScreen';
import SecondLastPeriodScreen from '@/screens/ProfileScreen/SecondLastPeriodScreen';
import ThirdLastPeriodScreen from '@/screens/ProfileScreen/ThirdLastPeriodScreen';
import CalculatingCyclePeriodPage from '@/screens/ProfileScreen/ThirdLastPeriodScreen';
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Language" headerMode="none">
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Name" component={YourNameScreen} />
      <Stack.Screen name="AverageCycle" component={AvgCycleScreen} />
      <Stack.Screen name="DoYouKnow" component={DoYouKnow} />
      <Stack.Screen name="LastPeriod" component={LastPeriodScreen} />
      <Stack.Screen name="SecondLastPeriod" component={SecondLastPeriodScreen} />
      <Stack.Screen name="ThirdLastPeriod" component={ThirdLastPeriodScreen} />
      <Stack.Screen name="CalculatingCyclePeriodPage" component={CalculatingCyclePeriodPage} />
      <Stack.Screen name="Dashboard" component={BottomTabs} />
    </Stack.Navigator>
  );
}
