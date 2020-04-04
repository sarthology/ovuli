import * as React from 'react';

import { Feather } from 'react-native-vector-icons';

const BottomIcon = ({ name, color, size }) => {
  return <Feather name={name} color={color} size={size} />;
};

export default BottomIcon;
