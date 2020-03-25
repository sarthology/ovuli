import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TextInput, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

export default class CalculatingCyclePeriodPage extends Component {
  state = {
    markedDates: {},
    isStartDatePicked: false,
    isEndDatePicked: false,
    duration: '',
    startDate: '',
  };

  onDayPress = day => {
    if (this.state.isStartDatePicked == false) {
      let markedDates = {};
      markedDates[day.dateString] = { startingDay: true, color: '#00B0BF', textColor: '#FFFFFF' };
      this.setState({
        markedDates: markedDates,
        isStartDatePicked: true,
        isEndDatePicked: false,
        duration: '',
        startDate: day.dateString,
      });
    } else {
      let markedDates = this.state.markedDates;
      let startDate = moment(this.state.startDate);
      let endDate = moment(day.dateString);
      let range = endDate.diff(startDate, 'days');
      let duration = moment.duration(startDate.diff(endDate)).asDays();
      if (range > 0) {
        for (let i = 1; i <= range; i++) {
          let tempDate = startDate.add(1, 'day');
          tempDate = moment(tempDate).format('YYYY-MM-DD');
          if (i < range) {
            markedDates[tempDate] = { color: '#00B0BF', textColor: '#FFFFFF' };
          } else {
            markedDates[tempDate] = { endingDay: true, color: '#00B0BF', textColor: '#FFFFFF' };
          }
        }
        this.setState({
          markedDates: markedDates,
          isStartDatePicked: false,
          isEndDatePicked: true,
          duration: '29',
          startDate: '',
        });
      } else {
        alert('Select an upcomming date!');
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>On the Calender shown below Please select :</Text>
        <Text style={styles.welcome}>1. First day of previous menstrual period.</Text>
        <Text style={styles.welcome}>2. First day of latest menstrual period.</Text>
        <Calendar
          maxDate={Date()}
          monthFormat={'MMMM yyyy'}
          markedDates={this.state.markedDates}
          markingType="period"
          hideExtraDays={true}
          hideDayNames={true}
          onDayPress={this.onDayPress}
        />
        <Text style={styles.welcome}>The ovulation cycle is of following Days </Text>
        <TextInput
          style={styles.welcome}
          placeholder="00 Days"
          onChangeText={text => this.setState({ text })}
          value={this.state.duration}
        />
        <Button title="next" onPress={() => this.props.navigation.navigate('LastPeriod')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 17,
    padding: 4,
    textAlign: 'left',
  },
});
