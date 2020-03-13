import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

export default class CalculatingCyclePeriodPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Select the first date of Bleeding of one Period</Text>

        <Calendar
          style={{
            width: 90 + '%',
            borderWidth: 0.5,
            borderRadius: 8,
            borderColor: 'gray',
          }}
          current={Date()}
          start = {moment(cycles[index - 1]).format('YYYY-MM-DD')}
         // start={moment(new Date()).format('YYYY-MM-DD')}
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

        <Text style={styles.welcome}>Select the first date of Bleeding of next Period</Text>
 
        <Calendar
          style={{
            width: 90 + '%',
            borderWidth: 0.5,
            borderRadius: 8,
            borderColor: 'gray',
          }}
          current={Date()}
          end = {moment(cycles[index]).format('YYYY-MM-DD')}
          //end={moment(new Date()).format('YYYY-MM-DD')}
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
