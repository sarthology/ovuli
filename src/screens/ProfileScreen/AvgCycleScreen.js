import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Picker,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import top from '../../../wireframe/assets/Avg_Cycle/top.png';
import How_long_is_your_cycle from '../../../wireframe/assets/Avg_Cycle/How_long_is_your_cycle.png';

export default class AvgCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cycle: '',
    };
  }

  render() {
    var dates = [];
    for (var i = 1; i < 31; i++) {
      dates.push(i);
    }
    return (
      <View>
        <StatusBar hidden />
        <Image source={top} style={styles.top} />
        <Image source={How_long_is_your_cycle} style={styles.cycleText} />
        <Picker
          style={styles.cont}
          selectedValue={this.state.PickerSelection}
          itemStyle={{ backgroundColor: '#FADBD8' }}
          onValueChange={(itemValue, itemIndex) => this.setState({ PickerSelection: itemValue })}
        >
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('LastPeriod')}
        >
          <Text style={styles.buttonText}>Continue</Text>
          <AntDesign
            style={{ alignSelf: 'center', color: '#F55963' }}
            name="arrowright"
            size={18}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 2,
  },

  cycleText: {
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 3 - 150,
    marginBottom: 40,
  },

  button: {
    borderWidth: 2,
    width: 120,
    borderRadius: 5,
    borderColor: '#F55963',
    position: 'absolute',
    right: 30,
    top: Dimensions.get('window').height - 50,
    flex: 1,
    flexDirection: 'row',
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
    paddingLeft: 10,
    color: '#F55963',
  },

  cont: {
    backgroundColor: '#FADBD8',
    height: 50,
    width: 250,
    alignSelf: 'center',
  },
});
