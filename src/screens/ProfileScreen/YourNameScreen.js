import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, AsyncStorage } from 'react-native';

export default class YourNameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  saveName = async () => {
    // Saving the Name in Asyncstorage
    try {
      await AsyncStorage.setItem('Name', this.state.text);
    } catch (e) {
      console.log(e);
    }

    // Navigating to the next screen
    this.props.navigation.navigate('AverageCycle');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Enter Your Name</Text>

        <TextInput
          style={styles.inputContainer}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          placeholder="Please Enter your name here"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={this.saveName}>
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
  welcome: {
    fontSize: 25,
  },
  inputContainer: {
    margin: 15,
    height: 40,
    borderColor: 'blue',
    padding: 8,
    borderWidth: 0.5,
    borderRadius: 8,
    width: '80%',
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
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
});
