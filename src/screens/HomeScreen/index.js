import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import Calendar from '@/Components/Calendar/index';
import LeftDays from './LeftDays';

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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scrollview}>
        <LeftDays />
        <View style={{ flexDirection: 'row' }}>
          <Calendar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
