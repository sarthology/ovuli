import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';

const wheelPickerData = ['Hindi', 'Marathi', 'English', 'Telugu', 'Tulu', 'Tamil'];

export default class LanguageScreen extends Component {
  state = { selectedItem: 0 };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Select your language</Text>

        <Text>Selected language: {wheelPickerData[this.state.selectedItem]}</Text>

        <WheelPicker
          selectedItem={this.state.selectedItem}
          data={wheelPickerData}
          onItemSelected={this.onItemSelected}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('Name')}
        >
          <Text style={{ fontSize: 22 }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    backgroundColor: '#45CE30',
    borderRadius: 10,
    padding: 8,
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    width: '20%',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  welcome: {
    fontSize: 25,
  },
});
