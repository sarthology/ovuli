import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { calculateOvuli } from '@/util/ovuli';

const moment = require('moment');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  linearGradient: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  circle: {
    alignItems: 'center',
    marginTop: 50,
  },
  circleContainer: {
    backgroundColor: '#fff',
    borderRadius: 250,
  },
  text: {
    alignItems: 'center',
    marginTop: Dimensions.get('window').height / 3 - 100,
  },
});

const LeftDays = () => {
  const [name, setName] = useState('');
  const [avgCycle, setAvgCycle] = useState(0);
  const [lastPeriod, setLastPeriod] = useState(0);
  const [ovulationDaysLeft, setOvulationDaysLeft] = useState(0);
  const [periodDaysLeft, setPeriodDaysLeft] = useState(0);
  const [progress, setProgress] = useState(0);
  const [greeting, setGreeting] = useState('');

  // Fetches name of the user from AsyncStorage
  const getName = async () => {
    try {
      let user_name = await AsyncStorage.getItem('Name');
      setName(user_name);
    } catch (error) {
      console.log('Error fetching name in LeftDays', error);
    }
  };

  useEffect(() => {
    getName(); // Fetching name of the user
    (async function() {
      const avgCycle = await AsyncStorage.getItem('AvgPeriod');
      const lastPeriod = await AsyncStorage.getItem('lastPeriod');
      setAvgCycle(avgCycle);
      setLastPeriod(lastPeriod);
    })();

    const ovuliResult = calculateOvuli({ lastDate: lastPeriod }, { averageCycle: avgCycle });

    const today = moment();

    const hour = today.hour();

    if (hour >= 4 && hour < 12) setGreeting('Good Morning');
    else if (hour >= 12 && hour < 19) setGreeting('Good Evening');
    else setGreeting('Good Night');

    let ovulationDate = moment([
      today.year(),
      ovuliResult['approximateOvulationDate']['month'],
      ovuliResult['approximateOvulationDate']['day'],
    ]);

    let periodDate = moment([
      today.year(),
      ovuliResult['nextPeriodDate']['month'],
      ovuliResult['nextPeriodDate']['day'],
    ]);

    setOvulationDaysLeft(ovulationDate.diff(today, 'days'));

    setPeriodDaysLeft(periodDate.diff(today, 'days'));

    const progress = 100 - (Math.ceil(periodDaysLeft) / 40) * 100;
    setProgress(progress);
  });

  const contentCircle = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontFamily: 'PT-Sans', fontWeight: '700', fontSize: 25 }}>
          {parseInt(periodDaysLeft)}
        </Text>
        <Text style={{ fontFamily: 'PT-Sans', marginTop: 8, fontSize: 16 }}>Days to Period</Text>
        <Text
          style={{
            fontFamily: 'PT-Sans',
            fontWeight: '700',
            marginTop: 25,
            fontSize: 25,
            fontSize: 25,
          }}
        >
          {parseInt(ovulationDaysLeft)}
        </Text>
        <Text style={{ fontFamily: 'PT-Sans', marginTop: 8, fontSize: 16 }}>Days to Ovulation</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={['#F78161', '#F65863']}
        start={[0.2, 0.3]}
        end={[0.2, 0.6]}
        style={styles.linearGradient}
      >
        <View style={styles.text}>
          <Text style={{ fontFamily: 'PT-Sans', fontSize: 28 }}>{greeting}</Text>
          <Text style={{ fontFamily: 'PT-Sans', fontWeight: '700', fontSize: 30, marginTop: 25 }}>
            {name}
          </Text>
        </View>
        <View style={styles.circle}>
          <AnimatedCircularProgress
            size={Dimensions.get('window').width - 75}
            width={18}
            fill={progress}
            tintColor="#C5DEFF"
            lineCap={'butt'}
            style={styles.circleContainer}
          >
            {fill => contentCircle()}
          </AnimatedCircularProgress>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LeftDays;
