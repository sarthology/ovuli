import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';


const calculateAverageCycle = cycles => {
  let totalCycleDays = 0;

  for (let index = 1; index < cycles.length; index++) {
    let start = moment(cycles[index - 1]).format('YYYY-MM-DD');
    let end = moment(cycles[index]).format('YYYY-MM-DD');

    // If you are using moment.js you can do it easily.

    start = moment(start, 'YYYY-MM-DD');
    end = moment(end, 'YYYY-MM-DD');

    //Difference in number of days
    let duration = moment.duration(start.diff(end)).asDays();
    totalCycleDays = totalCycleDays + duration;
  }

  let averageCycleDay = totalCycleDays / (cycles.length - 1);

  return averageCycleDay;
};

export default class calculateAverageCycle extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Enter your Last Period</Text>

        <Calendar
          style={{
            width: 90 + '%',
            borderWidth: 0.5,
            borderRadius: 8,
            borderColor: 'gray',
          }}
          current={Date()}
          markedDates={moment(new Date()).format('YYYY-MM-DD')}
          onDayPress={day => {
            console.log('selected day', day);
          }}
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
          monthFormat={'dd MM yyyy'}
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          hideExtraDays={true}
          disableMonthChange={false}
          firstDay={1}
          onPressArrowLeft={substractMonth => substractMonth()}
          onPressArrowRight={addMonth => addMonth()}
        />
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
