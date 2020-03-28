import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button } from 'react-native';
import { calculateOvuli, calculateAverageCycle } from '@/util/ovuli';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avgCycle: '',
      lastPeriod: '',
      calculateCycle: '',
    };
  }

  reset = () => {
    try {
      AsyncStorage.removeItem('Name');
      AsyncStorage.removeItem('lastPeriod');
      AsyncStorage.removeItem('useLanguage');
      AsyncStorage.removeItem('AvgPeriod');
    } catch (err) {
      console.log(err);
    }
  };

  async componentDidMount() {
    const avgCycle = AsyncStorage.getItem('AvgPeriod');
    if (avgCycle !== '') {
      this.setState({ avgCycle });
    }

    const lastPeriod = await AsyncStorage.getItem('lastPeriod');
    const secondlastPeriod = await AsyncStorage.getItem('secondLastPeriod');
    const thirdlastPeriod = await AsyncStorage.getItem('thirdLastPeriod');

    const cycle = calculateAverageCycle([lastPeriod, secondlastPeriod, thirdlastPeriod]);
    this.setState({ calculateCycle: cycle });

    console.log(secondlastPeriod, thirdlastPeriod);
    if (lastPeriod !== '') {
      this.setState({ lastPeriod });
    }
  }

  render() {
    let avgCycle = this.state.avgCycle.toString();
    let lastPeriod = this.state.lastPeriod;
    const data = calculateOvuli({ lastDate: lastPeriod }, { averageCycle: avgCycle });

    return (
      <View style={styles.container}>
        <Text>The Average Cycle is {this.state.calculateCycle}</Text>
        <Text>
          Approximate Ovulation Date : {data['approximateOvulationDate']['day']}-
          {data['approximateOvulationDate']['month']}
        </Text>
        <Text>
          Next Period Date : {data['nextPeriodDate']['day']}-{data['nextPeriodDate']['month']}
        </Text>
        <Text>
          Next Pregnancy Test Date : {data['nextPregnancTestDate']['day']}-
          {data['nextPregnancTestDate']['month']}
        </Text>
        <Text style={{ marginTop: 20 }}>
          Fertile Window : START :: {data['fertileWindow']['start']}
        </Text>
        <Text>Fertile Window : END :: {data['fertileWindow']['end']}</Text>
        <Text>Fertile Window : START MONTH :: {data['fertileWindow']['startMonth']}</Text>
        <Button title="Reset" onPress={this.reset} />
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
