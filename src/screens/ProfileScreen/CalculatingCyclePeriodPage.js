import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

export default class CalculatingCyclePeriodPage extends Component {

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
       <Button title="|C|" onPress={() => this.props.navigation.navigate('CalenderPage')} />
        <TextInput
          style={styles.inputContainer}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        
        <Button title="|C|" onPress={() => this.props.navigation.navigate('CalenderPage')} />

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
 
});
