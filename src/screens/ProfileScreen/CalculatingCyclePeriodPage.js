import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
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

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('calender')}
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
          onPress={() => this.props.navigation.navigate('calender')}
        >
        <Text style={{ fontSize: 22 }}>|C|</Text>
        </TouchableOpacity>

        <Text style={styles.welcome}>First day of preceding menstrual period:</Text>
        <TextInput
          style={styles.inputContainer}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('calender')}
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
    fontSize: 30,
    textAlign: 'center',
    margin: 12,
  },
});
