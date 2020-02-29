import 'react-native-gesture-handler';
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";


export default class AvgCycleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Enter your Average Cycle Period</Text>

        <TextInput
          style={{height: 40}}
          placeholder="Type here !"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center"
  },
});
