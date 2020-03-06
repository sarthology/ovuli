import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default class YourNameScreeen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Please Enter Your Name</Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid = "transparent"
          autoCapitalize = "none"
          placeholder="  Enter your name here "
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPress} title="Next" color="#FFFFFF" />
      </View>
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
    textAlign: 'center',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    width: '80%'
 },
  buttonContainer: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000000',
    width: 120,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.5
  }
});
