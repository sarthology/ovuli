import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';

export default function CustomNavigationContainer(props) {
  const navigationRef = React.useRef();

  return (
    <NavigationContainer ref={navigationRef} {...props} independent={true}>
      <RootStack />
    </NavigationContainer>
  );
}
