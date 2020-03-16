import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

export default class CalculatingCyclePeriodPage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  } 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>First day of latest menstrual period:</Text>
        <TextInput
          style={styles.inputContainer}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('CalenderPage')}
        >
        <Text style={{ fontSize: 22 }}>|C|</Text>
        </TouchableOpacity>

        <Text style={styles.welcome}>First day of previous menstrual period:</Text>
        <TextInput
          style={styles.inputContainer}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('CalenderPage')}
        >
        <Text style={{ fontSize: 22 }}>|C|</Text>
        </TouchableOpacity>

        <Button title="next" onPress={() => this.props.navigation.navigate('Dashboard')} />
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
    fontSize: 12,
    textAlign: 'center',
    margin: 12,
  },
  inputContainer: {
    margin: 15,
    height: 30,
    borderColor: 'blue',
    padding: 8,
    borderWidth: 0.5,
    borderRadius: 8,
    width: '80%',
  },
  buttonContainer: {
    backgroundColor: '#45CE30',
    borderRadius: 5,
    padding: 8,
    height: 30,
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
