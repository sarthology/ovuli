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

        <Picker style={styles.cont}
          selectedValue={this.state.PickerSelection}
          style={{backgroundColor: "#FADBD8" , height: 50, width: 250}}
          itemStyle={{ backgroundColor: "#FADBD8" }}
          onValueChange={(itemValue, itemIndex) =>this.setState({PickerSelection: itemValue}) }>
        <Picker.Item label="AVERAGE CYCLE DURATION" value="NULL" />
        <Picker.Item label="10 days" value="10" />
        <Picker.Item label="11 days" value="11" />
        <Picker.Item label="12 days" value="12" />    
        <Picker.Item label="13 days" value="13" />
        <Picker.Item label="14 days" value="14" />
        <Picker.Item label="15 days" value="15" />
        <Picker.Item label="16 days" value="16" />
        <Picker.Item label="17 days" value="17" />
        <Picker.Item label="18 days" value="18" />
        <Picker.Item label="19 days" value="19" />    
        <Picker.Item label="20 days" value="20" />
        <Picker.Item label="21 days" value="21" />
        <Picker.Item label="22 days" value="22" />
        <Picker.Item label="23 days" value="23" />
        <Picker.Item label="24 days" value="24" />
        <Picker.Item label="25 days" value="25" />
        <Picker.Item label="26 days" value="26" />
        <Picker.Item label="27 days" value="27" />
        <Picker.Item label="28 days" value="28" />
        <Picker.Item label="29 days" value="29" />    
        <Picker.Item label="30 days" value="30" />
        <Picker.Item label="31 days" value="31" />
        <Picker.Item label="32 days" value="32" />
        <Picker.Item label="33 days" value="33" />
        <Picker.Item label="34 days" value="34" />
        <Picker.Item label="35 days" value="35" />
        <Picker.Item label="36 days" value="36" />
        <Picker.Item label="37 days" value="37" />
        <Picker.Item label="38 days" value="38" />
        <Picker.Item label="39 days" value="39" />    
        <Picker.Item label="40 days" value="40" />
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
  cont: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#FADBD8',
  },
});
