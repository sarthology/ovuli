import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
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
        <FlatList
          style={styles.numberList}
          horizontal
          data={dates}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.setState({ cycle: item })}>
              <Text style={[this.state.cycle === item ? styles.selected : styles.number]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
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

  numberList: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 50,
  },

  number: {
    fontSize: 20,
    color: '#a3a3a3',
    margin: 30,
    textAlign: 'center',
  },

  selected: {
    fontSize: 20,
    color: '#fff',
    margin: 30,
    borderWidth: 5,
    borderColor: '#F77662',
    backgroundColor: '#F77662',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 50,
    borderRightWidth: 20,
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
});
