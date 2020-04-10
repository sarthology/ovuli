import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Calendar from '../../Components/Calendar/index';
import { calculateOvuli, calculateAverageCycle } from '@/util/ovuli';
import i18n from '../../i18n';
//import Constants from 'expo-constants';
//import Calendar from './Calendar/CalendarComponent';

const styles = StyleSheet.create({
  scrollview: {
    marginTop: 10,
  },
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

const HomeScreen = () => {
  const [avgCycle, setAvgCycle] = React.useState('');
  const [lastPeriod, setLastPeriod] = React.useState('');
  const [calculateCycle, setCalculateCycle] = React.useState('');

  React.useEffect(() => {
    (async function() {
      const avgCycle = await AsyncStorage.getItem('AvgPeriod');
      const lastPeriod = await AsyncStorage.getItem('lastPeriod');
      const secondLastPeriod = await AsyncStorage.getItem('secondLastPeriod');
      const thirdLastPeriod = await AsyncStorage.getItem('thirdLastPeriod');

      const cycle = calculateAverageCycle([lastPeriod, secondLastPeriod, thirdLastPeriod]);
      setCalculateCycle(cycle);
      setAvgCycle(avgCycle);
      setLastPeriod(lastPeriod);
    })();
  });

  const ovuliResult = calculateOvuli({ lastDate: lastPeriod }, { averageCycle: avgCycle });

  const resetCycle = async () => {
    await AsyncStorage.removeItem('Name');
    await AsyncStorage.removeItem('lastPeriod');
    await AsyncStorage.removeItem('userLanguage');
    await AsyncStorage.removeItem('AvgPeriod');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* {console.log(ovuliResult['fertileWindow']['start'])} */}
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <Text>The Average Cycle is {calculateCycle}</Text>
          <Text>
            Approximate Ovulation Date : {ovuliResult['approximateOvulationDate']['day']}-
            {ovuliResult['approximateOvulationDate']['month']}
          </Text>
          <Text>
            Next Period Date : {ovuliResult['nextPeriodDate']['day']}-
            {ovuliResult['nextPeriodDate']['month']}
          </Text>
          <Text>
            Next Pregnancy Test Date : {ovuliResult['nextPregnancTestDate']['day']}-
            {ovuliResult['nextPregnancTestDate']['month']}
          </Text>
          <Text style={{ marginTop: 20 }}>
            Fertile Window : START :: {ovuliResult['fertileWindow']['start']}
          </Text>
          <Text>Fertile Window : END :: {ovuliResult['fertileWindow']['end']}</Text>
          <Text>Fertile Window : START MONTH :: {ovuliResult['fertileWindow']['startMonth']}</Text>
          <Button title="Reset" onPress={resetCycle} />
          <View style={{ flexDirection: 'row' }}>
            <Calendar />
            {/* fertileWindowStart={ovuliResult['fertileWindow']['start']} /> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
