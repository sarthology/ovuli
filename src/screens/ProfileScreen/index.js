import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import YourNameScreen from './YourNameScreen';
import AvgCycleScreen from './AvgCycleScreen';
import LastPeriodScreen from './LastPeriodScreen';

const Stack = createStackNavigator();

function ProfileStack(){
  return(
  <Stack.Navigator>
    <Stack.Screen name="YourNameScreen" component={YourNameScreen} />
    <Stack.Screen name="AvgCycleScreen" component={AvgCycleScreen} />
    <Stack.Screen name="LastPeriodScreen" component={LastPeriodScreen} />
  </Stack.Navigator>
  );
}

export default ProfileStack;