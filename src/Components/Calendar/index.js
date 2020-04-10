import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-toggle-calendar';
import moment from 'moment';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CalendarHeader from './CalendarHeader';
let calendarDate = moment();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendarStyle: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  firstHorizontalLine: {
    marginTop: 5,
    borderBottomColor: '#e8f1fb',
    borderBottomWidth: 3,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-around',
  },
  firstIconContainer: {
    flexDirection: 'row',
  },
  ovulationText: {
    alignSelf: 'center',
    marginLeft: 5,
  },
  secondIconContainer: {
    flexDirection: 'row',
  },
  periodsText: {
    alignSelf: 'center',
    marginLeft: 5,
  },
});

const CalendarComponent = props => {
  const [calendarState, setCalendarDate] = React.useState(calendarDate.format('YYYY-MM-DD'));
  function onPressArrowLeft() {
    calendarDate = calendarDate.add(-1, 'month');
    updateCalendarDate();
  }
  function onPressArrowRight() {
    calendarDate = calendarDate.add(1, 'month');
    updateCalendarDate();
  }
  function onPressListView() {
    //his.setState({ horizontal: true });
  }
  function onPressGridView() {
    //this.setState({ horizontal: false });
  }
  function onDayPress(date) {
    // calendarDate = moment(date.dateString);
    // this.updateCalendarDate();
  }
  function updateCalendarDate() {
    setCalendarDate(calendarDate.format('YYYY-MM-DD'));
  }
  return (
    <View style={styles.container}>
      <Calendar
        current={calendarState}
        // dayComponent={CalendarDayComponent}
        calendarHeaderComponent={CalendarHeader}
        headerData={{
          calendarDate: calendarDate.format('MMM, YYYY'),
        }}
        style={styles.calendarStyle}
        theme={{
          textDayFontSize: 18,
        }}
        markingType={'custom'} //{"period"}
        markedDates={{
          [calendarState]: {
            customStyles: {
              container: {
                backgroundColor: '#e35052',
              },
              text: {
                color: '#eeee',
                fontWeight: 'bold',
              },
            },
          },
          '2020-04-10': {
            customStyles: {
              container: {
                backgroundColor: '#fab3a0',
              },
              text: { color: '#635e5d' },
            },
          },
          '2020-04-11': {
            customStyles: {
              container: {
                backgroundColor: '#fab3a0',
              },
              text: { color: '#635e5d' },
            },
          },
        }}
        onDayPress={onDayPress}
        onPressArrowLeft={onPressArrowLeft}
        onPressArrowRight={onPressArrowRight}
        onPressListView={onPressListView}
        onPressGridView={onPressGridView}
        horizontal={false}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        onDayPress={onDayPress}
        hideExtraDays
      />
      <View style={styles.firstHorizontalLine} />
      <View style={styles.iconContainer}>
        <View style={styles.firstIconContainer}>
          <MaterialCommunityIcons name="checkbox-blank-circle" size={32} color="#fbc0b0" />
          <Text style={styles.ovulationText}>Ovulation</Text>
        </View>
        <View style={styles.secondIconContainer}>
          <MaterialCommunityIcons name="checkbox-blank-circle" size={32} color="#d2e1fc" />
          <Text style={styles.periodsText}>Periods</Text>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: '#e8f1fb',
          borderBottomWidth: 3,
        }}
      />
    </View>
  );
};

export default CalendarComponent;
