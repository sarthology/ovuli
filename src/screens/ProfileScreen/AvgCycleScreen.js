import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,Picker, TextInput } from 'react-native';

export default class AvgCycleScreen extends Component {
  constructor(props) {
		super(props);
		this.state = {
	  PickerSelection: "NULL"
		};
	}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Enter your Average Cycle Period</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here !"
          onChangeText={text => this.setState({ text })}
          value={this.state.PickerSelection}  
        />

        <Picker
          selectedValue={this.state.PickerSelection}
          style={{backgroundColor: "#FADBD8" , height: 50, width: 800}}
          onValueChange={(itemValue, itemIndex) =>this.setState({PickerSelection: itemValue}) }>
        <Picker.Item style={{color:'#FADBD8'}} label="AVERAGE CYCLE DURATION" value="NULL" />
        <Picker.Item style={{color:'#FADBD8'}} label="3 days" value="3" />
        <Picker.Item style={{color:'#FADBD8'}} label="4 days" value="4" />
        <Picker.Item style={{color:'#FADBD8'}} label="5 days" value="5" />    
        <Picker.Item style={{color:'#FADBD8'}} label="6 days" value="6" />
        <Picker.Item style={{color:'#FADBD8'}} label="7 days" value="7" />
        <Picker.Item style={{color:'#FADBD8'}} label="8 days" value="8" />
        <Picker.Item style={{color:'#FADBD8'}} label="9 days" value="9" />
        <Picker.Item style={{color:'#FADBD8'}} label="10 days" value="10" />
        </Picker>
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
    fontSize: 20,
    textAlign: 'center',
  },
});
