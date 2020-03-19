import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, AsyncStorage } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

export default class LastPeriodScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastPeriod: moment(new Date()).format('YYYY-MM-DD'),
    };
  }

  saveLastPeriod = () => {
    try {
      AsyncStorage.setItem('lastPeriod', this.state.lastPeriod);
    } catch (error) {
      console.log(error);
    }

    this.props.navigation.navigate('Dashboard');
  };

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
          // Initially visible month. Default = Date()
          current={this.state.lastPeriod}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            this.setState({ lastPeriod: day['dateString'] });
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy dd MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            this.setState({ lastPeriod: month['dateString'] });
          }}
          // Hide month navigation arrows. Default = false
          // hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          // renderArrow={(direction) => (<Arrow/>)}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          // hideDayNames={true}
          // Show week numbers to the left. Default = false
          // showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
        />
        <Button title="next" onPress={this.saveLastPeriod} />
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
