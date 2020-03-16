import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

export default class CalenderPage extends Component {
  render() {
    return (
      <View style={styles.container}>

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
       <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('CalculatingCyclePeriodPage')}
        >
          <Text style={{ fontSize: 22 }}>Back</Text>
        </TouchableOpacity>
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
  buttonContainer: {
    backgroundColor: '#45CE30',
    borderRadius: 5,
    padding: 8,
    height: 30,
    alignContent: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    width: '20%',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
});
