import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({});

/*
  - User can pass following types:
    - type
    - placeholder
    - onPress
    - name
    - style
*/

const CustomTextInput = ({ placeholder, type, onChangeText, name, style }) => {
  return (
    <TextInput
      placeholder={placeholder}
      name={name}
      onChangeText={onChangeText}
      type={type}
      style={[styles, style]}
    />
  );
};

export default CustomTextInput;
